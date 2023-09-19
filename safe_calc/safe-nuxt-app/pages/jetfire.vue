<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import {activeIndex, jetFirePoint, openedPage, scenes, selectedSceneType} from "~/service/state";
import toast from "~/service/toast";

definePageMeta({
    keepalive: true,
})

let showmap = shallowRef(defineAsyncComponent(() => import("@/pages/showmap.vue")))
// 不要用useRoute，不能获取到参数
const router = useRouter()

let materialBurningHeatGetResponse = $ref({} as accsim.MaterialBurningHeatGetResponse)
axios.post(accsimUrl.MaterialBurningHeatGet).then(rep => {
    materialBurningHeatGetResponse = accsim.MaterialBurningHeatGetResponse.fromObject(rep.data)
})
// 从计算页面选择场景，跳转到地图
const OnSelectScene = () => {
    const path = "/"
    router.push({
        path: path,
    })
    selectedSceneType.value = scenes.jetFire

    if (openedPage.value.filter(page => page.to==="/").length) {
        return
    }
    openedPage.value.push({
        label: "地理位置",
        to: "/",
        icon: ""
    })
    activeIndex.value = 0
}

// 计算事故场景
let jetFireCalcRequest = $ref({} as accsim.JetFireCalcRequest)
let jetFireCalcResponse = $ref({} as accsim.JetFireCalcResponse)
jetFireCalcRequest.sceneName = jetFirePoint.value.name
jetFireCalcRequest.windSpeed = 3.4
jetFireCalcRequest.windDirection = "西风"

let loading = $ref(false)
const OnCalc = () => {
    jetFireCalcRequest.sceneName = jetFirePoint.value.name
    if (jetFireCalcRequest.sceneName === undefined || jetFireCalcRequest.sceneName === "" || jetFirePoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    if (jetFireCalcRequest.burningHeat === undefined) {
        toast.add({ severity: 'warn', summary: '请选择物质', detail: '', life: 3000 })
        return
    }

    loading = true
    axios.post(accsimUrl.JetFireCalc, jetFireCalcRequest).then(rep => {
        jetFireCalcResponse = accsim.JetFireCalcResponse.fromObject(rep.data)
        chartData.value = setChartData()
        loading = false
    })
}

let showMap = $ref(false)
const OnShowMap = () => {
    if (jetFirePoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    showMap = true
}

let accSceneSaveRequest = $ref({} as accsim.AccSceneSaveRequest)
const OnSave = () => {
    if (jetFireCalcResponse.deathRadius === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算', detail: '', life: 3000 })
        return
    }
    accSceneSaveRequest.name = jetFireCalcRequest.sceneName
    accSceneSaveRequest.type = "喷射火"
    accSceneSaveRequest.deathRadius = jetFireCalcResponse.deathRadius
    accSceneSaveRequest.bigInjuryRadius = jetFireCalcResponse.bigInjuryRadius
    accSceneSaveRequest.smallInjuryRadius = jetFireCalcResponse.smallInjuryRadius
    accSceneSaveRequest.targetDis = jetFireCalcRequest.targetDis
    accSceneSaveRequest.windDirection = jetFireCalcRequest.windDirection
    accSceneSaveRequest.windSpeed = jetFireCalcRequest.windSpeed
    accSceneSaveRequest.liquidTankDiameter = jetFireCalcResponse.fireDiameter
    accSceneSaveRequest.latitude = jetFirePoint.value.location[0]
    accSceneSaveRequest.longitude = jetFirePoint.value.location[1]
    axios.post(accsimUrl.AccSceneSave, accSceneSaveRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 })
    })
}
import { onMounted } from "vue";

const chartData = ref()
const chartOptions = ref()

onMounted(() => {
    chartData.value = setChartData()
    chartOptions.value = setChartOptions()
});


const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: jetFireCalcResponse.xs,
        datasets: [
            {
                label: '目标热辐射通量',
                data: jetFireCalcResponse.ys,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                },
                title: {
                    display: true,
                    text: '目标距离'
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                },
                title: {
                    display: true,
                    text: '目标热辐射通量'
                }
            }
        }
    };
}
</script>

<template>
    <div v-show="showMap">
        <Button text label="< 返回" @click="showMap=false"></Button>
        <component :is="showmap" v-if="showMap" :sceneName="jetFireCalcRequest.sceneName" :locationX="jetFirePoint.location[0]" :locationY="jetFirePoint.location[1]" :fx="jetFireCalcRequest.windDirection" :zs="jetFireCalcResponse.bigInjuryRadius" :qs="jetFireCalcResponse.smallInjuryRadius" :sw="jetFireCalcResponse.deathRadius" :type="4"></component>
    </div>
    <div class="grid" v-show="!showMap">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>场景名称</label>
                        <InputText type="text" v-model="jetFirePoint.name"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>风向</label>
                        <Dropdown v-model="jetFireCalcRequest.windDirection" :options="[
                            {name: '北风', code: '北风'},
                            {name: '东风', code: '东风'},
                            {name: '东南风', code: '东南风'},
                            {name: '南风', code: '南风'},
                            {name: '西南风', code: '西南风'},
                            {name: '西风', code: '西风'},
                            {name: '西北风', code: '西北风'},
                            {name: '北风', code: '北风'},
                            {name: '东北风', code: '东北风'},
                        ]" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>风速(m/s)</label>
                        <InputText type="text" v-model="jetFireCalcRequest.windSpeed"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>目标距离(m)</label>
                        <InputText type="text" v-model="jetFireCalcRequest.targetDis"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>孔径(m)</label>
                        <InputText type="text" v-model="jetFireCalcRequest.aperture"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>压力(Mpa)</label>
                        <InputText type="text" v-model="jetFireCalcRequest.pressure"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质</label>
                        <Dropdown v-model="jetFireCalcRequest.burningHeat" :options="materialBurningHeatGetResponse.materials" optionLabel="name" optionValue="burningHeat" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-3">
                        <Button label="选择场景" @click="OnSelectScene"></Button>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Button label="计算" @click="OnCalc"></Button>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Button label="保存计算结果" @click="OnSave"></Button>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Button label="地图显示" @click="OnShowMap"></Button>
                    </div>

                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <ProgressSpinner v-if="loading" style="position: absolute; left: 50%; right: 50%"/>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>目标处热辐射通量(w)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.heatRadiationFlux"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火焰高度(m)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.fireHeight"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火焰直径(m)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.fireDiameter"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>死亡半径(m)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.deathRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>重伤半径(m)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.bigInjuryRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>轻伤半径(m)</label>
                        <InputText type="text" v-model="jetFireCalcResponse.smallInjuryRadius"/>
                    </div>
                    <div class="field col-12 md:col-12">
                        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

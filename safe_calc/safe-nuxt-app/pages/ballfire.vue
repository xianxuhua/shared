<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import {activeIndex, ballFirePoint, openedPage, scenes, selectedSceneType} from "~/service/state";
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
    selectedSceneType.value = scenes.ballFire

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
let ballFireCalcRequest = $ref({} as accsim.BallFireCalcRequest)
let ballFireCalcResponse = $ref({} as accsim.BallFireCalcResponse)
ballFireCalcRequest.sceneName = ballFirePoint.value.name
ballFireCalcRequest.windSpeed = 3.4
ballFireCalcRequest.windDirection = "西风"

const OnCalc = () => {
    ballFireCalcRequest.sceneName = ballFirePoint.value.name
    if (ballFireCalcRequest.sceneName === undefined || ballFireCalcRequest.sceneName === "" || ballFirePoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    if (ballFireCalcRequest.burningHeat === undefined) {
        toast.add({ severity: 'warn', summary: '请选择物质', detail: '', life: 3000 })
        return
    }

    axios.post(accsimUrl.BallFireCalc, ballFireCalcRequest).then(rep => {
        ballFireCalcResponse = accsim.BallFireCalcResponse.fromObject(rep.data)
        chartData.value = setChartData()
    })
}

let showMap = $ref(false)
const OnShowMap = () => {
    if (ballFirePoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    showMap = true
}

let accSceneSaveRequest = $ref({} as accsim.AccSceneSaveRequest)
const OnSave = () => {
    if (ballFireCalcResponse.deathRadius === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算', detail: '', life: 3000 })
        return
    }
    accSceneSaveRequest.name = ballFireCalcRequest.sceneName
    accSceneSaveRequest.type = "火球火"
    accSceneSaveRequest.deathRadius = ballFireCalcResponse.deathRadius
    accSceneSaveRequest.bigInjuryRadius = ballFireCalcResponse.bigInjuryRadius
    accSceneSaveRequest.smallInjuryRadius = ballFireCalcResponse.smallInjuryRadius
    accSceneSaveRequest.targetDis = ballFireCalcRequest.targetDis
    accSceneSaveRequest.windDirection = ballFireCalcRequest.windDirection
    accSceneSaveRequest.windSpeed = ballFireCalcRequest.windSpeed
    accSceneSaveRequest.latitude = ballFirePoint.value.location[0]
    accSceneSaveRequest.longitude = ballFirePoint.value.location[1]
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
})


const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ballFireCalcResponse.xs,
        datasets: [
            {
                label: '目标热辐射通量',
                data: ballFireCalcResponse.ys,
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
        <component :is="showmap" v-if="showMap" :sceneName="ballFireCalcRequest.sceneName" :locationX="ballFirePoint.location[0]" :locationY="ballFirePoint.location[1]" :fx="ballFireCalcRequest.windDirection" :zs="ballFireCalcResponse.bigInjuryRadius" :qs="ballFireCalcResponse.smallInjuryRadius" :sw="ballFireCalcResponse.deathRadius" :type="5"></component>
    </div>
    <div class="grid" v-show="!showMap">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>场景名称</label>
                        <InputText type="text" v-model="ballFirePoint.name"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>风向</label>
                        <Dropdown v-model="ballFireCalcRequest.windDirection" :options="[
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
                        <InputText type="text" v-model="ballFireCalcRequest.windSpeed"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泄漏量(kg)</label>
                        <InputText type="text" v-model="ballFireCalcRequest.leakage"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>目标距离(m)</label>
                        <InputText type="text" v-model="ballFireCalcRequest.targetDis"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质</label>
                        <Dropdown v-model="ballFireCalcRequest.burningHeat" :options="materialBurningHeatGetResponse.materials" optionLabel="name" optionValue="burningHeat" placeholder="Select One"></Dropdown>
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
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>目标处热辐射通量(w)</label>
                        <InputText type="text" v-model="ballFireCalcResponse.heatRadiationFlux"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>死亡半径(m)</label>
                        <InputText type="text" v-model="ballFireCalcResponse.deathRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>重伤半径(m)</label>
                        <InputText type="text" v-model="ballFireCalcResponse.bigInjuryRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>轻伤半径(m)</label>
                        <InputText type="text" v-model="ballFireCalcResponse.smallInjuryRadius"/>
                    </div>
                    <div class="field col-12 md:col-12">
                        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import {activeIndex, openedPage, scenes, sealRingPoint, selectedSceneType} from "~/service/state";
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
    selectedSceneType.value = scenes.sealRing

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
let sealRingCalcRequest = $ref({} as accsim.SealRingCalcRequest)
let sealRingCalcResponse = $ref({} as accsim.SealRingCalcResponse)
sealRingCalcRequest.sceneName = sealRingPoint.value.name
sealRingCalcRequest.windDirection = "西风"
sealRingCalcRequest.windSpeed = 3.4
sealRingCalcRequest.liquidTankDiameter = 80
sealRingCalcRequest.density = 900
sealRingCalcRequest.burningRate = 0.015
// sealRingCalcRequest.burningHeat = 41816000
sealRingCalcRequest.targetDis = 200
sealRingCalcRequest.ringWidth = 0.5

const OnCalc = () => {
    sealRingCalcRequest.sceneName = sealRingPoint.value.name
    if (sealRingCalcRequest.sceneName === undefined || sealRingCalcRequest.sceneName === "" || sealRingPoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    if (sealRingCalcRequest.burningHeat === undefined) {
        toast.add({ severity: 'warn', summary: '请选择物质', detail: '', life: 3000 })
        return
    }

    axios.post(accsimUrl.SealRingCalc, sealRingCalcRequest).then(rep => {
        sealRingCalcResponse = accsim.SealRingCalcResponse.fromObject(rep.data)
    })
}

let showMap = $ref(false)
const OnShowMap = () => {
    if (sealRingPoint.value.location[0] === 0) {
        toast.add({ severity: 'warn', summary: '请先从地图选取场景', detail: '', life: 3000 })
        return
    }
    showMap = true
}

let accSceneSaveRequest = $ref({} as accsim.AccSceneSaveRequest)
const OnSave = () => {
    if (sealRingCalcResponse.deathRadius === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算', detail: '', life: 3000 })
        return
    }
    accSceneSaveRequest.name = sealRingCalcRequest.sceneName
    accSceneSaveRequest.type = "流淌火"
    accSceneSaveRequest.deathRadius = sealRingCalcResponse.deathRadius
    accSceneSaveRequest.bigInjuryRadius = sealRingCalcResponse.bigInjuryRadius
    accSceneSaveRequest.smallInjuryRadius = sealRingCalcResponse.smallInjuryRadius
    accSceneSaveRequest.targetDis = sealRingCalcRequest.targetDis
    accSceneSaveRequest.windDirection = sealRingCalcRequest.windDirection
    accSceneSaveRequest.windSpeed = sealRingCalcRequest.windSpeed
    accSceneSaveRequest.liquidTankDiameter = sealRingCalcRequest.liquidTankDiameter
    accSceneSaveRequest.latitude = sealRingPoint.value.location[0]
    accSceneSaveRequest.longitude = sealRingPoint.value.location[1]
    accSceneSaveRequest.safeRadius = sealRingCalcResponse.safeRadius
    axios.post(accsimUrl.AccSceneSave, accSceneSaveRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 })
    })
}
</script>

<template>
    <div v-show="showMap">
        <Button text label="< 返回" @click="showMap=false"></Button>
        <component :is="showmap" v-if="showMap" :sceneName="sealRingCalcRequest.sceneName" :locationX="sealRingPoint.location[0]" :locationY="sealRingPoint.location[1]" :fx="sealRingCalcRequest.windDirection" :zs="sealRingCalcResponse.bigInjuryRadius" :qs="sealRingCalcResponse.smallInjuryRadius" :sw="sealRingCalcResponse.deathRadius" :type="3"></component>
    </div>
    <div class="grid" v-show="!showMap">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>场景名称</label>
                        <InputText type="text" v-model="sealRingPoint.name"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>风向</label>
                        <Dropdown v-model="sealRingCalcRequest.windDirection" :options="[
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
                        <InputText type="text" v-model="sealRingCalcRequest.windSpeed"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>液池直径(m)</label>
                        <InputText type="text" v-model="sealRingCalcRequest.liquidTankDiameter"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>目标距离(m)</label>
                        <InputText type="text" v-model="sealRingCalcRequest.targetDis"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质</label>
                        <Dropdown v-model="sealRingCalcRequest.burningHeat" :options="materialBurningHeatGetResponse.materials" optionLabel="name" optionValue="burningHeat" placeholder="Select One"></Dropdown>
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
                        <label>火焰表面热辐射功率(kw/m2)</label>
                        <InputText type="text" v-model="sealRingCalcResponse.thermalRadiationPower"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>死亡半径(m)</label>
                        <InputText type="text" v-model="sealRingCalcResponse.deathRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>重伤半径(m)</label>
                        <InputText type="text" v-model="sealRingCalcResponse.bigInjuryRadius"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>轻伤半径(m)</label>
                        <InputText type="text" v-model="sealRingCalcResponse.smallInjuryRadius"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import Steps from "~/components/Steps.vue";
import axios from "~/service/axios";
import {gustav} from "~/service/proto_gen/gustav/gustav_pb";
import {$ref} from "vue/macros";
import {gustavUrl} from "~/service/proto_gen/gustav/gustav_url";
import toast from "~/service/toast";
import inside from "point-in-polygon-hao";
import {exportWord} from "~/service/export";

definePageMeta({
    keepalive: true
})

let active = $ref(0)


// --------------------------火灾建筑物危险度GR分析------------------------------------
let qiGetResponse = $ref({} as gustav.QiGetResponse)
// 固定火灾载荷因子
axios.post(gustavUrl.QiGet).then(rep => {
    qiGetResponse = gustav.QiGetResponse.fromObject(rep.data)
})
// 可燃物名称
let fireBuildingRiskAnalyseGetCombustibleNamesRequest = $ref({} as gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest)
let fireBuildingRiskAnalyseGetCombustibleNamesResponse = $ref({} as gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse)
axios.post(gustavUrl.FireBuildingRiskAnalyseGetCombustibleNames).then(rep => {
    fireBuildingRiskAnalyseGetCombustibleNamesResponse = gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse.fromObject(rep.data)
})
// 耐火极限
let fireBuildingRiskAnalyseGetFireResistTopsRequest = $ref({} as gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest)
let fireBuildingRiskAnalyseGetFireResistTopsResponse = $ref({} as gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse)
axios.post(gustavUrl.FireBuildingRiskAnalyseGetFireResistTops).then(rep => {
    fireBuildingRiskAnalyseGetFireResistTopsResponse = gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse.fromObject(rep.data)
})
// 点火源特征
let fireBuildingRiskAnalyseGetFireSourceFeatureRequest = $ref({} as gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest)
let fireBuildingRiskAnalyseGetFireSourceFeatureResponse = $ref({} as gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse)
axios.post(gustavUrl.FireBuildingRiskAnalyseGetFireSourceFeature).then(rep => {
    fireBuildingRiskAnalyseGetFireSourceFeatureResponse = gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse.fromObject(rep.data)
})
// 灭火力量性质, 与消防力量直线距离
let fireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest = $ref({} as gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest)
let fireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse = $ref({} as gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse)
axios.post(gustavUrl.FireBuildingRiskAnalyseGetFireFightPowerPropertyDis).then(rep => {
    fireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse = gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fromObject(rep.data)
})
// 火灾建筑物危险度GR分析
let fireBuildingRiskAnalyseRequest = $ref({} as gustav.FireBuildingRiskAnalyseRequest)
let fireBuildingRiskAnalyseResponse = $ref({} as gustav.FireBuildingRiskAnalyseResponse)
const onCalcFireBuildingRiskAnalyse = () => {
    axios.post(gustavUrl.FireBuildingRiskAnalyse, fireBuildingRiskAnalyseRequest).then(rep => {
        fireBuildingRiskAnalyseResponse = gustav.FireBuildingRiskAnalyseResponse.fromObject(rep.data)
    })
}

// --------------------------建筑物内火灾危险度分析------------------------------------
// 人员的火灾危险特性
let buildingFireRiskAnalyseGetPersonRiskFeatureRequest = $ref({} as gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest)
let buildingFireRiskAnalyseGetPersonRiskFeatureResponse = $ref({} as gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse)
axios.post(gustavUrl.BuildingFireRiskAnalyseGetPersonRiskFeature).then(rep => {
    buildingFireRiskAnalyseGetPersonRiskFeatureResponse = gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.fromObject(rep.data)
})
// 财产的火灾危险性特征
let buildingFireRiskAnalyseGetAssetsRiskFeatureRequest = $ref({} as gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest)
let buildingFireRiskAnalyseGetAssetsRiskFeatureResponse = $ref({} as gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse)
axios.post(gustavUrl.BuildingFireRiskAnalyseGetAssetsRiskFeature).then(rep => {
    buildingFireRiskAnalyseGetAssetsRiskFeatureResponse = gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.fromObject(rep.data)
})
// 烟气的火灾危险性特征
let buildingFireRiskAnalyseGetSmokeRiskFeatureRequest = $ref({} as gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest)
let buildingFireRiskAnalyseGetSmokeRiskFeatureResponse = $ref({} as gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse)
axios.post(gustavUrl.BuildingFireRiskAnalyseGetSmokeRiskFeature).then(rep => {
    buildingFireRiskAnalyseGetSmokeRiskFeatureResponse = gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.fromObject(rep.data)
})
// 建筑物内火灾危险度分析
let buildingFireRiskAnalyseRequest = $ref({} as gustav.BuildingFireRiskAnalyseRequest)
let buildingFireRiskAnalyseResponse = $ref({} as gustav.BuildingFireRiskAnalyseResponse)
const onCalcBuildingFireRiskAnalyse = () => {
    axios.post(gustavUrl.BuildingFireRiskAnalyse, buildingFireRiskAnalyseRequest).then(rep => {
        buildingFireRiskAnalyseResponse = gustav.BuildingFireRiskAnalyseResponse.fromObject(rep.data)
    })
}

// --------------------------建筑物火灾危险度综合分析------------------------------------

let buildingFireRiskTotalAnalyseRequest = $ref({} as gustav.BuildingFireRiskTotalAnalyseRequest)
let buildingFireRiskTotalAnalyseResponse = $ref({} as gustav.BuildingFireRiskTotalAnalyseResponse)


const onNext = () => {
    if (active == 0 && fireBuildingRiskAnalyseResponse.buildingRiskGr === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算GR', detail: '', life: 3000 })
        return
    }
    if (active == 1 && buildingFireRiskAnalyseResponse.buildingFireRiskIr === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算IR', detail: '', life: 3000 })
        return
    }
    active++
}

const imgArea2 = [
    [
        [0, 0],
        [50, 0],
        [50, 255],
        [0, 255],
        [0, 0],
    ]
]
const imgArea1 = [
    [
        [0, 255],
        [50, 255],
        [50, 318],
        [21, 318],
        [21, 296],
        [0, 296],
        [0, 255]
    ]
]
const imgArea1a = [
    [
        [0, 296],
        [21, 296],
        [21, 318],
        [0, 318],
        [0, 296]
    ]
]
const imgArea5 = [
    [
        [50, 0],
        [393,0],
        [393,177],
        [250,177],
        [50,145],
        [50,0]
    ]
]
const imgArea4a = [
    [
        [50,145],
        [159,163],
        [159,208],
        [50,190],
        [50,145],
    ]
]
const imgArea4b = [
    [
        [159,163],
        [250,177],
        [393,177],
        [393,222],
        [250,222],
        [159,208],
        [159,163]
    ]
]
const imgArea3 = [
    [
        [50,190],
        [250,222],
        [393,222],
        [393,318],
        [50,318],
        [50,190]
    ]
]
let imgLeftTopPoint = $ref({
    x: 200,
    y: 20
})
let pointX = $ref(undefined as unknown as number)
let pointY = $ref(undefined as unknown as number)
let imgWidth = $ref(393)
let imgHeight = $ref(318)
const OnShowMarker = () => {
    let relativePointX = imgWidth / 7 * fireBuildingRiskAnalyseResponse.buildingRiskGr
    let relativePointY = imgHeight / 5 * (5 - buildingFireRiskAnalyseResponse.buildingFireRiskIr)
    let result = ""
    if (inside([relativePointX, relativePointY], imgArea1)) {
        result = "建筑自动消防系统属于推荐安装。而不需要强制必须安装"
    } else if (inside([relativePointX, relativePointY], imgArea1a)) {
        result = "大灾危险性很小，不需要采取安装自动消防系统"
    } else if (inside([relativePointX, relativePointY], imgArea2)) {
        result = "建筑本身火灾危险性较大，而建筑内人员与财产火火危险性相对较小，所以自动灭火系统的选择要优先于自动报警系统"
    } else if (inside([relativePointX, relativePointY], imgArea3)) {
        result = "建筑人员与财产火灾危险性大于建筑本身火灾危险性，所以必须要安装自动报警系统。如果不恰当地设计与安装自动灭火系统，可能还会影响人员的安全疏散"
    } else if (inside([relativePointX, relativePointY], imgArea4a)) {
        result = "选用自动灭火系统"
    } else if (inside([relativePointX, relativePointY], imgArea4b)) {
        result = "选用火灾自动报警系统"
    } else if (inside([relativePointX, relativePointY], imgArea5)) {
        result = "由于建筑物本身的危险度GR和建筑物警系统进行选择内人员的伤害和财严的损坏程度都比较大，所以需要自动灭灾系统和自动报警系统的双复保护。"
    } else {
        result = "计算结果超出范围"
    }
    pointX = imgLeftTopPoint.x + relativePointX
    pointY = imgLeftTopPoint.y + relativePointY
    buildingFireRiskTotalAnalyseResponse.conclusion = result
}

const OnGenReport = () => {
    exportWord("/gustav.docx", {
        img: "/img/area.png",
        conclusion: buildingFireRiskTotalAnalyseResponse.conclusion,
    }, "平面分析法结论")
}
</script>

<template>
    <div class="card card-w-title">
        <h5>古斯塔夫法</h5>
        <!--        <p>Steps and TabMenu are integrated with the same child routes.</p>-->
        <Steps :active-index="active" :model="[
            {
                label: '火灾建筑物危险度GR分析',
                to: '',
            },
            {
                label: '建筑物内火灾危险度分析',
                to: ''
            },
            {
                label: '建筑物火灾危险度综合分析',
                to: ''
            }
        ]"/>
    </div>
    <div class="grid">

        <div class="col-12" v-if="active===0">
            <div class="card">
                <h5>火灾建筑物危险度GR分析</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>移动可燃物类型</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.moveFireType" :options="fireBuildingRiskAnalyseGetCombustibleNamesResponse.combustibleNames" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>移动可燃物质量(kg)</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseRequest.moveFireQuality"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>评价区域面积(m2)</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseRequest.accessArea"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>固定可燃物材料及荷载</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.Qi" :options="qiGetResponse.qis" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>耐火极限(min)</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.fireResistTop" :options="fireBuildingRiskAnalyseGetFireResistTopsResponse.fireResistTops" optionLabel="name" optionValue="code"  placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>点火源特征</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.fireSourceFeature" :options="fireBuildingRiskAnalyseGetFireSourceFeatureResponse.fireSourceFeatures" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>灭火力量性质</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.fireFightPowerProperty" :options="fireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerProperty" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>与消防力量直线距离(km)</label>
                        <Dropdown v-model="fireBuildingRiskAnalyseRequest.fireControlDis" :options="fireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerDis" optionLabel="name" optionValue="code" option-value="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <Button label="计算" @click="onCalcFireBuildingRiskAnalyse"></Button>
                    </div>
                    <div class="field col-12 md:col-6">
                        <Button label="下一步" @click="onNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>固定火灾载荷因子Qi</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseRequest.Qi"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>可移动火灾载荷因子Qm</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.moveFireLoadFactorQm"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>灭火延迟因子L</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.fireFightDelayFactorL"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>燃烧性能因子C</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.burningPerformFactorC"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物耐火因子W</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.buildingFireResistFactorW"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾区域及位置因子B</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.fireAreaPositionFactorB"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险度减小因子Ri</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.riskReduceFactorRi"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物本身危险度GR</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.buildingRiskGr"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===1">
            <div class="card">
                <h5>建筑物内火灾危险度分析</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>人员的火灾危险特性</label>
                        <Dropdown v-model="buildingFireRiskAnalyseRequest.personFireRiskFeature" :options="buildingFireRiskAnalyseGetPersonRiskFeatureResponse.personRiskFeature" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>财产的火灾危险性特征</label>
                        <Dropdown v-model="buildingFireRiskAnalyseRequest.assetsFireRiskFeature" :options="buildingFireRiskAnalyseGetAssetsRiskFeatureResponse.assetsRiskFeature" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>烟气的火灾危险性特征</label>
                        <Dropdown v-model="buildingFireRiskAnalyseRequest.smokeFireRiskFeature" :options="buildingFireRiskAnalyseGetSmokeRiskFeatureResponse.smokeRiskFeature" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="onCalcBuildingFireRiskAnalyse"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="onNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>人员危险因子H</label>
                        <InputText type="text" v-model="buildingFireRiskAnalyseResponse.personRiskFactorH"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>财产危险因子D</label>
                        <InputText type="text" v-model="buildingFireRiskAnalyseResponse.assetsRiskFactorD"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>烟气危险因子F</label>
                        <InputText type="text" v-model="buildingFireRiskAnalyseResponse.smokeRiskFactorF"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物内火灾危险度IR</label>
                        <InputText type="text" v-model="buildingFireRiskAnalyseResponse.buildingFireRiskIr"/>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===2">
            <div class="card">
                <h5>建筑物火灾危险度综合分析</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>建筑物本身危险度GR</label>
                        <InputText type="text" v-model="fireBuildingRiskAnalyseResponse.buildingRiskGr"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物内火灾危险度IR</label>
                        <InputText type="text" v-model="buildingFireRiskAnalyseResponse.buildingFireRiskIr"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>平面分析法结论</label>
                        <Textarea v-model="buildingFireRiskTotalAnalyseResponse.conclusion" rows="5" cols="30" />
                    </div>
                    <div id="pdf" style="height: 400px;width: 600px">
                        <img src="/img/area.png" alt="" :width="imgWidth" :height="imgHeight" :style="{position: 'absolute', 'margin-left': imgLeftTopPoint.x+'px', 'margin-top': imgLeftTopPoint.y+'px'}">
                        <div v-if="pointX" :style="{position: 'absolute', 'margin-left': pointX-5+'px', 'margin-top': pointY-5+'px', width: '10px', height: '10px', 'background-color': 'red', 'border-radius': '50%'}"></div>
                    </div>


                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="坐标显示" @click="OnShowMarker"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="生成评价报表" @click="OnGenReport"></Button>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

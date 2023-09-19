<script setup lang="ts">
import Steps from "~/components/Steps.vue";
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import toast from "~/service/toast";
import {exportWord} from "~/service/export";
import {fireloss} from "~/service/proto_gen/fireloss/fireloss_pb";
import {firelossUrl} from "~/service/proto_gen/fireloss/fireloss_url";
import {CascadeSelectGroupChangeEvent} from "primevue/cascadeselect";

definePageMeta({
    keepalive: true
})

let active = $ref(1)
const OnNext = () => {
    if (active===0 && (fireGrowthCoefficientResponse.a == undefined ||
        fireGrowthCoefficientResponse.fireDensityQ == undefined ||
        fireGrowthCoefficientResponse.fireReleaseRateQ == undefined
    )) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active===1 && (stageOneResponse.A1 == undefined ||
        stageOneResponse.pFph1 == undefined || stageOneResponse.tFpdh1 == undefined
    )) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active===2 && (stageTwoResponse.A2 == undefined ||
        stageTwoResponse.pFph2 == undefined || stageTwoResponse.tFpdh2 == undefined)) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active===3 && (stageThreeResponse.A3 == undefined ||
        stageThreeResponse.pFph3 == undefined || stageThreeResponse.tFph3 == undefined)) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active===4 && (stageFourResponse.A4 == undefined || stageFourResponse.pFph4 == undefined)) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    active++
    if (active > 5) active = 0
}

// ---------------------------火灾成长系数计算----------------------------------
// 获取火灾成长系数类别
let fireGrowthCategoryRequest = $ref({} as fireloss.FireGrowthCategoryRequest)
let fireGrowthCategoryResponse = $ref({} as fireloss.FireGrowthCategoryResponse)
axios.post(firelossUrl.FireGrowthCategory, fireGrowthCategoryRequest).then(rep => {
    fireGrowthCategoryResponse = fireloss.FireGrowthCategoryResponse.fromObject(rep.data)
})

// 计算火灾成长系数
let fireGrowthCoefficientRequest = $ref({} as fireloss.FireGrowthCoefficientRequest)
let fireGrowthCoefficientResponse = $ref({} as fireloss.FireGrowthCoefficientResponse)
const OnCalcFireGrowthCoefficient = () => {
    axios.post(firelossUrl.FireGrowthCoefficient, fireGrowthCoefficientRequest).then(rep => {
        fireGrowthCoefficientResponse = fireloss.FireGrowthCoefficientResponse.fromObject(rep.data)
    })
}
// 选择火灾成长系数类别
const handleMaterialTypeChange = (e: CascadeSelectGroupChangeEvent) => {
    fireGrowthCoefficientRequest.places = e.value.code
}

// ---------------------------阶段一的计算----------------------------------
let stageOneRequest = $ref({} as fireloss.StageOneRequest)
let stageOneResponse = $ref({} as fireloss.StageOneResponse)
const OnCalcStageOne = () => {
    stageOneRequest.a = fireGrowthCoefficientResponse.a
    stageOneRequest.v = fireGrowthCoefficientRequest.v
    axios.post(firelossUrl.StageOne, stageOneRequest).then(rep => {
        stageOneResponse = fireloss.StageOneResponse.fromObject(rep.data)
    })
}

// ---------------------------阶段二的计算----------------------------------
let stageTwoRequest = $ref({} as fireloss.StageTwoRequest)
let stageTwoResponse = $ref({} as fireloss.StageTwoResponse)
const OnCalcStageTwo = () => {
    stageTwoRequest.v = fireGrowthCoefficientRequest.v
    stageTwoRequest.pFph1 = stageOneResponse.pFph1
    axios.post(firelossUrl.StageTwo, stageTwoRequest).then(rep => {
        stageTwoResponse = fireloss.StageTwoResponse.fromObject(rep.data)
    })
}

// ---------------------------阶段三的计算----------------------------------
let stageThreeRequest = $ref({} as fireloss.StageThreeRequest)
let stageThreeResponse = $ref({} as fireloss.StageThreeResponse)
const OnCalcStageThree = () => {
    stageThreeRequest.pFph2 = stageTwoResponse.pFph2
    axios.post(firelossUrl.StageThree, stageThreeRequest).then(rep => {
        stageThreeResponse = fireloss.StageThreeResponse.fromObject(rep.data)
    })
}

// ---------------------------阶段四的计算----------------------------------
let stageFourRequest = $ref({} as fireloss.StageFourRequest)
let stageFourResponse = $ref({} as fireloss.StageFourResponse)
const OnCalcStageFour = () => {
    stageFourRequest.pFph3 = stageThreeResponse.pFph3
    stageFourRequest.v = fireGrowthCoefficientRequest.v
    axios.post(firelossUrl.StageFour, stageFourRequest).then(rep => {
        stageFourResponse = fireloss.StageFourResponse.fromObject(rep.data)
    })
}

// ---------------------------烧损面积的计算----------------------------------
let burntAreaRequest = $ref({} as fireloss.BurntAreaRequest)
let burntAreaResponse = $ref({} as fireloss.BurntAreaResponse)
const OnCalcBurntArea = () => {
    burntAreaRequest.A1 = stageOneResponse.A1
    burntAreaRequest.A2 = stageTwoResponse.A2
    burntAreaRequest.A3 = stageThreeResponse.A3
    burntAreaRequest.A4 = stageFourResponse.A4
    burntAreaRequest.pFph1 = stageOneResponse.pFph1
    burntAreaRequest.pFph2 = stageTwoResponse.pFph2
    burntAreaRequest.pFph3 = stageThreeResponse.pFph3
    burntAreaRequest.pFph4 = stageFourResponse.pFph4
    axios.post(firelossUrl.BurntArea, burntAreaRequest).then(rep => {
        burntAreaResponse = fireloss.BurntAreaResponse.fromObject(rep.data)
    })
}

interface firelossDocxTemplate {
    avgFireArea: number
    possibleArea: number
    propertyLoss: number
}
const OnGenReport = () => {
    let d: firelossDocxTemplate = {
        avgFireArea: burntAreaResponse.aFz,
        possibleArea: burntAreaResponse.aF,
        propertyLoss: burntAreaResponse.eFire
    }
    exportWord("/fireloss.docx", d, "建筑火灾财产损失评估方法结论")
}
</script>

<template>
    <div class="card card-w-title">
        <h5>建筑火灾财产损失评估方法</h5>
        <!--        <p>Steps and TabMenu are integrated with the same child routes.</p>-->
        <Steps :active-index="active" :model="[
            {
                label: '火灾成长系数计算',
                to: '',
            },
            {
                label: '阶段1的相关计算',
                to: ''
            },
            {
                label: '阶段2的相关计算',
                to: ''
            },
            {
                label: '阶段3的相关计算',
                to: ''
            },
            {
                label: '阶段4的相关计算',
                to: ''
            },
            {
                label: '年限内烧损面积计算',
                to: ''
            },
        ]"/>
    </div>
    <div class="grid">

        <div class="col-12" v-if="active===0">
            <div class="card">
                <h5>火灾荷载因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>单个可燃物重量(kg)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.Mv"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>可燃物的有效热值(MJ/kg)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.Hc"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>空间内地板面积(m2)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.At"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾蔓延速度(m/s)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.v"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾发生后的时间(s)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.t"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火焰有效燃烧的时间(s)</label>
                        <InputText type="text" v-model="fireGrowthCoefficientRequest.t0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质类型</label>
                        <CascadeSelect v-model="fireGrowthCoefficientRequest.level"
                                       :options="fireGrowthCategoryResponse.categories" optionLabel="name" optionGroupLabel="name"
                                       option-value="code"
                                       :optionGroupChildren="['children']" style="min-width: 14rem" placeholder="Select One"
                                       @group-change="handleMaterialTypeChange" />
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-6">
                        <Button label="计算" @click="OnCalcFireGrowthCoefficient"></Button>
                    </div>
                    <div class="field col-12 md:col-6">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾荷载密度</label>
                        <InputText type="text" v-model="fireGrowthCoefficientResponse.fireDensityQ"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾成长系数</label>
                        <InputText type="text" v-model="fireGrowthCoefficientResponse.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾热释放速率</label>
                        <InputText type="text" v-model="fireGrowthCoefficientResponse.fireReleaseRateQ"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===1">
            <div class="card">
                <h5>阶段1的计算</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾探测报警成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageOneRequest.pA1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>自动水喷淋灭火成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageOneRequest.pA2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>灭火器灭火成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageOneRequest.pA3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcStageOne"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾发展超出阶段1的概率</label>
                        <InputText type="text" v-model="stageOneResponse.pFph1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段1的临界时间</label>
                        <InputText type="text" v-model="stageOneResponse.tFpdh1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段1建筑物的烧损面积</label>
                        <InputText type="text" v-model="stageOneResponse.A1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===2">
            <div class="card">
                <h5>阶段2的计算</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>排烟设备启动成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageTwoRequest.pB1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>室内消火栓灭火成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageTwoRequest.pB2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>烟气高度(m)</label>
                        <InputText type="text" v-model="stageTwoRequest.h"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcStageTwo"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾发展超出阶段2的概率</label>
                        <InputText type="text" v-model="stageTwoResponse.pFph2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段2的临界时间</label>
                        <InputText type="text" v-model="stageTwoResponse.tFpdh2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段2建筑物的烧损面积</label>
                        <InputText type="text" v-model="stageTwoResponse.A2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===3">
            <div class="card">
                <h5>阶段3的计算</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>烟气层温度(℃)</label>
                        <InputText type="text" v-model="stageThreeRequest.tHt"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>得到消防队及时有效补救的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageThreeRequest.pF"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>热释放速率(kW)</label>
                        <InputText type="text" v-model="stageThreeRequest.Q"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间开口面积(m2)</label>
                        <InputText type="text" v-model="stageThreeRequest.A"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间开口高度(m)</label>
                        <InputText type="text" v-model="stageThreeRequest.H"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间内表面积(m2)</label>
                        <InputText type="text" v-model="stageThreeRequest.aT"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>环境温度(K)</label>
                        <InputText type="text" v-model="stageThreeRequest.tInf"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间初始温度(℃)</label>
                        <InputText type="text" v-model="stageThreeRequest.t0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>内衬材料的导热系数(kW/mK)</label>
                        <InputText type="text" v-model="stageThreeRequest.k"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>内衬材料的密度(kg/m3)</label>
                        <InputText type="text" v-model="stageThreeRequest.rho"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>内衬材料的比热(kJ/kgK)</label>
                        <InputText type="text" v-model="stageThreeRequest.C"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾燃烧特征时间(s)</label>
                        <InputText type="text" v-model="stageThreeRequest.t"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcStageThree"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾发展超出阶段2的概率</label>
                        <InputText type="text" v-model="stageThreeResponse.pFph3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段3的临界时间</label>
                        <InputText type="text" v-model="stageThreeResponse.tFph3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段3建筑物的烧损面积</label>
                        <InputText type="text" v-model="stageThreeResponse.A3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===4">
            <div class="card">
                <h5>阶段4的计算</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>防火卷帘关闭成功的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageFourRequest.pC1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>得到消防队及时有效补救的概率</label>
                        <InputText type="text" placeholder="0~1" v-model="stageFourRequest.pF"/>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcStageFour"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾发展超出阶段4的概率</label>
                        <InputText type="text" v-model="stageFourResponse.pFph4"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阶段4建筑物的烧损面积</label>
                        <InputText type="text" v-model="stageFourResponse.A4"/>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===5">
            <div class="card">
                <h5>年限内烧损面积计算</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>建筑物的使用寿命(年)</label>
                        <InputText type="text" v-model="burntAreaRequest.yL"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物的总面积(m2)</label>
                        <InputText type="text" v-model="burntAreaRequest.S"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物发生火灾的概率(起/m2/年)</label>
                        <InputText type="text" v-model="burntAreaRequest.pFire"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>移动财产密度(元/m3)</label>
                        <InputText type="text" v-model="burntAreaRequest.wE"/>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcBurntArea"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="生成报表" @click="OnGenReport"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>防火分区的平均烧损面积</label>
                        <InputText type="text" v-model="burntAreaResponse.aFz"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>使用年限内的可能烧损面积</label>
                        <InputText type="text" v-model="burntAreaResponse.aF"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>使用年限内可能火灾财产损失</label>
                        <InputText type="text" v-model="burntAreaResponse.eFire"/>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

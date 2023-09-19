<script setup lang="ts">
import Steps from "~/components/Steps.vue";
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import toast from "~/service/toast";
import {engineering} from "~/service/proto_gen/engineering/engineering_pb";
import {engineeringUrl} from "~/service/proto_gen/engineering/engineering_url";

definePageMeta({
    keepalive: true
})

let active = $ref(3)
const OnNext = () => {
    if (active===0 && (fireLoadFactorResponse.q == undefined ||
        areaFactorResponse.g == undefined || fireSpreadFactorResponse.i == undefined ||
        ventilationFactorResponse.v == undefined || channelFactorResponse.z == undefined ||
        floorFactorResponse.e == undefined || potentialRiskResponse.P == undefined
    )) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active == 1 && (activityFactorResponse.a == undefined ||
        evacuationTimeFactorResponse.t == undefined || acceptanceCriteriaResponse.A == undefined)) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    if (active == 2 && (protectionLevelResponse.D == undefined)) {
        toast.add({ severity: 'warn', summary: '请计算完整', detail: '', life: 3000 });
        return
    }
    active++
    if (active === 3) {
        OnCalcEvaluationResults()
    }
}

// ----------------------------潜在风险的计算---------------------------------
// 火灾荷载因子
let fireLoadFactorRequest = $ref({} as engineering.FireLoadFactorRequest)
let fireLoadFactorResponse = $ref({} as engineering.FireLoadFactorResponse)
const OnCalcFireLoadFactor = () => {
    axios.post(engineeringUrl.FireLoadFactor, fireLoadFactorRequest).then(rep => {
        fireLoadFactorResponse = engineering.FireLoadFactorResponse.fromObject(rep.data)
    })
}

// 面积因子
let areaFactorRequest = $ref({} as engineering.AreaFactorRequest)
let areaFactorResponse = $ref({} as engineering.AreaFactorResponse)
const OnCalcAreaFactor = () => {
    axios.post(engineeringUrl.AreaFactor, areaFactorRequest).then(rep => {
        areaFactorResponse = engineering.AreaFactorResponse.fromObject(rep.data)
    })
}

// 火灾蔓延因子
let fireSpreadFactorRequest = $ref({} as engineering.FireSpreadFactorRequest)
let fireSpreadFactorResponse = $ref({} as engineering.FireSpreadFactorResponse)
const OnCalcFireSpreadFactor = () => {
    axios.post(engineeringUrl.FireSpreadFactor, fireSpreadFactorRequest).then(rep => {
        fireSpreadFactorResponse = engineering.FireSpreadFactorResponse.fromObject(rep.data)
    })
}

// 通风因子
let ventilationFactorRequest = $ref({} as engineering.VentilationFactorRequest)
let ventilationFactorResponse = $ref({} as engineering.VentilationFactorResponse)
const OnCalcVentilationFactor = () => {
    axios.post(engineeringUrl.VentilationFactor, ventilationFactorRequest).then(rep => {
        ventilationFactorResponse = engineering.VentilationFactorResponse.fromObject(rep.data)
    })
}

// 通道因子
let channelFactorRequest = $ref({} as engineering.ChannelFactorRequest)
let channelFactorResponse = $ref({} as engineering.ChannelFactorResponse)
const OnCalcChannelFactor = () => {
    axios.post(engineeringUrl.ChannelFactor, channelFactorRequest).then(rep => {
        channelFactorResponse = engineering.ChannelFactorResponse.fromObject(rep.data)
    })
}

// 楼层因子
let floorFactorRequest = $ref({} as engineering.FloorFactorRequest)
let floorFactorResponse = $ref({} as engineering.FloorFactorResponse)
const OnCalcFloorFactor = () => {
    axios.post(engineeringUrl.FloorFactor, floorFactorRequest).then(rep => {
        floorFactorResponse = engineering.FloorFactorResponse.fromObject(rep.data)
    })
}

// 潜在风险
let potentialRiskRequest = $ref({} as engineering.PotentialRiskRequest)
let potentialRiskResponse = $ref({} as engineering.PotentialRiskResponse)
const OnCalcPotentialRisk = () => {
    potentialRiskRequest.q = fireLoadFactorResponse.q
    potentialRiskRequest.e = floorFactorRequest.E
    potentialRiskRequest.g = areaFactorResponse.g
    potentialRiskRequest.v = ventilationFactorResponse.v
    potentialRiskRequest.i = fireSpreadFactorResponse.i
    potentialRiskRequest.z = channelFactorResponse.z
    axios.post(engineeringUrl.PotentialRisk, potentialRiskRequest).then(rep => {
        potentialRiskResponse = engineering.PotentialRiskResponse.fromObject(rep.data)
    })
}

// ------------------------------风险接受标准的计算---------------------------------
// 活动因子
let activityFactorRequest = $ref({} as engineering.ActivityFactorRequest)
let activityFactorResponse = $ref({} as engineering.ActivityFactorResponse)
const OnCalcActivityFactor = () => {
    axios.post(engineeringUrl.ActivityFactor, activityFactorRequest).then(rep => {
        activityFactorResponse = engineering.ActivityFactorResponse.fromObject(rep.data)
    })
}

// 疏散时间因子
let evacuationTimeFactorRequest = $ref({} as engineering.EvacuationTimeFactorRequest)
let evacuationTimeFactorResponse = $ref({} as engineering.EvacuationTimeFactorResponse)
const OnCalcEvacuationTimeFactor = () => {
    evacuationTimeFactorRequest.p = evacuationTimeFactorRequest.p === undefined ? 1 : evacuationTimeFactorRequest.p
    evacuationTimeFactorRequest.xBig = evacuationTimeFactorRequest.xBig === undefined ? 0.003 : evacuationTimeFactorRequest.xBig
    axios.post(engineeringUrl.EvacuationTimeFactor, evacuationTimeFactorRequest).then(rep => {
        evacuationTimeFactorResponse = engineering.EvacuationTimeFactorResponse.fromObject(rep.data)
    })
}

// 计算接受标准
let acceptanceCriteriaRequest = $ref({} as engineering.AcceptanceCriteriaRequest)
let acceptanceCriteriaResponse = $ref({} as engineering.AcceptanceCriteriaResponse)
const OnCalcAcceptanceCriteria = () => {
    acceptanceCriteriaRequest.t = evacuationTimeFactorResponse.t
    acceptanceCriteriaRequest.a = activityFactorResponse.a
    axios.post(engineeringUrl.AcceptanceCriteria, acceptanceCriteriaRequest).then(rep => {
        acceptanceCriteriaResponse = engineering.AcceptanceCriteriaResponse.fromObject(rep.data)
    })
}
// ------------------------------保护水平的计算---------------------------------
let protectionLevelRequest = $ref({} as engineering.ProtectionLevelRequest)
let protectionLevelResponse = $ref({} as engineering.ProtectionLevelResponse)
const OnCalcProtectionLevel = () => {
    axios.post(engineeringUrl.ProtectionLevel, protectionLevelRequest).then(rep => {
        protectionLevelResponse = engineering.ProtectionLevelResponse.fromObject(rep.data)
    })
}

// ------------------------------火灾风险的计算---------------------------------
let fireRiskRequest = $ref({} as engineering.FireRiskRequest)
let fireRiskResponse = $ref({} as engineering.FireRiskResponse)
const OnCalcEvaluationResults = () => {
    fireRiskRequest.A = acceptanceCriteriaResponse.A
    fireRiskRequest.D = protectionLevelResponse.D
    fireRiskRequest.P = potentialRiskResponse.P
    fireRiskRequest.N = protectionLevelRequest.N
    fireRiskRequest.U = evacuationTimeFactorResponse.t
    fireRiskRequest.aSmall = acceptanceCriteriaRequest.a
    fireRiskRequest.t = acceptanceCriteriaRequest.t
    fireRiskRequest.i = potentialRiskRequest.i
    fireRiskRequest.g = potentialRiskRequest.g
    fireRiskRequest.e = potentialRiskRequest.e
    fireRiskRequest.v = potentialRiskRequest.v
    fireRiskRequest.z = potentialRiskRequest.z
    axios.post(engineeringUrl.FireRisk, fireRiskRequest).then(rep => {
        fireRiskResponse = engineering.FireRiskResponse.fromObject(rep.data)
    })
}
</script>

<template>
    <div class="card card-w-title">
        <h5>火灾风险分析工程方法</h5>
        <!--        <p>Steps and TabMenu are integrated with the same child routes.</p>-->
        <Steps :active-index="active" :model="[
            {
                label: '潜在风险的计算',
                to: '',
            },
            {
                label: '风险接受标准的计算',
                to: ''
            },
            {
                label: '防护水平的计算',
                to: ''
            },
            {
                label: '评价结果及指标',
                to: ''
            }
        ]"/>
    </div>
    <div class="grid">

        <div class="col-12" v-if="active===0">
            <div class="card">
                <h5>火灾荷载因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>固定火灾荷载(MJ/m2)</label>
                        <InputText type="text" v-model="fireLoadFactorRequest.Qi"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>移动火灾荷载(MJ/m2)</label>
                        <InputText type="text" v-model="fireLoadFactorRequest.Qm"/>
                    </div>

                    <div class="field col-12 md:col-6">
                        <Button label="计算" @click="OnCalcFireLoadFactor"></Button>
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
                        <label>火灾荷载因子</label>
                        <InputText type="text" v-model="fireLoadFactorResponse.q"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>面积因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>房间理论长度(m)</label>
                        <InputText type="text" v-model="areaFactorRequest.l"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间的等效宽度(m)</label>
                        <InputText type="text" v-model="areaFactorRequest.b"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcAreaFactor"></Button>
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
                        <label>面积因子</label>
                        <InputText type="text" v-model="areaFactorResponse.g"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>火灾蔓延因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>室内物品的平均尺寸(m)</label>
                        <InputText type="text" v-model="fireSpreadFactorRequest.indoorItemsAverageSizeM"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>破坏温度(℃)</label>
                        <InputText type="text" v-model="fireSpreadFactorRequest.T"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火焰传播等级</label>
                        <InputText type="text" v-model="fireSpreadFactorRequest.flamePropagationLevelM" placeholder="1 or 2 or 3 or 4"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcFireSpreadFactor"></Button>
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
                        <label>火灾蔓延因子</label>
                        <InputText type="text" v-model="fireSpreadFactorResponse.i"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>通风因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>移动火灾荷载(MJ/m2)</label>
                        <InputText type="text" v-model="ventilationFactorRequest.Qm"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>排烟因子</label>
                        <InputText type="text" v-model="ventilationFactorRequest.k" placeholder="不能为负数"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>楼层高度(m)</label>
                        <InputText type="text" v-model="ventilationFactorRequest.h"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcVentilationFactor"></Button>
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
                        <label>通风因子</label>
                        <InputText type="text" v-model="ventilationFactorResponse.v"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>通道因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>房间的等效宽度(m)</label>
                        <InputText type="text" v-model="channelFactorRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物地上高度(m)</label>
                        <InputText type="text" v-model="channelFactorRequest.hPlus"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>建筑物地下高度(m)</label>
                        <InputText type="text" v-model="channelFactorRequest.hSub"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcChannelFactor"></Button>
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
                        <label>通道因子</label>
                        <InputText type="text" v-model="channelFactorResponse.z"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>楼层因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>楼层编号</label>
                        <InputText type="text" v-model="floorFactorRequest.E" placeholder="几楼 比如12楼就填12"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcFloorFactor"></Button>
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
                        <label>楼层因子</label>
                        <InputText type="text" v-model="floorFactorResponse.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>潜在风险</h5>
                <div class="p-fluid formgrid grid">

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcPotentialRisk"></Button>
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
                        <label>潜在风险</label>
                        <InputText type="text" v-model="potentialRiskResponse.P"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===1">
            <div class="card">
                <h5>活动因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>主要活动</label>
                        <InputText type="text" v-model="activityFactorRequest.mainActivity" placeholder="0~0.2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>次要活动</label>
                        <InputText type="text" v-model="activityFactorRequest.secondaryActivity" placeholder="0~0.2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>室内供暖系统</label>
                        <InputText type="text" v-model="activityFactorRequest.indoorHeatingSystem" placeholder="0~0.2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>电气设备</label>
                        <InputText type="text" v-model="activityFactorRequest.electricalEquipment" placeholder="0~0.2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>可燃性气体、液体及粉尘</label>
                        <InputText type="text" v-model="activityFactorRequest.combustible" placeholder="0~0.2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcActivityFactor"></Button>
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
                        <label>活动因子</label>
                        <InputText type="text" v-model="activityFactorResponse.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>疏散时间因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>变动性因素</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.p" placeholder="0.5~1.5,厂房取1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>出口宽度(m)</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.b" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>通道方向数量</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.K" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>房间理论长度(m)</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.l" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>室内人员数量</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.e" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>地上建筑物高度(m)</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.hPlus" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>地下建筑物高度(m)</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.hSub" placeholder="大于0"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>人群分布</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.xBig" placeholder="0~0.005"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>出口数量</label>
                        <InputText type="text" v-model="evacuationTimeFactorRequest.xSmall"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcEvacuationTimeFactor"></Button>
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
                        <label>疏散时间因子</label>
                        <InputText type="text" v-model="evacuationTimeFactorResponse.t"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>

            <div class="card">
                <h5>价值因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>价值因子</label>
                        <InputText type="text" v-model="acceptanceCriteriaRequest.c"/>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>环境因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>环境因子</label>
                        <InputText type="text" v-model="fireRiskRequest.r"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>依赖性因子</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>依赖性因子</label>
                        <InputText type="text" v-model="fireRiskRequest.dSmall"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>接受标准</h5>
                <div class="p-fluid formgrid grid">

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcAcceptanceCriteria"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="OnNext"></Button>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>接受标准</label>
                        <InputText type="text" v-model="fireRiskRequest.dSmall"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===2">
            <div class="card">
                <h5>保护水平</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>供水因子</label>
                        <InputText type="text" v-model="protectionLevelRequest.W" placeholder="取值范围0~4"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>正常保护因子</label>
                        <InputText type="text" v-model="protectionLevelRequest.N" placeholder="取值范围0~8"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>特殊保护因子</label>
                        <InputText type="text" v-model="protectionLevelRequest.S" placeholder="取值范围2~11"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>耐火因子</label>
                        <InputText type="text" v-model="protectionLevelRequest.F" placeholder="取值范围大于0"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcProtectionLevel"></Button>
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
                        <label>保护水平</label>
                        <InputText type="text" v-model="protectionLevelResponse.D"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12" v-else-if="active===3">
            <div class="card">
                <h5>建筑物及室内物品</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>潜在风险</label>
                        <InputText type="text" v-model="potentialRiskResponse.P"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>接受标准</label>
                        <InputText type="text" v-model="acceptanceCriteriaResponse.A"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>保护水平</label>
                        <InputText type="text" v-model="protectionLevelResponse.D"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>耐火灾风险火因子</label>
                        <InputText type="text" v-model="fireRiskResponse.R"/>
                    </div>

                    <div class="field col-12 md:col-6">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>室内人员</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>潜在风险</label>
                        <InputText type="text" v-model="fireRiskResponse.P1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>接受标准</label>
                        <InputText type="text" v-model="fireRiskResponse.A1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>保护水平</label>
                        <InputText type="text" v-model="fireRiskResponse.D1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>耐火灾风险火因子</label>
                        <InputText type="text" v-model="fireRiskResponse.R1"/>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>室外活动</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>潜在风险</label>
                        <InputText type="text" v-model="fireRiskResponse.P2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>接受标准</label>
                        <InputText type="text" v-model="fireRiskResponse.A2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>保护水平</label>
                        <InputText type="text" v-model="fireRiskResponse.D2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>耐火灾风险火因子</label>
                        <InputText type="text" v-model="fireRiskResponse.R2"/>
                    </div>

                </div>
            </div>

        </div>


    </div>
</template>

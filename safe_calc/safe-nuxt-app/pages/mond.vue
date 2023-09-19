<script setup lang="ts">
import Steps from "~/components/Steps.vue";
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import toast from "~/service/toast";
import {exportWord} from "~/service/export";
import {DropdownChangeEvent} from "primevue/dropdown";
import {mondUrl} from "~/service/proto_gen/mond/mond_url";
import {mond} from "~/service/proto_gen/mond/mond_pb";

definePageMeta({
    keepalive: true
})

let active = $ref(0)

const OnNext = () => {
    if (active === 0 && materialCoefficientResponse.B === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算物质系数', detail: '', life: 3000 })
        return
    }
    if (active === 1 &&
        (specialMaterialHazardResponse.M === undefined ||
            generalProcessHazardResponse.P === undefined ||
            specialProcessHazardResponse.S === undefined
        )) {
        toast.add({ severity: 'warn', summary: '请先计算特殊物质/一般/特殊工艺过程危险性', detail: '', life: 3000 })
        return
    }
    if (active === 2 &&
        (poisonHazardCoefficientResponse.T === undefined ||
            arrangementHazardCoefficientResponse.L === undefined ||
            numHazardCoefficientResponse.Q == undefined
        )) {
        toast.add({ severity: 'warn', summary: '请先计算布置/毒性/数量危险性', detail: '', life: 3000 })
        return
    }
    if (active === 3 &&
        (containerSystemCoefficientResponse.k1 === undefined ||
            processManagementCoefficientResponse.k2 === undefined ||
            safetyAttitudeCoefficientResponse.k3 === undefined ||
            firePreventionCoefficientResponse.k4 === undefined ||
            materialIsolationCoefficientResponse.k5 === undefined ||
            fireFightingActivityCoefficientResponse.k6 === undefined
        )) {
        toast.add({ severity: 'warn', summary: '请先计算补偿系数', detail: '', life: 3000 })
        return
    }
    active++
    // 自动计算初始和最终系数
    if (active === 4) {
        OnCalcInitialFinal()
    }
}

// ---------------------------确定物质系数---------------------------------
// 获取已知物质系数
let materialCoefficientGetKnownNamesResponse = $ref({} as mond.MaterialCoefficientGetKnownNamesResponse)
axios.post(mondUrl.MaterialCoefficientGetKnownNames).then(rep => {
    materialCoefficientGetKnownNamesResponse = mond.MaterialCoefficientGetKnownNamesResponse.fromObject(rep.data)
})

// 选中下拉已知物质
const OnSelectName = (e: DropdownChangeEvent) => {
    materialCoefficientGetKnownCoefficientRequest.name = e.value
    axios.post(mondUrl.MaterialCoefficientGetKnownCoefficient, materialCoefficientGetKnownCoefficientRequest).then(rep => {
        materialCoefficientGetKnownCoefficientResponse = mond.MaterialCoefficientGetKnownCoefficientResponse.fromObject(rep.data)
        materialCoefficientResponse.B = materialCoefficientGetKnownCoefficientResponse.coefficient
        materialCoefficientRequest.Hc = materialCoefficientGetKnownCoefficientResponse.heat
    })
}

// 获取已知物质系数
let materialCoefficientGetKnownCoefficientRequest = $ref({} as mond.MaterialCoefficientGetKnownCoefficientRequest)
let materialCoefficientGetKnownCoefficientResponse = $ref({} as mond.MaterialCoefficientGetKnownCoefficientResponse)

// 计算物质系数
let materialCoefficientRequest = $ref({} as mond.MaterialCoefficientRequest)
let materialCoefficientResponse = $ref({} as mond.MaterialCoefficientResponse)
const OnCalcMaterialCoefficient = () => {
    axios.post(mondUrl.MaterialCoefficient, materialCoefficientRequest).then(rep => {
        materialCoefficientResponse = mond.MaterialCoefficientResponse.fromObject(rep.data)
        materialCoefficientGetKnownCoefficientResponse.coefficient = materialCoefficientResponse.B
    })
}

// 保存未知物质系数
let materialCoefficientSaveUnknownMaterialRequest = $ref({} as mond.MaterialCoefficientSaveUnknownMaterialRequest)
let materialCoefficientSaveUnknownMaterialResponse = $ref({} as mond.MaterialCoefficientSaveUnknownMaterialResponse)
const OnSave = () => {
    materialCoefficientSaveUnknownMaterialRequest.name = materialCoefficientGetKnownCoefficientRequest.name
    materialCoefficientSaveUnknownMaterialRequest.coefficient = materialCoefficientResponse.B
    materialCoefficientSaveUnknownMaterialRequest.heat = materialCoefficientRequest.Hc
    axios.post(mondUrl.MaterialCoefficientSaveUnknownMaterial, materialCoefficientSaveUnknownMaterialRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 })
    })
}

// ---------------------------特殊物质/一般/特殊工艺过程危险性---------------------------------
// 计算特殊物质危险性
let specialMaterialHazardRequest = $ref({} as mond.SpecialMaterialHazardRequest)
let specialMaterialHazardResponse = $ref({} as mond.SpecialMaterialHazardResponse)
const OnCalcSpecialMaterialHazard = () => {
    axios.post(mondUrl.SpecialMaterialHazard, specialMaterialHazardRequest).then(rep => {
        specialMaterialHazardResponse = mond.SpecialMaterialHazardResponse.fromObject(rep.data)
    })
}

// 计算一般工艺危险性
let generalProcessHazardRequest = $ref({} as mond.GeneralProcessHazardRequest)
let generalProcessHazardResponse = $ref({} as mond.GeneralProcessHazardResponse)
const OnCalcGeneralProcessHazard = () => {
    axios.post(mondUrl.GeneralProcessHazard, generalProcessHazardRequest).then(rep => {
        generalProcessHazardResponse = mond.GeneralProcessHazardResponse.fromObject(rep.data)
    })
}

// 计算特殊工艺危险性
let specialProcessHazardRequest = $ref({} as mond.SpecialProcessHazardRequest)
let specialProcessHazardResponse = $ref({} as mond.SpecialProcessHazardResponse)
const OnCalcSpecialProcessHazard = () => {
    axios.post(mondUrl.SpecialProcessHazard, specialProcessHazardRequest).then(rep => {
        specialProcessHazardResponse = mond.SpecialProcessHazardResponse.fromObject(rep.data)
    })
}

// ---------------------------布置/毒性/数量危险性---------------------------------
// 计算布置危险性
let arrangementHazardCoefficientRequest = $ref({} as mond.ArrangementHazardCoefficientRequest)
let arrangementHazardCoefficientResponse = $ref({} as mond.ArrangementHazardCoefficientResponse)
const OnCalcArrangementHazardCoefficient = () => {
    axios.post(mondUrl.ArrangementHazardCoefficient, arrangementHazardCoefficientRequest).then(rep => {
        arrangementHazardCoefficientResponse = mond.ArrangementHazardCoefficientResponse.fromObject(rep.data)
    })
}

// 获取计算毒性危险性的参数
let poisonHazardCoefficientGetTLVTypeExposureResponse = $ref({} as mond.PoisonHazardCoefficientGetTLVTypeExposureResponse)
axios.post(mondUrl.PoisonHazardCoefficientGetTLVTypeExposure).then(rep => {
    poisonHazardCoefficientGetTLVTypeExposureResponse = mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.fromObject(rep.data)
})

// 计算毒性危险性
let poisonHazardCoefficientRequest = $ref({} as mond.PoisonHazardCoefficientRequest)
let poisonHazardCoefficientResponse = $ref({} as mond.PoisonHazardCoefficientResponse)
const OnCalcPoisonHazardCoefficient = () => {
    axios.post(mondUrl.PoisonHazardCoefficient, poisonHazardCoefficientRequest).then(rep => {
        poisonHazardCoefficientResponse = mond.PoisonHazardCoefficientResponse.fromObject(rep.data)
    })
}

// 计算数量危险性
let numHazardCoefficientRequest = $ref({} as mond.NumHazardCoefficientRequest)
let numHazardCoefficientResponse = $ref({} as mond.NumHazardCoefficientResponse)
const OnCalcNumHazardCoefficient = () => {
    axios.post(mondUrl.NumHazardCoefficient, numHazardCoefficientRequest).then(rep => {
        numHazardCoefficientResponse = mond.NumHazardCoefficientResponse.fromObject(rep.data)
    })
}

// ---------------------------确定补偿系数---------------------------------
// 计算容器系统系数
let containerSystemCoefficientRequest = $ref({} as mond.ContainerSystemCoefficientRequest)
let containerSystemCoefficientResponse = $ref({} as mond.ContainerSystemCoefficientResponse)
const OnCalcContainerSystemCoefficient = () => {
    axios.post(mondUrl.ContainerSystemCoefficient, containerSystemCoefficientRequest).then(rep => {
        containerSystemCoefficientResponse = mond.ContainerSystemCoefficientResponse.fromObject(rep.data)
    })
}

// 计算工艺管理系数
let processManagementCoefficientRequest = $ref({} as mond.ProcessManagementCoefficientRequest)
let processManagementCoefficientResponse = $ref({} as mond.ProcessManagementCoefficientResponse)
const OnCalcProcessManagementCoefficient = () => {
    axios.post(mondUrl.ProcessManagementCoefficient, processManagementCoefficientRequest).then(rep => {
        processManagementCoefficientResponse = mond.ProcessManagementCoefficientResponse.fromObject(rep.data)
    })
}

// 计算物质隔离系数
let materialIsolationCoefficientRequest = $ref({} as mond.MaterialIsolationCoefficientRequest)
let materialIsolationCoefficientResponse = $ref({} as mond.MaterialIsolationCoefficientResponse)
const OnCalcMaterialIsolationCoefficient = () => {
    axios.post(mondUrl.MaterialIsolationCoefficient, materialIsolationCoefficientRequest).then(rep => {
        materialIsolationCoefficientResponse = mond.MaterialIsolationCoefficientResponse.fromObject(rep.data)
    })
}

// 计算安全态度系数
let safetyAttitudeCoefficientRequest = $ref({} as mond.SafetyAttitudeCoefficientRequest)
let safetyAttitudeCoefficientResponse = $ref({} as mond.SafetyAttitudeCoefficientResponse)
const OnCalcSafetyAttitudeCoefficient = () => {
    axios.post(mondUrl.SafetyAttitudeCoefficient, safetyAttitudeCoefficientRequest).then(rep => {
        safetyAttitudeCoefficientResponse = mond.SafetyAttitudeCoefficientResponse.fromObject(rep.data)
    })
}

// 计算防火系数
let firePreventionCoefficientRequest = $ref({} as mond.FirePreventionCoefficientRequest)
let firePreventionCoefficientResponse = $ref({} as mond.FirePreventionCoefficientResponse)
const OnCalcFirePreventionCoefficient = () => {
    axios.post(mondUrl.FirePreventionCoefficient, firePreventionCoefficientRequest).then(rep => {
        firePreventionCoefficientResponse = mond.FirePreventionCoefficientResponse.fromObject(rep.data)
    })
}

// 计算灭火活动系数
let fireFightingActivityCoefficientRequest = $ref({} as mond.FireFightingActivityCoefficientRequest)
let fireFightingActivityCoefficientResponse = $ref({} as mond.FireFightingActivityCoefficientResponse)
const OnCalcFireFightingActivityCoefficient = () => {
    axios.post(mondUrl.FireFightingActivityCoefficient, fireFightingActivityCoefficientRequest).then(rep => {
        fireFightingActivityCoefficientResponse = mond.FireFightingActivityCoefficientResponse.fromObject(rep.data)
    })
}

// ---------------------------评价结果及报表--------------------------------
// 初期评价系数/最终补偿系数
let initialFinialCoefficientRequest = $ref({} as mond.InitialCommentIndexFinialCompensationCoefficientRequest)
let initialFinialCoefficientResponse = $ref({} as mond.InitialCommentIndexFinialCompensationCoefficientResponse)
const OnCalcInitialFinal = () => {
    initialFinialCoefficientRequest.materialCoefficientB = materialCoefficientGetKnownCoefficientResponse.coefficient
    initialFinialCoefficientRequest.specialMaterialHazardCoefficientM = specialMaterialHazardResponse.M
    initialFinialCoefficientRequest.numHazardCoefficientQ = numHazardCoefficientResponse.Q
    initialFinialCoefficientRequest.generalProcessHazardCoefficientP = generalProcessHazardResponse.P
    initialFinialCoefficientRequest.specialProcessHazardCoefficientS = specialProcessHazardResponse.S
    initialFinialCoefficientRequest.arrangementHazardCoefficientL = arrangementHazardCoefficientResponse.L
    initialFinialCoefficientRequest.poisonHazardCoefficientT = poisonHazardCoefficientResponse.T
    initialFinialCoefficientRequest.k1 = containerSystemCoefficientResponse.k1
    initialFinialCoefficientRequest.k2 = processManagementCoefficientResponse.k2
    initialFinialCoefficientRequest.k3 = safetyAttitudeCoefficientResponse.k3
    initialFinialCoefficientRequest.k4 = firePreventionCoefficientResponse.k4
    initialFinialCoefficientRequest.k5 = materialIsolationCoefficientResponse.k5
    initialFinialCoefficientRequest.k6 = fireFightingActivityCoefficientResponse.k6
    axios.post(mondUrl.InitialCommentIndexFinialCompensationCoefficient, initialFinialCoefficientRequest).then(rep => {
        initialFinialCoefficientResponse = mond.InitialCommentIndexFinialCompensationCoefficientResponse.fromObject(rep.data)
    })
}

interface mondDocxTemplate {
    descLevel: number,
    bigDesc: string,
    extreme: string,
    high: string
}
let docTemplate = $ref({} as mondDocxTemplate)
let reportFormVisible = $ref(false)
const OnOpenDialog = () => {
    reportFormVisible = true
}
const OnGenReport = () => {
    exportWord("/mond.docx", docTemplate, "Mond火灾、爆炸及毒性指数法报表")
    reportFormVisible = false
}
</script>

<template>
    <div class="card card-w-title">
        <h5>Mond火灾、爆炸指数法</h5>
        <!--        <p>Steps and TabMenu are integrated with the same child routes.</p>-->
        <Steps :active-index="active" :model="[
            {
                label: '确定物质系数',
                to: '',
            },
            {
                label: '特殊物质/一般/特殊工艺过程危险性',
                to: ''
            },
            {
                label: '布置/毒性/数量危险性',
                to: ''
            },
            {
                label: '确定补偿系数',
                to: ''
            },
            {
                label: '评价结果及报表',
                to: ''
            }
        ]"/>
    </div>
    <div class="grid">

        <div class="col-12" v-if="active===0">
            <div class="card">
                <h5>确定物质系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>危险物质名称</label>
                        <Dropdown v-model="materialCoefficientGetKnownCoefficientRequest.name" :options="materialCoefficientGetKnownNamesResponse.names" optionLabel="name" optionValue="code"
                                  filter editable placeholder="Select One" @change="OnSelectName"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质标准状态下在空气中的燃烧热</label>
                        <InputText type="text" v-model="materialCoefficientRequest.Hc"/>

                    </div>


                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcMaterialCoefficient"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="保存到库" @click="OnSave"></Button>
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
                        <label>物质系数</label>
                        <InputText type="text" v-model="materialCoefficientGetKnownCoefficientResponse.coefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>

            </div>
        </div>

        <div class="col-12" v-else-if="active===1">
            <div class="card">
                <h5>特殊物质危险性</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>氧化物性质(%)</label>
                        <InputText type="text" placeholder="0~20" v-model="specialMaterialHazardRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>自热性(%)</label>
                        <InputText type="text" placeholder="30~250" v-model="specialMaterialHazardRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>凝聚层爆炸性(%)</label>
                        <InputText type="text" placeholder="200~1500" v-model="specialMaterialHazardRequest.i"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>自聚合性(%)</label>
                        <InputText type="text" placeholder="25~75" v-model="specialMaterialHazardRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>着火敏感性(%)</label>
                        <InputText type="text" placeholder="-75~150" v-model="specialMaterialHazardRequest.f"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>混合及扩散特性(%)</label>
                        <InputText type="text" placeholder="-60~60" v-model="specialMaterialHazardRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>爆炸分解性(%)</label>
                        <InputText type="text" placeholder="125" v-model="specialMaterialHazardRequest.g"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>与水反应产生可燃气体(%)</label>
                        <InputText type="text" placeholder="0~30" v-model="specialMaterialHazardRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>气体的爆炸性(%)</label>
                        <InputText type="text" placeholder="150" v-model="specialMaterialHazardRequest.h"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>其他特性(%)</label>
                        <InputText type="text" placeholder="0~150" v-model="specialMaterialHazardRequest.j"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcSpecialMaterialHazard"></Button>
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
                        <label>特殊物质危险性(%)</label>
                        <InputText type="text" v-model="specialMaterialHazardResponse.M"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>一般工艺过程危险性</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>仅物理变化(%)</label>
                        <InputText type="text" placeholder="10~50" v-model="generalProcessHazardRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质移动(%)</label>
                        <InputText type="text" placeholder="0~75" v-model="generalProcessHazardRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单一连续反应(%)</label>
                        <InputText type="text" placeholder="25~50" v-model="generalProcessHazardRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>可能输送的容器(%)</label>
                        <InputText type="text" placeholder="10~100" v-model="generalProcessHazardRequest.f"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单一不连续反应(%)</label>
                        <InputText type="text" placeholder="单一连续反应系数加10~60" v-model="generalProcessHazardRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>同一装置内重复反应(%)</label>
                        <InputText type="text" placeholder="0~75" v-model="generalProcessHazardRequest.d"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcGeneralProcessHazard"></Button>
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
                        <label>一般工艺危险性(%)</label>
                        <InputText type="text" v-model="generalProcessHazardResponse.P"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>

            <div class="card">
                <h5>特殊工艺过程危险性</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>低温(%)</label>
                        <InputText type="text" placeholder="0~100" v-model="specialProcessHazardRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>静电危险性(%)</label>
                        <InputText type="text" placeholder="0~200" v-model="specialProcessHazardRequest.n"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>高温(%)</label>
                        <InputText type="text" placeholder="0~40" v-model="specialProcessHazardRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>粉尘或雾滴爆炸的危险性(%)</label>
                        <InputText type="text" placeholder="30~70" v-model="specialProcessHazardRequest.k"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>低压（小于103kPa）(%)</label>
                        <InputText type="text" placeholder="0~100" v-model="specialProcessHazardRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>在爆炸极限附近的危险性(%)</label>
                        <InputText type="text" placeholder="0~150" v-model="specialProcessHazardRequest.i"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>高压(%)</label>
                        <InputText type="text" placeholder="0~150" v-model="specialProcessHazardRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>工艺着火的灵敏度危险性(%)</label>
                        <InputText type="text" placeholder="0~75" v-model="specialProcessHazardRequest.m"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>腐蚀和侵蚀的危险性(%)</label>
                        <InputText type="text" placeholder="0~150" v-model="specialProcessHazardRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>平均爆炸危险以上的危险性(%)</label>
                        <InputText type="text" placeholder="40~100" v-model="specialProcessHazardRequest.j"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>接头和填料的危险性(%)</label>
                        <InputText type="text" placeholder="0~60" v-model="specialProcessHazardRequest.f"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>振动及循环负荷疲劳危险性(%)</label>
                        <InputText type="text" placeholder="0~50" v-model="specialProcessHazardRequest.g"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>难控制的工艺反应(%)</label>
                        <InputText type="text" placeholder="20~300" v-model="specialProcessHazardRequest.h"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>使用强氧化剂的工艺单元危险性(%)</label>
                        <InputText type="text" placeholder="0~300" v-model="specialProcessHazardRequest.l"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcSpecialProcessHazard"></Button>
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
                        <label>特殊工艺危险性(%)</label>
                        <InputText type="text" v-model="specialProcessHazardResponse.S"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===2">
            <div class="card">
                <h5>布置危险系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>结构设计(%)</label>
                        <InputText type="text" placeholder="0~200" v-model="arrangementHazardCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>地下设施(%)</label>
                        <InputText type="text" placeholder="0~150" v-model="arrangementHazardCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>多米诺效应(%)</label>
                        <InputText type="text" placeholder="0~250" v-model="arrangementHazardCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>地表排水沟(%)</label>
                        <InputText type="text" placeholder="0~100" v-model="arrangementHazardCoefficientRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>其他危险系数(%)</label>
                        <InputText type="text" placeholder="0~250" v-model="arrangementHazardCoefficientRequest.e"/>
                    </div>

                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcArrangementHazardCoefficient"></Button>
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
                        <label>配置危险性(%)</label>
                        <InputText type="text" v-model="arrangementHazardCoefficientResponse.L"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>毒性危险系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>TLV值</label>
                        <Dropdown v-model="poisonHazardCoefficientRequest.a" :options="poisonHazardCoefficientGetTLVTypeExposureResponse.tlv" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>短时间暴露</label>
                        <Dropdown v-model="poisonHazardCoefficientRequest.c" :options="poisonHazardCoefficientGetTLVTypeExposureResponse.type" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质的类型</label>
                        <Dropdown v-model="poisonHazardCoefficientRequest.b" :options="poisonHazardCoefficientGetTLVTypeExposureResponse.exposure" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>皮肤吸收(%)</label>
                        <InputText type="text" placeholder="0~300" v-model="poisonHazardCoefficientRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物理因素(%)</label>
                        <InputText type="text" placeholder="0~50" v-model="poisonHazardCoefficientRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcPoisonHazardCoefficient"></Button>
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
                        <label>毒性危险系数</label>
                        <InputText type="text" v-model="poisonHazardCoefficientResponse.T"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>数量危险系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>物质的质量(t)</label>
                        <InputText type="text" v-model="numHazardCoefficientRequest.materialQuality"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcNumHazardCoefficient"></Button>
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
                        <label>数量危险系数</label>
                        <InputText type="text" v-model="numHazardCoefficientResponse.Q"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===3">
            <div class="card">
                <h5>容器系统系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>压力储罐</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>非压力立式储罐</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>输送配管</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>附加容器、套管和防护堤</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泄漏检测系统与响应</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>放出、排出或者废料的舍弃</label>
                        <InputText type="text" placeholder="0~1" v-model="containerSystemCoefficientRequest.f"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcContainerSystemCoefficient"></Button>
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
                        <label>容器系统系数</label>
                        <InputText type="text" v-model="containerSystemCoefficientResponse.k1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>工艺管理系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>警报系统</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>安全停车系统</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.f"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>紧急用电的供给</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>计算机管理</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.g"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>过程冷却系统</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>预防爆炸和不正常的反应</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.h"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>惰性气体系统</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>操作指南</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.i"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险性研究活动</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>装置的监督</label>
                        <InputText type="text" placeholder="0~1" v-model="processManagementCoefficientRequest.j"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcProcessManagementCoefficient"></Button>
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
                        <label>工艺管理系数</label>
                        <InputText type="text" v-model="processManagementCoefficientResponse.k2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>物质隔离系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>阀门系统</label>
                        <InputText type="text" placeholder="0~1" v-model="materialIsolationCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>阀门系统</label>
                        <InputText type="text" placeholder="0~1" v-model="materialIsolationCoefficientRequest.b"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcMaterialIsolationCoefficient"></Button>
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
                        <label>物质隔离系数</label>
                        <InputText type="text" v-model="materialIsolationCoefficientResponse.k5"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>安全态度系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>管理者参与安全的管理</label>
                        <InputText type="text" placeholder="0~1" v-model="safetyAttitudeCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>安全训练</label>
                        <InputText type="text" placeholder="0~1" v-model="safetyAttitudeCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>保养维修和安全秩序</label>
                        <InputText type="text" placeholder="0~1" v-model="safetyAttitudeCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcSafetyAttitudeCoefficient"></Button>
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
                        <label>安全态度系数</label>
                        <InputText type="text" v-model="safetyAttitudeCoefficientResponse.k3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>防火系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>结构物防火</label>
                        <InputText type="text" placeholder="0~1" v-model="firePreventionCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>防火墙、防火屏和类似装置</label>
                        <InputText type="text" placeholder="0~1" v-model="firePreventionCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>装置防火</label>
                        <InputText type="text" placeholder="0~1" v-model="firePreventionCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcFirePreventionCoefficient"></Button>
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
                        <label>防火系数</label>
                        <InputText type="text" v-model="firePreventionCoefficientResponse.k4"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>灭火活动系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾警报</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.a"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>手动灭火器</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.b"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>水的供给</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.c"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>设置喷水设备、洒水机及水枪</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.d"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>发泡及惰性化设备</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.e"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>消防队</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.f"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>消防活动的地区协作</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.g"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>排烟通风</label>
                        <InputText type="text" placeholder="0~1" v-model="fireFightingActivityCoefficientRequest.h"/>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcFireFightingActivityCoefficient"></Button>
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
                        <label>灭火活动系数</label>
                        <InputText type="text" v-model="fireFightingActivityCoefficientResponse.k6"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===4">
            <div class="card">
                <h5>初期评价系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>物质名称</label>
                        <InputText type="text" v-model="materialCoefficientGetKnownCoefficientRequest.name"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>一般工艺危险值P</label>
                        <InputText type="text" v-model="generalProcessHazardResponse.P"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质系数B</label>
                        <InputText type="text" v-model="materialCoefficientGetKnownCoefficientResponse.coefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>特殊工艺危险值S</label>
                        <InputText type="text" v-model="specialProcessHazardResponse.S"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>特殊物质危险值M</label>
                        <InputText type="text" v-model="specialMaterialHazardResponse.M"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>布置危险值L</label>
                        <InputText type="text" v-model="arrangementHazardCoefficientResponse.L"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>数量危险值Q</label>
                        <InputText type="text" v-model="numHazardCoefficientResponse.Q"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>毒性危险值T</label>
                        <InputText type="text" v-model="poisonHazardCoefficientResponse.T"/>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>初期评价指数计算结果及范畴</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>DOW/ICI总指标</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.D"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>火灾负荷系数F</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.F"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>评价单元内重要物质的物质系数B</label>
                        <InputText type="text" v-model="materialCoefficientGetKnownCoefficientResponse.coefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>评价单元内可燃物总量(t)</label>
                        <InputText type="text" v-model="initialFinialCoefficientRequest.combustibleTotalNumK"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元中重要物质的混合扩散系数</label>
                        <InputText type="text" v-model="initialFinialCoefficientRequest.mixedDiffusionCoefficientM"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元高度(m)</label>
                        <InputText type="text" v-model="initialFinialCoefficientRequest.unitHeightH"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元作业面积(m2)</label>
                        <InputText type="text" v-model="initialFinialCoefficientRequest.workingAreaN"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>装置内部爆炸指数E</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.E"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>环境气体爆炸指数A</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.A"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元毒性指标U</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.U"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>主毒性事故指标C</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.C"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>全体危险性指数R</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.R"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险等级</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.initHazardLevel"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcInitialFinal"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="生成报表" @click="OnOpenDialog"></Button>
                    </div>

                    <Dialog :visible="reportFormVisible" :style="{width: '450px'}" header="生成报表(可拖动)" class="p-fluid">
                        <div class="field col-12">
                            <label>全体危险性下降了()个等级</label>
                            <InputText type="text" v-model="docTemplate.descLevel"/>
                        </div>
                        <div class="field col-12">
                            <label>指标()大大下降</label>
                            <InputText type="text" v-model="docTemplate.bigDesc"/>
                        </div>
                        <div class="field col-12">
                            <label>指标()处于极端的水平</label>
                            <InputText type="text" v-model="docTemplate.extreme"/>
                        </div>
                        <div class="field col-12">
                            <label>指标()处于非常高的水平</label>
                            <InputText type="text" v-model="docTemplate.high"/>
                        </div>

                        <template #footer>
                            <Button label="取消" text @click="reportFormVisible = false"/>
                            <Button label="生成报表" text @click="OnGenReport" />
                        </template>
                    </Dialog>
                </div>
            </div>

            <div class="card">
                <h5>补偿评价系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>容器系统系数k1</label>
                        <InputText type="text" v-model="containerSystemCoefficientResponse.k1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>工艺管理系数k2</label>
                        <InputText type="text" v-model="processManagementCoefficientResponse.k2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>安全态度系数k3</label>
                        <InputText type="text" v-model="safetyAttitudeCoefficientResponse.k3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>防火系数k4</label>
                        <InputText type="text" v-model="firePreventionCoefficientResponse.k4"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质隔离系数k5</label>
                        <InputText type="text" v-model="materialIsolationCoefficientResponse.k5"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>灭火活动系数k6</label>
                        <InputText type="text" v-model="fireFightingActivityCoefficientResponse.k6"/>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>最终补偿系数计算结果范畴</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾负荷系数F1</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.F1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>爆炸指数E1</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.E1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>气体爆炸指数A1</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.A1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元毒性指数R1</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.R1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>修正危险系数R2</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.R2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险等级</label>
                        <InputText type="text" v-model="initialFinialCoefficientResponse.finalHazardLevel"/>
                    </div>


                </div>
            </div>

        </div>


    </div>
</template>

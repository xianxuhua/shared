<script setup lang="ts">
import { ref } from 'vue';
import Steps from "~/components/Steps.vue";
import axios from "~/service/axios";
import {dowUrl} from "~/service/proto_gen/dow/dow_url";
import {$ref} from "vue/macros";
import {dow} from "~/service/proto_gen/dow/dow_pb";
import toast from "~/service/toast";
import {exportWord} from "~/service/export";
import {DropdownChangeEvent} from "primevue/dropdown";
import {CascadeSelectChangeEvent, CascadeSelectGroupChangeEvent} from "primevue/cascadeselect";

definePageMeta({
    keepalive: true
})

let active = $ref(0 )

// ------------------------确定物质系数------------------------------------
// 获取物质反应特性
let materialCoefficientGetReactionCharactersRequest = $ref({} as dow.MaterialCoefficientGetReactionCharactersRequest)
let materialCoefficientGetReactionCharactersResponse = $ref({} as dow.MaterialCoefficientGetReactionCharactersResponse)

axios.post(dowUrl.MaterialCoefficientGetReactionCharacters).then(rep => {
    materialCoefficientGetReactionCharactersResponse = dow.MaterialCoefficientGetReactionCharactersResponse.fromObject(rep.data)
})

// 物质类型
let materialCoefficientGetTypesRequest = $ref({} as dow.MaterialCoefficientGetTypesRequest)
let materialCoefficientGetTypesResponse = $ref({} as dow.MaterialCoefficientGetTypesResponse)
axios.post(dowUrl.MaterialCoefficientGetTypes).then(rep => {
    materialCoefficientGetTypesResponse = dow.MaterialCoefficientGetTypesResponse.fromObject(rep.data)
})

// 获取化学活性等级
let materialCoefficientGetChemicalActivityGradeRequest = $ref({} as dow.MaterialCoefficientGetChemicalActivityGradeRequest)
let materialCoefficientGetChemicalActivityGradeResponse = $ref({} as dow.MaterialCoefficientGetChemicalActivityGradeResponse)
const handleChemicalActivityGradeChange = (e: DropdownChangeEvent) => {
    materialCoefficientGetChemicalActivityGradeRequest.reactionCharacter = e.value
    axios.post(dowUrl.MaterialCoefficientGetChemicalActivityGrade, materialCoefficientGetChemicalActivityGradeRequest).then(rep => {
        materialCoefficientGetChemicalActivityGradeResponse = dow.MaterialCoefficientGetChemicalActivityGradeResponse.fromObject(rep.data)
    })
}

// 获取已知物质名称
let materialCoefficientGetKnownNamesResponse = $ref({} as dow.MaterialCoefficientGetKnownNamesResponse)
axios.post(dowUrl.MaterialCoefficientGetKnownNames).then(rep => {
    materialCoefficientGetKnownNamesResponse = dow.MaterialCoefficientGetKnownNamesResponse.fromObject(rep.data)
})

// 根据名称直接输出系数
const OnSelectName = (e: DropdownChangeEvent) => {
    axios.post(dowUrl.MaterialCoefficientGetKnownCoefficient, materialCoefficientGetKnownCoefficientRequest).then(rep => {
        materialCoefficientGetKnownCoefficientResponse = dow.MaterialCoefficientGetKnownCoefficientResponse.fromObject(rep.data)
        materialCoefficientResponse.coefficient = materialCoefficientGetKnownCoefficientResponse.coefficient
    }).catch(err => {
        toast.add({ severity: 'warn', summary: '未找到', detail: '', life: 3000 })
    })
}

// 查询已知物质系数
let materialCoefficientGetKnownCoefficientRequest = $ref({} as dow.MaterialCoefficientGetKnownCoefficientRequest)
let materialCoefficientGetKnownCoefficientResponse = $ref({} as dow.MaterialCoefficientGetKnownCoefficientResponse)

// 计算物质系数
let materialCoefficientRequest = $ref({} as dow.MaterialCoefficientRequest)
let materialCoefficientResponse = $ref({} as dow.MaterialCoefficientResponse)
// 计算物质系数的请求赋值
const handleMaterialTypeChange = (e: CascadeSelectChangeEvent) => {
    materialCoefficientRequest.typeDetail = e.value
}
const handleMaterialTypeGroupChange = (e: CascadeSelectGroupChangeEvent) => {
    materialCoefficientRequest.type = e.value.code
}

const OnCalcMaterialCoefficient = () => {
    materialCoefficientRequest.chemicalActivityGrade = materialCoefficientGetChemicalActivityGradeResponse.chemicalActivityGrade
    axios.post(dowUrl.MaterialCoefficient, materialCoefficientRequest).then(rep => {
        materialCoefficientResponse = dow.MaterialCoefficientResponse.fromObject(rep.data)
    })
}

// 保存未知物质
let materialCoefficientSaveUnknownMaterialRequest = $ref({} as dow.MaterialCoefficientSaveUnknownMaterialRequest)
let materialCoefficientSaveUnknownMaterialResponse = $ref({} as dow.MaterialCoefficientSaveUnknownMaterialResponse)
const OnSave = () => {
    materialCoefficientSaveUnknownMaterialRequest.name = materialCoefficientGetKnownCoefficientRequest.name
    materialCoefficientSaveUnknownMaterialRequest.coefficient = materialCoefficientResponse.coefficient
    if (!materialCoefficientSaveUnknownMaterialRequest.name || !materialCoefficientSaveUnknownMaterialRequest.coefficient) {
        toast.add({ severity: 'warn', summary: '请填写完整', detail: '', life: 3000 })
        return
    }
    axios.post(dowUrl.MaterialCoefficientSaveUnknownMaterial, materialCoefficientSaveUnknownMaterialRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 })
    })
}

// ------------------------一般/特殊工艺危险系数------------------------------------
// 获取一般/特殊工艺危险系数
let processHazardCoefficientGetRequest = $ref({} as dow.ProcessHazardCoefficientGetRequest)
let processHazardCoefficientGetResponse = $ref({} as dow.ProcessHazardCoefficientGetResponse)
axios.post(dowUrl.ProcessHazardCoefficientGet).then(rep => {
    processHazardCoefficientGetResponse = dow.ProcessHazardCoefficientGetResponse.fromObject(rep.data)
})

// 计算一般工艺危险系数
let generalProcessHazardCoefficientCalcRequest = $ref({} as dow.GeneralProcessHazardCoefficientCalcRequest)
let generalProcessHazardCoefficientCalcResponse = $ref({} as dow.GeneralProcessHazardCoefficientCalcResponse)
const OnCalcGeneralProcessHazardCoefficient = () => {
    axios.post(dowUrl.GeneralProcessHazardCoefficientCalc, generalProcessHazardCoefficientCalcRequest).then(rep => {
        generalProcessHazardCoefficientCalcResponse = dow.GeneralProcessHazardCoefficientCalcResponse.fromObject(rep.data)
    })
}

// 计算特殊工艺危险系数
let specialProcessHazardCoefficientCalcRequest = $ref({} as dow.SpecialProcessHazardCoefficientCalcRequest)
let specialProcessHazardCoefficientCalcResponse = $ref({} as dow.SpecialProcessHazardCoefficientCalcResponse)
const OnCalcSpecialProcessHazardCoefficient = () => {
    specialProcessHazardCoefficientCalcRequest.generalProcessHazardCoefficientF1 = generalProcessHazardCoefficientCalcResponse.F1
    axios.post(dowUrl.SpecialProcessHazardCoefficientCalc, specialProcessHazardCoefficientCalcRequest).then(rep => {
        specialProcessHazardCoefficientCalcResponse = dow.SpecialProcessHazardCoefficientCalcResponse.fromObject(rep.data)
    })
}

// ------------------------确定补偿系数------------------------------------
// 获取所有补偿系数
let compensationCoefficientGetRequest = $ref({} as dow.CompensationCoefficientGetRequest)
let compensationCoefficientGetResponse = $ref({} as dow.CompensationCoefficientGetResponse)
axios.post(dowUrl.CompensationCoefficientGet).then(rep => {
    compensationCoefficientGetResponse = dow.CompensationCoefficientGetResponse.fromObject(rep.data)
})

const convertNullTo1 = (val: number | undefined) => {
    if (val === undefined) {
        return 1
    }
    return val
}
// 计算工艺控制补偿系数
let processControlCompensationCoefficientCalcRequest = $ref({} as dow.ProcessControlCompensationCoefficientCalcRequest)
let processControlCompensationCoefficientCalcResponse = $ref({} as dow.ProcessControlCompensationCoefficientCalcResponse)
const OnCalcProcessControlCompensationCoefficient = () => {
    processControlCompensationCoefficientCalcRequest.a1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.a1)
    processControlCompensationCoefficientCalcRequest.b1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.b1)
    processControlCompensationCoefficientCalcRequest.c1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.c1)
    processControlCompensationCoefficientCalcRequest.d1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.d1)
    processControlCompensationCoefficientCalcRequest.e1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.e1)
    processControlCompensationCoefficientCalcRequest.f1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.f1)
    processControlCompensationCoefficientCalcRequest.g1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.g1)
    processControlCompensationCoefficientCalcRequest.h1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.h1)
    processControlCompensationCoefficientCalcRequest.i1 = convertNullTo1(processControlCompensationCoefficientCalcRequest.i1)
    axios.post(dowUrl.ProcessControlCompensationCoefficientCalc, processControlCompensationCoefficientCalcRequest).then(rep => {
        processControlCompensationCoefficientCalcResponse = dow.ProcessControlCompensationCoefficientCalcResponse.fromObject(rep.data)
    })
}

// 计算物质隔离补偿系数
let materialIsolationCompensationCoefficientCalcRequest = $ref({} as dow.MaterialIsolationCompensationCoefficientCalcRequest)
let materialIsolationCompensationCoefficientCalcResponse = $ref({} as dow.MaterialIsolationCompensationCoefficientCalcResponse)
const OnCalcMaterialIsolationCompensationCoefficient = () => {
    materialIsolationCompensationCoefficientCalcRequest.a2 = convertNullTo1(materialIsolationCompensationCoefficientCalcRequest.a2)
    materialIsolationCompensationCoefficientCalcRequest.b2 = convertNullTo1(materialIsolationCompensationCoefficientCalcRequest.b2)
    materialIsolationCompensationCoefficientCalcRequest.c2 = convertNullTo1(materialIsolationCompensationCoefficientCalcRequest.c2)
    materialIsolationCompensationCoefficientCalcRequest.d2 = convertNullTo1(materialIsolationCompensationCoefficientCalcRequest.d2)
    axios.post(dowUrl.MaterialIsolationCompensationCoefficientCalc, materialIsolationCompensationCoefficientCalcRequest).then(rep => {
        materialIsolationCompensationCoefficientCalcResponse = dow.MaterialIsolationCompensationCoefficientCalcResponse.fromObject(rep.data)
    })
}

// 计算防火措施补偿系数
let firePreventionMeasureCompensationCoefficientCalcRequest = $ref({} as dow.FirePreventionMeasureCompensationCoefficientCalcRequest)
let firePreventionMeasureCompensationCoefficientCalcResponse = $ref({} as dow.FirePreventionMeasureCompensationCoefficientCalcResponse)
const OnCalcFirePreventionMeasureCompensationCoefficient = () => {
    firePreventionMeasureCompensationCoefficientCalcRequest.a3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.a3)
    firePreventionMeasureCompensationCoefficientCalcRequest.b3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.b3)
    firePreventionMeasureCompensationCoefficientCalcRequest.c3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.c3)
    firePreventionMeasureCompensationCoefficientCalcRequest.d3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.d3)
    firePreventionMeasureCompensationCoefficientCalcRequest.e3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.e3)
    firePreventionMeasureCompensationCoefficientCalcRequest.f3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.f3)
    firePreventionMeasureCompensationCoefficientCalcRequest.g3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.g3)
    firePreventionMeasureCompensationCoefficientCalcRequest.h3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.h3)
    firePreventionMeasureCompensationCoefficientCalcRequest.i3 = convertNullTo1(firePreventionMeasureCompensationCoefficientCalcRequest.i3)
    axios.post(dowUrl.FirePreventionMeasureCompensationCoefficientCalc, firePreventionMeasureCompensationCoefficientCalcRequest).then(rep => {
        firePreventionMeasureCompensationCoefficientCalcResponse = dow.FirePreventionMeasureCompensationCoefficientCalcResponse.fromObject(rep.data)
    })
}

// ------------------------评价结果及报表------------------------------------
// 最终评价结果
let evaluationResultsCalcRequest = $ref({} as dow.EvaluationResultsCalcRequest)
let evaluationResultsCalcResponse = $ref({} as dow.EvaluationResultsCalcResponse)
const OnEvaluationResultsCalc = () => {
    evaluationResultsCalcRequest.C1 = processControlCompensationCoefficientCalcResponse.C1
    evaluationResultsCalcRequest.C2 = materialIsolationCompensationCoefficientCalcResponse.C2
    evaluationResultsCalcRequest.C3 = firePreventionMeasureCompensationCoefficientCalcResponse.C3
    evaluationResultsCalcRequest.materialCoefficientMf = materialCoefficientGetKnownCoefficientResponse.coefficient
    evaluationResultsCalcRequest.processHazardCoefficientF3 = specialProcessHazardCoefficientCalcResponse.F3
    axios.post(dowUrl.EvaluationResultsCalc, evaluationResultsCalcRequest).then(rep => {
        evaluationResultsCalcResponse = dow.EvaluationResultsCalcResponse.fromObject(rep.data)
    })
}

interface dowDocxTemplate {
    initindex: number
    initlevel: string
    finalindex: number
    finallevel: string
    conclusion: string
}
const OnGenReport = () => {
    const d: dowDocxTemplate = {
        initindex: evaluationResultsCalcResponse.initialFEi,
        initlevel: evaluationResultsCalcResponse.initialUnitHazardLevel,
        finalindex: evaluationResultsCalcResponse.compensationFEi,
        finallevel: evaluationResultsCalcResponse.compensationUnitHazardLevel,
        conclusion: evaluationResultsCalcResponse.conclusion
    }
    exportWord("/dow.docx", d, "DOW火灾、爆炸指数法结论")
}

const OnNext = () => {
    if (active === 0 && materialCoefficientResponse.coefficient === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算物质系数', detail: '', life: 3000 });
        return
    }
    if (active === 1 && (generalProcessHazardCoefficientCalcResponse.F1 === undefined ||
        specialProcessHazardCoefficientCalcResponse.F2 === undefined)) {
        toast.add({ severity: 'warn', summary: '请先计算一般/特殊工艺危险系数', detail: '', life: 3000 });
        return
    }
    if (active === 2 &&
        (processControlCompensationCoefficientCalcResponse.C1 === undefined ||
            materialIsolationCompensationCoefficientCalcResponse.C2 === undefined ||
            firePreventionMeasureCompensationCoefficientCalcResponse.C3 === undefined
        )
    ) {
        toast.add({ severity: 'warn', summary: '请先计算完补偿系数', detail: '', life: 3000 });
        return
    }
    active++
    if (active === 3) {
        // 自动计算评价结果
        OnEvaluationResultsCalc()
    }
}
</script>

<template>
    <div class="card card-w-title">
        <h5>DOW火灾、爆炸指数法</h5>
        <!--        <p>Steps and TabMenu are integrated with the same child routes.</p>-->
        <Steps :active-index="active" :model="[
            {
                label: '确定物质系数',
                to: '',
            },
            {
                label: '一般/特殊工艺危险系数',
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
                        <label>物质反应特性</label>
                        <Dropdown v-model="materialCoefficientGetChemicalActivityGradeRequest.reactionCharacter" :options="materialCoefficientGetReactionCharactersResponse.reactionCharacters" optionLabel="name" optionValue="code" placeholder="Select One" @change="handleChemicalActivityGradeChange"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质类型</label>
                        <CascadeSelect v-model="materialCoefficientRequest.typeDetail"
                            :options="materialCoefficientGetTypesResponse.types" optionLabel="name" optionGroupLabel="name"
                                       option-value="code"
                                       :optionGroupChildren="['children']" style="min-width: 14rem" placeholder="Select One"
                                       @group-change="handleMaterialTypeGroupChange" />
                    </div>
                    <div class="field col-12 md:col-6">
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
                        <label>化学活性等级</label>
                        <InputText type="text" v-model="materialCoefficientGetChemicalActivityGradeResponse.chemicalActivityGrade"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物质系数</label>
                        <InputText type="text" v-model="materialCoefficientResponse.coefficient"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===1">
            <div class="card">
                <h5>一般工艺危险系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>吸热反应</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.B1" :options="processHazardCoefficientGetResponse.B1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>排放或泄漏控制</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.F1" :options="processHazardCoefficientGetResponse.F1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>通道</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.E1" :options="processHazardCoefficientGetResponse.E1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>物料处理与运输</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.C1" :options="processHazardCoefficientGetResponse.C1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>放热化学反应</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.A1" :options="processHazardCoefficientGetResponse.A1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>密闭式或室内工艺单元</label>
                        <Dropdown v-model="generalProcessHazardCoefficientCalcRequest.D1" :options="processHazardCoefficientGetResponse.D1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcGeneralProcessHazardCoefficient"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="下一步" @click="active=2"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>一般工艺危险系数</label>
                        <InputText type="text" v-model="generalProcessHazardCoefficientCalcResponse.F1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>

            <div class="card">
                <h5>特殊工艺危险系数</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>毒性物质</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.A2" :options="processHazardCoefficientGetResponse.A2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>腐蚀与磨蚀</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.H2" :options="processHazardCoefficientGetResponse.H2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>粉尘爆炸</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcRequest.D2" placeholder="0.25~2.00"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>使用明火设备</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcRequest.J2" placeholder="0.10~1.00"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>压力</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcRequest.E2" placeholder="0.10~2.00"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泄漏接头与填料</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.I2" :options="processHazardCoefficientGetResponse.I2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>低温</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.F2" :options="processHazardCoefficientGetResponse.F2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>热油热交换系统</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcRequest.K2" placeholder="0.15~1.15"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>转动设备</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.L2" :options="processHazardCoefficientGetResponse.L2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>易燃及不稳定物质的量</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.G2" :options="processHazardCoefficientGetResponse.G2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>负压操作</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.B2" :options="processHazardCoefficientGetResponse.B2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>易燃范围内或接近易燃范围的操作</label>
                        <Dropdown v-model="specialProcessHazardCoefficientCalcRequest.C2" :options="processHazardCoefficientGetResponse.C2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcSpecialProcessHazardCoefficient"></Button>
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
                        <label>特殊工艺危险系数</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcResponse.F2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===2">
            <div class="card">
                <h5>工艺控制补偿系数C1</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>抑爆</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.c1" :options="compensationCoefficientGetResponse.c1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>惰性气体保护</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.f1" :options="compensationCoefficientGetResponse.f1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>冷却</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.b1" :options="compensationCoefficientGetResponse.b1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>紧急停车装置</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.d1" :options="compensationCoefficientGetResponse.d1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>应急电源</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.a1" :options="compensationCoefficientGetResponse.a1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>活性化学物质检查</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.h1" :options="compensationCoefficientGetResponse.h1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>计算机控制</label>
                        <Dropdown v-model="processControlCompensationCoefficientCalcRequest.e1" :options="compensationCoefficientGetResponse.e1" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>其他工艺危险分析</label>
                        <InputText type="text" v-model="processControlCompensationCoefficientCalcRequest.i1" placeholder="0.91~0.98"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>操作指南或操作规程</label>
                        <InputText type="text" v-model="processControlCompensationCoefficientCalcRequest.g1" placeholder="0.91~0.99"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcProcessControlCompensationCoefficient"></Button>
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
                        <label>物质控制补偿系数C1</label>
                        <InputText type="text" v-model="processControlCompensationCoefficientCalcResponse.C1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>物质隔离补偿系数C2</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>连锁装置</label>
                        <Dropdown v-model="materialIsolationCompensationCoefficientCalcRequest.d2" :options="compensationCoefficientGetResponse.d2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>备用泄料装置</label>
                        <Dropdown v-model="materialIsolationCompensationCoefficientCalcRequest.b2" :options="compensationCoefficientGetResponse.b2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>排放系统</label>
                        <InputText type="text" v-model="materialIsolationCompensationCoefficientCalcRequest.c2" placeholder="0.91~0.97"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>远距离控制阀</label>
                        <Dropdown v-model="materialIsolationCompensationCoefficientCalcRequest.a2" :options="compensationCoefficientGetResponse.a2" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>


                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcMaterialIsolationCompensationCoefficient"></Button>
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
                        <label>物质隔离补偿系数C2</label>
                        <InputText type="text" v-model="materialIsolationCompensationCoefficientCalcResponse.C2"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>防火措施补偿系数C3</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>水幕</label>
                        <InputText type="text" v-model="firePreventionMeasureCompensationCoefficientCalcRequest.f3" placeholder="0.97~0.98"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>钢质结构</label>
                        <Dropdown v-model="firePreventionMeasureCompensationCoefficientCalcRequest.b3" :options="compensationCoefficientGetResponse.b3" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>电缆保护</label>
                        <Dropdown v-model="firePreventionMeasureCompensationCoefficientCalcRequest.i3" :options="compensationCoefficientGetResponse.i3" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>特殊灭火系统</label>
                        <Dropdown v-model="firePreventionMeasureCompensationCoefficientCalcRequest.d3" :options="compensationCoefficientGetResponse.d3" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火装置</label>
                        <InputText type="text" v-model="firePreventionMeasureCompensationCoefficientCalcRequest.g3" placeholder="0.92~0.97"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>洒水灭火系统</label>
                        <InputText type="text" v-model="firePreventionMeasureCompensationCoefficientCalcRequest.e3" placeholder="0.74~0.97"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>手提式灭火器</label>
                        <InputText type="text" v-model="firePreventionMeasureCompensationCoefficientCalcRequest.h3" placeholder="0.93~0.98"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泄漏检测装置</label>
                        <Dropdown v-model="firePreventionMeasureCompensationCoefficientCalcRequest.a3" :options="compensationCoefficientGetResponse.a3" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>消防水供应系统</label>
                        <Dropdown v-model="firePreventionMeasureCompensationCoefficientCalcRequest.c3" :options="compensationCoefficientGetResponse.c3" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                    <div class="field col-12 md:col-4">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalcFirePreventionMeasureCompensationCoefficient"></Button>
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
                        <label>防火措施补偿系数C3</label>
                        <InputText type="text" v-model="firePreventionMeasureCompensationCoefficientCalcResponse.C3"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" v-else-if="active===3">
            <div class="card">
                <h5>安全评价系数</h5>
                <div class="p-fluid formgrid grid">

                    <div class="field col-12 md:col-6">
                        <label>单元物质系数</label>
                        <InputText type="text" v-model="materialCoefficientResponse.coefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>工艺补偿系数</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.C"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>一般工艺危险系数</label>
                        <InputText type="text" v-model="generalProcessHazardCoefficientCalcResponse.F1"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>特殊工艺危险系数</label>
                        <InputText type="text" v-model="specialProcessHazardCoefficientCalcResponse.F2"/>
                    </div>

                    <div class="field col-12 md:col-6">
                        <Button label="上一步" @click="active--"></Button>
                    </div>
                    <div class="field col-12 md:col-6">
                        <Button label="生成报表" @click="OnGenReport"></Button>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>单元初期安全评价结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾爆炸指数</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.initialFEi"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元危险系数</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.initialUnitHazardCoefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元危险等级</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.initialUnitHazardLevel"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险影响区域半径</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.initialR"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险影响区域面积</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.initialS"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>

                </div>
            </div>

            <div class="card">
                <h5>单元补偿安全评价结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>火灾爆炸指数</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.compensationFEi"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元危险系数</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.compensationUnitHazardCoefficient"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单元危险等级</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.compensationUnitHazardLevel"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险影响区域半径</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.compensationR"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>危险影响区域面积</label>
                        <InputText type="text" v-model="evaluationResultsCalcResponse.compensationS"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>


                </div>
            </div>

        </div>


    </div>
</template>

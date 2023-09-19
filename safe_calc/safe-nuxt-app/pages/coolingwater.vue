<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import toast from "~/service/toast";

definePageMeta({
    keepalive: true
})
let dialogTableVisible = $ref(false)

// 获取所有场景
let accSceneGetResponse = $ref({} as accsim.AccSceneGetResponse)
const OnOpenDialog = () => {
    dialogTableVisible=true
    axios.post(accsimUrl.AccSceneGet).then(rep => {
        accSceneGetResponse = accsim.AccSceneGetResponse.fromObject(rep.data)
    })
}

let selectedSceneId = $ref(0)
let selectedSceneName = $ref("")
const OnSelectScene = (row: accsim.AccScene) => {
    dialogTableVisible = false
    selectedSceneId = row.id
    selectedSceneName = row.name
    // 填充
    coolingWaterDemandRequest.num = 1
    coolingWaterDemandRequest.nearNum = 1
    coolingWaterDemandRequest.diameter = 80
    coolingWaterDemandRequest.nearDiameter = 80
    coolingWaterDemandRequest.coolingTime = 120
    coolingWaterDemandRequest.nearCoolingTime = 120
    coolingWaterDemandRequest.supplyStrength = 27
    coolingWaterDemandRequest.nearSupplyStrength = 27
    coolingWaterDemandRequest.singleFlow = 100
}

let coolingWaterDemandRequest = $ref({} as accsim.CoolingWaterDemandRequest)
let coolingWaterDemandResponse = $ref({} as accsim.CoolingWaterDemandResponse)

const OnCalc = () => {
    axios.post(accsimUrl.CoolingWaterDemand, coolingWaterDemandRequest).then(rep => {
        coolingWaterDemandResponse = accsim.CoolingWaterDemandResponse.fromObject(rep.data)
    })
}

let coolingWaterSaveRequest = $ref({} as accsim.CoolingWaterSaveRequest)
const OnSave = () => {
    coolingWaterSaveRequest.sceneId = selectedSceneId
    coolingWaterSaveRequest.num = coolingWaterDemandRequest.num
    coolingWaterSaveRequest.nearNum = coolingWaterDemandRequest.nearNum
    coolingWaterSaveRequest.diameter = coolingWaterDemandRequest.diameter
    coolingWaterSaveRequest.nearDiameter = coolingWaterDemandRequest.nearDiameter
    coolingWaterSaveRequest.coolingTime = coolingWaterDemandRequest.coolingTime
    coolingWaterSaveRequest.nearCoolingTime = coolingWaterDemandRequest.nearCoolingTime
    coolingWaterSaveRequest.supplyStrength = coolingWaterDemandRequest.supplyStrength
    coolingWaterSaveRequest.nearSupplyStrength = coolingWaterDemandRequest.nearSupplyStrength
    coolingWaterSaveRequest.singleFlow = coolingWaterDemandRequest.singleFlow

    coolingWaterSaveRequest.flowTheory = coolingWaterDemandResponse.flowTheory
    coolingWaterSaveRequest.flowActual = coolingWaterDemandResponse.flowActual
    coolingWaterSaveRequest.usageTheory = coolingWaterDemandResponse.usageTheory
    coolingWaterSaveRequest.usageActual = coolingWaterDemandResponse.usageActual
    coolingWaterSaveRequest.nearFlowTheory = coolingWaterDemandResponse.nearFlowTheory
    coolingWaterSaveRequest.nearFlowActual = coolingWaterDemandResponse.nearFlowActual
    coolingWaterSaveRequest.nearUsageTheory = coolingWaterDemandResponse.nearUsageTheory
    coolingWaterSaveRequest.nearUsageActual = coolingWaterDemandResponse.nearUsageActual
    coolingWaterSaveRequest.totalUsageTheory = coolingWaterDemandResponse.totalUsageTheory
    coolingWaterSaveRequest.totalUsageActual = coolingWaterDemandResponse.totalUsageActual
    axios.post(accsimUrl.CoolingWaterSave, coolingWaterSaveRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 })
    }).catch(err => {
        toast.add({ severity: 'error', summary: '保存失败', detail: '', life: 3000 })
    })
}
</script>

<template>
    <div class="grid">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>着火装置数量</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.num"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>临近装置数量</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.nearNum"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>着火装置直径(m)</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.diameter"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>临近装置直径(m)</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.nearDiameter"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>着火装置冷却时间</label>
                        <Dropdown v-model="coolingWaterDemandRequest.coolingTime" :options="[
                            {name: '2小时', code: 120},
                            {name: '2小时15分钟', code: 135},
                            {name: '2小时30分钟', code: 150},
                        ]" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>临近装置冷却时间</label>
                        <Dropdown v-model="coolingWaterDemandRequest.nearCoolingTime" :options="[
                            {name: '2小时', code: 120},
                            {name: '2小时15分钟', code: 135},
                            {name: '2小时30分钟', code: 150},
                        ]" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>着火冷却水供给范围和强度(L/s•m)</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.supplyStrength"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>临近冷却水供给范围和强度(L/s•m)</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.nearSupplyStrength"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>单只泡沫炮流量(L/s•m)</label>
                        <InputText type="text" v-model="coolingWaterDemandRequest.singleFlow"/>
                    </div>
                    <div class="field col-12 md:col-6">
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="选择事故场景" @click="OnOpenDialog"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="计算" @click="OnCalc"></Button>
                    </div>
                    <div class="field col-12 md:col-4">
                        <Button label="保存计算结果" @click="OnSave"></Button>
                    </div>

                    <Dialog v-model:visible="dialogTableVisible" modal :style="{width: '650px'}" header="选择事故场景">
                        <DataTable paginator :rows="7" :value="accSceneGetResponse.accScenes">
                            <Column field="name" header="名称"></Column>
                            <Column field="type" header="类型"></Column>
                            <Column style="flex: 0 0 4rem">
                                <template #body="{ data, index }">
                                    <Button label="选择" text size="small" @click="OnSelectScene(data)"/>
                                </template>
                            </Column>
                        </DataTable>

                    </Dialog>
                </div>
            </div>

            <div class="card">
                <h5>计算结果</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>用于冷却着火装置/设备设施用水流量(L/min)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.flowTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却着火装置/设备设施用水流量(实际)(L/min)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.flowActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却临近装置用水流量(L/min)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.nearFlowTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却临近装置用水流量(实际)(L/min)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.nearFlowActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却装置/设备设施用水量(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.usageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却装置/设备设施用水量(实际)(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.usageActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却临近装置用水量(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.nearUsageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>用于冷却临近装置用水量(实际)(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.nearUsageActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>总用水量(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.totalUsageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>总用水量(实际)(L)</label>
                        <InputText type="text" v-model="coolingWaterDemandResponse.totalUsageActual"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

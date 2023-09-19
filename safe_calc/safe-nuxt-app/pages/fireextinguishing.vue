<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
import toast from "~/service/toast";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";

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
        console.log(rep.data)
    })
}

let selectedSceneName = $ref("")
let selectedSceneId = $ref(0)
const OnSelectScene = (row: accsim.AccScene) => {
    dialogTableVisible = false
    selectedSceneId = row.id
    selectedSceneName = row.name
    fireExtinguishingDemandRequest.liquidTankDiameter = 80
    fireExtinguishingDemandRequest.supplyStrength = 100
    fireExtinguishingDemandRequest.supplyTime = 5
    fireExtinguishingDemandRequest.mixRatio = 0.03
}

let fireExtinguishingDemandRequest = $ref({} as accsim.FireExtinguishingDemandRequest)
let fireExtinguishingDemandResponse = $ref({} as accsim.FireExtinguishingDemandResponse)

const OnCalc = () => {
    if (selectedSceneId === 0) {
        toast.add({ severity: 'warn', summary: '请先选择场景', detail: '', life: 3000 });
        return
    }
    axios.post(accsimUrl.FireExtinguishingDemand, fireExtinguishingDemandRequest).then(rep => {
        fireExtinguishingDemandResponse = accsim.FireExtinguishingDemandResponse.fromObject(rep.data)
    })
}

let fireExtinguishingSaveRequest = $ref({} as accsim.FireExtinguishingSaveRequest)
const OnSave = () => {
    if (fireExtinguishingDemandResponse.fireExtinguishingFlowTheory === undefined) {
        toast.add({ severity: 'warn', summary: '请先计算', detail: '', life: 3000 });
        return
    }
    fireExtinguishingSaveRequest.sceneId = selectedSceneId
    fireExtinguishingSaveRequest.supplyStrength = fireExtinguishingDemandRequest.supplyStrength
    fireExtinguishingSaveRequest.supplyTime = fireExtinguishingDemandRequest.supplyTime
    fireExtinguishingSaveRequest.mixRatio = fireExtinguishingDemandRequest.mixRatio
    fireExtinguishingSaveRequest.liquidTankDiameter = fireExtinguishingDemandRequest.liquidTankDiameter
    fireExtinguishingSaveRequest.fireExtinguishingFlowTheory = fireExtinguishingDemandResponse.fireExtinguishingFlowTheory
    fireExtinguishingSaveRequest.fireExtinguishingFlowActual = fireExtinguishingDemandResponse.fireExtinguishingFlowActual
    fireExtinguishingSaveRequest.fireExtinguishingUsageTheory = fireExtinguishingDemandResponse.fireExtinguishingUsageTheory
    fireExtinguishingSaveRequest.fireExtinguishingUsageActual = fireExtinguishingDemandResponse.fireExtinguishingUsageActual
    fireExtinguishingSaveRequest.configFireExtinguishingFlowTheory = fireExtinguishingDemandResponse.configFireExtinguishingFlowTheory
    fireExtinguishingSaveRequest.configFireExtinguishingFlowActual = fireExtinguishingDemandResponse.configFireExtinguishingFlowActual
    fireExtinguishingSaveRequest.configFireExtinguishingUsageTheory = fireExtinguishingDemandResponse.configFireExtinguishingUsageTheory
    fireExtinguishingSaveRequest.configFireExtinguishingUsageActual = fireExtinguishingDemandResponse.configFireExtinguishingUsageActual
    fireExtinguishingSaveRequest.primaryLiquidFlowTheory = fireExtinguishingDemandResponse.primaryLiquidFlowTheory
    fireExtinguishingSaveRequest.primaryLiquidFlowActual = fireExtinguishingDemandResponse.primaryLiquidFlowActual
    fireExtinguishingSaveRequest.primaryLiquidUsageTheory = fireExtinguishingDemandResponse.primaryLiquidUsageTheory
    fireExtinguishingSaveRequest.primaryLiquidUsageActual = fireExtinguishingDemandResponse.primaryLiquidUsageActual
    axios.post(accsimUrl.FireExtinguishingSave, fireExtinguishingSaveRequest).then(rep => {
        toast.add({ severity: 'success', summary: '保存成功', detail: '', life: 3000 });
    }).catch(err => {
        toast.add({ severity: 'warn', summary: '保存失败', detail: '', life: 3000 });
    })
}
</script>

<template>
    <div class="grid">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>事故场景</label>
                        <InputText type="text" v-model="selectedSceneName"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>液池直径(m)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandRequest.liquidTankDiameter"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫混合液连续供给时间</label>
                        <Dropdown v-model="fireExtinguishingDemandRequest.supplyTime" :options="[
                            {name: '5', code: 5},
                            {name: '10', code: 10},
                            {name: '15', code: 15},
                            {name: '30', code: 30},
                            {name: '60', code: 60},
                        ]" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火供给强度(L/(s•m2)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandRequest.supplyStrength"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>混合比</label>
                        <Dropdown v-model="fireExtinguishingDemandRequest.mixRatio" :options="[
                            {name: '0.03', code: 0.03},
                            {name: '0.05', code: 0.05},
                        ]" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
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
                        <label>泡沫灭火剂流量(理论)(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.fireExtinguishingFlowTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火剂流量(实际)(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.fireExtinguishingFlowActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫原液理论流量(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.primaryLiquidFlowTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫原液实际流量(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.primaryLiquidFlowActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫原液理论用量(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.primaryLiquidUsageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫原液实际用量(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.primaryLiquidUsageActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火剂用量(理论)(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.fireExtinguishingUsageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火剂用量(实际)(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.fireExtinguishingUsageActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>配置泡沫灭火剂用水流量(理论)(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.configFireExtinguishingFlowTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>配置泡沫灭火剂用水流量(实际)(L/min)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.configFireExtinguishingFlowActual"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>配置泡沫灭火剂用水量(理论)(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.configFireExtinguishingUsageTheory"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>配置泡沫灭火剂用水量(实际)(L)</label>
                        <InputText type="text" v-model="fireExtinguishingDemandResponse.configFireExtinguishingUsageActual"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import axios from "~/service/axios";
import {$ref} from "vue/macros";
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
    })
}


let equipmentRequireRequest = $ref({} as accsim.EquipmentRequireRequest)
let equipmentRequireResponse = $ref({} as accsim.EquipmentRequireResponse)
const OnSelectScene = (row: accsim.AccScene) => {
    dialogTableVisible = false
    equipmentRequireRequest.sceneId = row.id
    axios.post(accsimUrl.EquipmentRequire, equipmentRequireRequest).then(rep => {
        equipmentRequireResponse = accsim.EquipmentRequireResponse.fromObject(rep.data)
    })
}

let foamGunMonitorFlow = [
    {name: 'Purga-40(9000L/min)', code: 23},
    {name: 'Purga-30(7200L/min)', code: 22},
    {name: 'PP64(3840L/min)', code: 21},
    {name: 'PP48(2880L/min)', code: 20},
    {name: 'PP40(2400L/min)', code: 19},
    {name: 'PP32(1920L/min)', code: 18},
    {name: 'PP24(1440L/min)', code: 17},
    {name: 'PQ16(960L/min)', code: 16},
    {name: 'PQ8(480L/min)', code: 15},
    {name: 'PQ4(240L/min)', code: 14},
]
let foamGunMonitorFlowValue = [
    {name: "1", code: 1},
    {name: "2", code: 2},
    {name: "3", code: 3},
    {name: "4", code: 4},
    {name: "5", code: 5},
    {name: "6", code: 6},
    {name: "7", code: 7},
    {name: "8", code: 8},
    {name: "9", code: 9},
    {name: "10", code: 10},
    {name: "11", code: 11},
    {name: "12", code: 12},
    {name: "13", code: 13},
    {name: "14", code: 14},
    {name: "15", code: 15},
    {name: "16", code: 16},
    {name: "17", code: 17},
    {name: "18", code: 18},
    {name: "19", code: 19},
    {name: "20", code: 20},
]

let coolingWaterGunCannon = [
    {name: "CROSSFIRE-XFC-52(4800L/min)", code: 13},
    {name: "ZTZ-600-SZP(1800L/min)", code: 12},
    {name: "ZDMS0.90/30S(1800L/min)", code: 11},
    {name: "ZDMS0.80/20S(1200L/min)", code: 10},
    {name: "美国-TFT-Mid-Force(760.2L/min)", code: 9},
    {name: "ZDMS0.8/10S-ZQ/ZTZ-212(600L/min)", code: 8},
    {name: "多功能直流喷雾水枪QLD6/8Ⅲ(499.8L/min)", code: 7},
    {name: "直流水枪（俄式）QZ66型(450.0L/min)", code: 6},
    {name: "ZDMS0.6/5S/ZTZ-125(300L/min)", code: 5},
    {name: "直流消防水枪 QZ3.5/5-B型 65水枪(300L/min)", code: 4},
    {name: "直流水枪（俄式）QZ51(300L/min)", code: 3},
    {name: "直流开关水枪 65型号QZG19(300L/min)", code: 2},
    {name: "直流开关水枪 65型号QZG16(199.8L/min)", code: 1},
]
let coolingWaterGunCannonValue = [
    {name: "1", code: 1},
    {name: "2", code: 2},
    {name: "3", code: 3},
    {name: "4", code: 4},
    {name: "5", code: 5},
    {name: "6", code: 6},
    {name: "7", code: 7},
    {name: "8", code: 8},
    {name: "9", code: 9},
    {name: "10", code: 10},
    {name: "11", code: 11},
    {name: "12", code: 12},
    {name: "13", code: 13},
    {name: "14", code: 14},
    {name: "15", code: 15},
    {name: "16", code: 16},
    {name: "17", code: 17},
    {name: "18", code: 18},
    {name: "19", code: 19},
    {name: "20", code: 20},
]
let foamFireTruck = [
    {name: "德国MAN TGA 41.480 8x4(9960L/min)", code: 23},
    {name: "德国蓝特公司远程供水系统(19980L/min)", code: 22},
    {name: "大流量拖车式移动泡沫炮(9960L/min)", code: 21},
    {name: "奥地利卢森宝亚TLFPM180(7800L/min)", code: 20},
    {name: "德国马基路斯SLF100/180(7200L/min)", code: 19},
    {name: "JDX5330GXFPM160(6000L/min)", code: 18},
    {name: "JDF5203GXFPM80(3600L/min)", code: 17},
    {name: "JDF5313GXFPM160(3600L/min)", code: 16},
    {name: "JDF5252GXFPM110(2880L/min)", code: 15},
    {name: "JDF5151GXFPM70/A(2400L/min)", code: 14},
    {name: "JDF5152GXFPM60/A(1920L/min)", code: 13},
    {name: "JDF5161GXFPM70B(1920L/min)", code: 12},
    {name: "JDF5102GXFPM30(1440L/min)", code: 11},
]
let waterTankFireTruck = [
    {name: "WHG5120GXFSG40(1800L/min)", code: 5},
    {name: "JDF5242GXFSG110(1800L/min)", code: 4},
    {name: "JDF5152GXFSG60A(2400L/min)", code: 3},
    {name: "JDF5102GXFSG30(1800L/min)", code: 2},
    {name: "JDF5072GXFSG20C(1200L/min)", code: 1},
]

let equipmentPersonDemandRequest = $ref({} as accsim.EquipmentPersonDemandRequest)
equipmentPersonDemandRequest.foams = [{type: 23, num: 5}, {type: 23, num: 5}, {type: 23, num: 5}, {type: 23, num: 5}]
equipmentPersonDemandRequest.coolingTanks = [{type: 13, num: 5}, {type: 13, num: 5}, {type: 13, num: 5}, {type: 13, num: 5}]
equipmentPersonDemandRequest.coolingNearTanks = [{type: 13, num: 5}, {type: 13, num: 5}, {type: 13, num: 5}, {type: 13, num: 5}]
equipmentPersonDemandRequest.foamTruckFlow = 23
equipmentPersonDemandRequest.waterTruckFlow = 5
let equipmentPersonDemandResponse = $ref({} as accsim.EquipmentPersonDemandResponse)
const OnCalc = () => {
    equipmentPersonDemandRequest.foamFlow = equipmentRequireResponse.foamFlow
    equipmentPersonDemandRequest.coolingFlow = equipmentRequireResponse.flow
    equipmentPersonDemandRequest.coolingNearFlow = equipmentRequireResponse.nearFlow
    axios.post(accsimUrl.EquipmentPersonDemand, equipmentPersonDemandRequest).then(rep => {
        equipmentPersonDemandResponse = accsim.EquipmentPersonDemandResponse.fromObject(rep.data)
    })
}
</script>

<template>
    <div class="grid">

        <div class="col-12">
            <div class="card">
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火剂实际流量</label>
                        <InputText type="text" placeholder="根据事故场景选择" v-model="equipmentRequireResponse.foamFlow"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>冷却着火装置实际水流量</label>
                        <InputText type="text" placeholder="根据事故场景选择" v-model="equipmentRequireResponse.flow"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>冷却临近装置实际水流量</label>
                        <InputText type="text" placeholder="根据事故场景选择" v-model="equipmentRequireResponse.nearFlow"/>
                    </div>
                    <div class="field col-12 md:col-12">
                        泡沫枪、炮流量
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[0].type" :options="foamGunMonitorFlow" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[0].num" :options="foamGunMonitorFlowValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[1].type" :options="foamGunMonitorFlow" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[1].num" :options="foamGunMonitorFlowValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[2].type" :options="foamGunMonitorFlow" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[2].num" :options="foamGunMonitorFlowValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[3].type" :options="foamGunMonitorFlow" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.foams[3].num" :options="foamGunMonitorFlowValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-12">
                        冷却着火罐水枪、炮
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[0].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[0].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[1].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[1].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[2].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[2].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[3].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingTanks[3].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-12">
                        冷却邻近罐水枪、炮
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[0].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[0].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[1].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[1].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[2].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[2].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[3].type" :options="coolingWaterGunCannon" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                        <Dropdown v-model="equipmentPersonDemandRequest.coolingNearTanks[3].num" :options="coolingWaterGunCannonValue" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>泡沫灭火车流量</label>
                        <Dropdown v-model="equipmentPersonDemandRequest.foamTruckFlow" :options="foamFireTruck" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label>水罐车流量</label>
                        <Dropdown v-model="equipmentPersonDemandRequest.waterTruckFlow" :options="waterTankFireTruck" optionLabel="name" optionValue="code" placeholder="Select One"></Dropdown>
                    </div>

                    <div class="field col-12 md:col-6">
                        <Button label="选择事故场景" @click="OnOpenDialog"></Button>
                    </div>
                    <div class="field col-12 md:col-6">
                        <Button label="计算" @click="OnCalc"></Button>
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
                    <DataTable tableStyle="min-width: 55rem" :value="equipmentPersonDemandResponse.eqs">
                        <Column field="type" header="装备类型"></Column>
                        <Column field="modelVersion" header="型号"></Column>
                        <Column field="num" header="数量"></Column>
                        <Column field="operatorNum" header="操作人数"></Column>
                    </DataTable>
                </div>
            </div>

        </div>

    </div>
</template>

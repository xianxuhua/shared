<script setup lang="ts">
import axios from "~/service/axios";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {$ref} from "vue/macros";
import {AxiosError} from "axios";
import {defineAsyncComponent, shallowRef} from "#imports";
import {poolFirePoint} from "~/service/state";
import toast from "~/service/toast";
import {useConfirm} from "primevue/useconfirm";
import {mond} from "~/service/proto_gen/mond/mond_pb";
import {mondUrl} from "~/service/proto_gen/mond/mond_url";
let showmap = shallowRef(defineAsyncComponent(() => import("@/pages/showmap.vue")))
definePageMeta({
    keepalive: true
})

const OnReload = () => {
    axios.post(accsimUrl.AccSceneGet).then(rep => {
        accSceneGetResponse = accsim.AccSceneGetResponse.fromObject(rep.data)
    })
}
let accSceneGetResponse = $ref({} as accsim.AccSceneGetResponse)
axios.post(accsimUrl.AccSceneGet).then(rep => {
    accSceneGetResponse = accsim.AccSceneGetResponse.fromObject(rep.data)
})
let accSceneDeleteRequest = $ref({} as accsim.AccSceneDeleteRequest)
const confirmPopup = useConfirm();
const confirm = (event, row: mond.Material) => {
    confirmPopup.require({
        target: event.target,
        message: '确定删除?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            accSceneGetResponse.accScenes = accSceneGetResponse.accScenes.filter(m => m.id !== row.id)

            accSceneDeleteRequest.id = row.id

            axios.post(accsimUrl.AccSceneDelete, accSceneDeleteRequest).then(rep => {
                toast.add({ severity: 'success', summary: '删除成功', detail: '', life: 3000 })
            }).catch((err: AxiosError) => {
                toast.add({ severity: 'error', summary: '删除失败', detail: '', life: 3000 })
            })
        },

    });
};

let showMap = $ref(false)
const goBack = () => {
    showMap = false
}
let accSceneInfoRequest = $ref({} as accsim.AccSceneInfoRequest)
let accSceneInfoResponse = $ref({} as accsim.AccSceneInfoResponse)
let sceneType = $ref(0)
const OnInfo = (row: accsim.AccScene) => {
    accSceneInfoRequest.id = row.id
    axios.post(accsimUrl.AccSceneInfo, accSceneInfoRequest).then(rep => {
        accSceneInfoResponse = accsim.AccSceneInfoResponse.fromObject(rep.data)
        showMap = true
        if (accSceneInfoResponse.type == "池火灾") {
            sceneType = 1
        } else if (accSceneInfoResponse.type == "流淌火") {
            sceneType = 2
        } else if (accSceneInfoResponse.type == "密封圈") {
            sceneType = 3
        } else if (accSceneInfoResponse.type == "喷射火") {
            sceneType = 4
        } else if (accSceneInfoResponse.type == "火球火") {
            sceneType = 5
        }
    })
}
</script>


<template>
    <div v-show="showMap">
        <Button text label="< 返回" @click="showMap=false"></Button>
        <component :is="showmap" v-if="showMap" :sceneName="accSceneInfoResponse.name" :locationX="accSceneInfoResponse.latitude" :locationY="accSceneInfoResponse.longitude" :fx="accSceneInfoResponse.windDirection" :zs="accSceneInfoResponse.bigInjuryRadius" :qs="accSceneInfoResponse.smallInjuryRadius" :sw="accSceneInfoResponse.deathRadius" :type="sceneType"></component>
    </div>

    <DataTable paginator :rows="10" :value="accSceneGetResponse.accScenes">
        <Column field="name" header="场景名称"></Column>
        <Column field="addTime" header="添加时间"></Column>
        <Column field="type" header="类型"></Column>
        <Column field="windSpeed" header="风速"></Column>
        <Column field="windDirection" header="风向"></Column>
        <Column field="targetDis" header="目标距离"></Column>
        <Column field="deathRadius" header="死亡半径"></Column>
        <Column field="bigInjuryRadius" header="重伤半径"></Column>
        <Column field="smallInjuryRadius" header="轻伤半径"></Column>
        <Column style="flex: 0 0 4rem">
            <template #body="{ data, index }">
                <Button label="查看" text size="small" @click="OnInfo(data)"/>
                <Button label="删除" text size="small" @click="confirm($event, data)"/>
            </template>
        </Column>
    </DataTable>
</template>

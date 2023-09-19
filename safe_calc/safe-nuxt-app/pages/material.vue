<template>
    <div class="card p-fluid">
        <DataTable paginator :rows="7" :value="materialsGetResponse.materials">
            <Column field="name" header="物质名称"></Column>
            <Column field="heat" header="燃烧热"></Column>
            <Column field="coefficient" header="物质系数"></Column>

            <Column style="flex: 0 0 4rem">
                <template #body="{ data, index }">
                    <Button type="button" :icon="'pi pi-file-edit'" text size="small" @click="OnOpenDialog(data)"/>
                    <Button type="button" :icon="'pi pi-times'" text size="small" @click="confirm($event, data)"/>
                </template>
            </Column>

        </DataTable>

        <Dialog v-model:visible="dialogVisible" modal header="编辑物质" :style="{ width: '50vw' }">
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-12">
                    <label>物质名称</label>
                    <InputText type="text" v-model="materialEditRequest.name"/>
                </div>
                <div class="field col-12 md:col-12">
                    <label>燃烧热</label>
                    <InputText type="text" v-model="materialEditRequest.heat"/>
                </div>
                <div class="field col-12 md:col-12">
                    <label>物质系数</label>
                    <InputText type="text" v-model="materialEditRequest.coefficient"/>
                </div>
            </div>

            <template #footer>
                <Button label="No" icon="pi pi-times" @click="dialogVisible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="OnEdit" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import axios from "~/service/axios";
import {mondUrl} from "~/service/proto_gen/mond/mond_url";
import {$ref} from "vue/macros";
import {mond} from "~/service/proto_gen/mond/mond_pb";
import toast from "~/service/toast";
import {useConfirm} from "primevue/useconfirm";

definePageMeta({
    keepalive: true
})

let materialsGetResponse = $ref({} as mond.MaterialsGetResponse)
axios.post(mondUrl.MaterialsGet).then(rep => {
    materialsGetResponse = mond.MaterialsGetResponse.fromObject(rep.data)
})

let dialogVisible = $ref(false)
let materialEditRequest = $ref({} as mond.MaterialEditRequest)

const OnOpenDialog = (row: mond.Material) => {
    dialogVisible = true
    materialEditRequest.id = row.id
    materialEditRequest.name = row.name
    materialEditRequest.heat = row.heat
    materialEditRequest.coefficient = row.coefficient
}

const OnEdit = () => {
    dialogVisible = false
    let e = materialsGetResponse.materials.filter(m => m.id === materialEditRequest.id)[0];
    e.name = materialEditRequest.name
    e.heat = materialEditRequest.heat
    e.coefficient = materialEditRequest.coefficient
    axios.post(mondUrl.MaterialEdit, materialEditRequest).then(rep => {
        toast.add({ severity: 'success', summary: '修改成功', detail: '', life: 3000 })
    })
}

let materialDeleteRequest = $ref({} as mond.MaterialDeleteRequest)

const confirmPopup = useConfirm();
const confirm = (event, row: mond.Material) => {
    confirmPopup.require({
        target: event.target,
        message: '确定删除?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            materialsGetResponse.materials = materialsGetResponse.materials.filter(m => m.id !== row.id)
            materialDeleteRequest.id = row.id
            axios.post(mondUrl.MaterialDelete, materialDeleteRequest).then(rep => {
                toast.add({ severity: 'success', summary: '删除成功', detail: '', life: 3000 })
            })
        },

    });
};

</script>

<style scoped></style>
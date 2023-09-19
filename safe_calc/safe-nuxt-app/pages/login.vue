<script setup lang="ts">
import {$ref} from "vue/macros";
import {definePageMeta} from "#imports";
import {authUrl} from "~/service/proto_gen/auth/auth_url";
import {auth} from "~/service/proto_gen/auth/auth_pb";
import axios from "~/service/axios";
import {useToast} from "primevue/usetoast";

definePageMeta({
    layout: "none"
})

const checked = $ref(false)


document.body.style.backgroundImage = "url('/img/3491668411766_.pic_hd.jpg')"
document.body.style.backgroundSize = "cover"


let loginRequest = $ref({} as auth.LoginRequest)
let loginResponse = $ref({} as auth.LoginResponse)
var toast = useToast();
const login = () => {
    axios.post(authUrl.Login, loginRequest).then(rep => {
        loginResponse = auth.LoginResponse.fromObject(rep.data)
        let token = useCookie("token", {
            maxAge: loginResponse.tokenExpire
        })
        token.value = loginResponse.token
        location.href = "/"
    })
}
</script>

<template>
    <div class=" flex align-items-center justify-content-center min-h-screen min-w-screen">
        <div class="flex flex-column align-items-center justify-content-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">区域火灾风险分析评估系统</div>
                    </div>

                    <div>
                        <label class="block text-900 text-xl font-medium mb-2">用户名</label>
                        <InputText v-model="loginRequest.username" type="text" placeholder="" class="w-full md:w-30rem mb-5" style="padding: 1rem" />

                        <label class="block text-900 font-medium text-xl mb-2">密码</label>
                        <Password v-model="loginRequest.password" placeholder="" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" binary class="mr-2"></Checkbox>
                                <label>Remember me</label>
                            </div>
                        </div>
                        <Button label="登录" class="w-full p-3 text-xl" @click="login"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup>
import AppLayout from './AppLayout.vue';
// 监听刷新
const router = useRouter()
if (router.currentRoute.value.path !== "/" && router.currentRoute.value.path !== "/login") {
    router.replace("/")
}
</script>

<template>
  <div>
      <app-layout></app-layout>
  </div>
</template>

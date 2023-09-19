<script setup lang="ts">
import useRouteCache from '~/service/hooks'

// 收集路由配置meta为keepAlive: ture的缓存
const { collectCaches } = useRouteCache()
collectCaches();

</script>

<template>
    <div>
        <Toast></Toast>
        <NuxtLayout>
        </NuxtLayout>
    </div>
</template>

<style lang="scss"></style>

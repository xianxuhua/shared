<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
const model = ref([
    {
        label: '',
        to: '/pages',
        items: [
            {
                label: '区域火灾风险分析',
                icon: '/img/火灾.svg',
                items: [
                    {
                        label: '古斯塔夫法',
                        to: '/gustav'
                    },
                    {
                        label: 'DOW火灾、爆炸指数法',
                        to: '/dow'
                    },
                    {
                        label: 'Mond火灾、爆炸指数法',
                        to: '/mond'
                    },
                    {
                        label: '火灾风险分析工程方法',
                        to: '/engineering'
                    },
                    {
                        label: '建筑火灾财产损失评估方法',
                        to: '/fireloss'
                    },
                    {
                        label: '物质管理',
                        to: '/material'
                    },
                ]
            },
            {
                label: '火灾事故场景模拟',
                icon: '/img/油罐.svg',
                items: [
                    {
                        label: '池火灾后果计算',
                        to: '/poolfire'
                    },
                    {
                        label: '流淌火后果计算',
                        to: '/flowingfire'
                    },
                    {
                        label: '密封圈后果计算',
                        to: '/sealring'
                    },
                    {
                        label: '喷射火后果计算',
                        to: '/jetfire'
                    },
                    {
                        label: '火球火后果计算',
                        to: '/ballfire'
                    },
                    {
                        label: '事故场景管理',
                        to: '/accscene'
                    },
                ]
            },
            {
                label: '消防资源需求预测',
                icon: '/img/预测.svg',
                items: [
                    {
                        label: '灭火剂需求预测',
                        to: '/fireextinguishing'
                    },
                    {
                        label: '消防冷却水需求预测',
                        to: '/coolingwater'
                    },
                    {
                        label: '消防装备与人员需求预测',
                        to: '/equipmentperson'
                    },
                ]
            },

        ]
    },


]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>

    </ul>
</template>

<style lang="scss" scoped></style>

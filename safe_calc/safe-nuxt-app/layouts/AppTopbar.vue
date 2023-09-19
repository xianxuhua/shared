<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from './composables/layout';
import { useRouter } from 'vue-router';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const { layoutConfig, onMenuToggle } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});
onBeforeUnmount(() => {
    unbindOutsideClickListener();
});
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};

const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/utilities/documentation');
};

const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };

        document.addEventListener('click', outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;
    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

const confirmPopup = useConfirm();
const toast = useToast();
const confirm = (event) => {
    confirmPopup.require({
        target: event.target,
        message: '确定退出登录?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({
                severity: 'info',
                summary: 'Confirmed',
                detail: '退出登录',
                life: 3000
            });
            let token = useCookie("token");
            token.value = null
            location.href = "/login"
        },

    });
};
</script>

<template>
    <div class="layout-topbar" style="background-image: url('/img/bg_index.jpeg');z-index: 2000">
        <img src="/img/火灾事故.svg" width="30" height="30" alt="">
        <div style="font-size: 1.2rem;color: white">
            区域火灾风险分析评估系统
        </div>
        <div class="layout-topbar-menu" :class="topbarMenuClasses">
                <ConfirmPopup></ConfirmPopup>
                <Toast />
                <i class="pi pi-sign-out" @click="confirm($event)" style="font-size: 1.2rem;color: white"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

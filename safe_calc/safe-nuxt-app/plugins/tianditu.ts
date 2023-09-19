import VueTianditu from "vue-tianditu";

export default defineNuxtPlugin(nuxtApp=> {
    nuxtApp.vueApp.use(VueTianditu, {
        v: "4.0",
    })
})
<script setup>
import { useApiLoader } from "vue-tianditu";
import toast from "~/service/toast";
import {
    activeIndex, ballFirePoint,
    flowingFirePoint, jetFirePoint,
    openedPage,
    poolFirePoint, scenes,
    sealRingPoint,
    selectedSceneType
} from "~/service/state";
import {$ref} from "vue/macros";
import {accsim} from "~/service/proto_gen/accsim/accsim_pb";
import axios from "~/service/axios";
import {accsimUrl} from "~/service/proto_gen/accsim/accsim_url";
import {BD09II2WGS84} from "~/service/map";


definePageMeta({
    keepalive: true
})

const router = useRouter()

let center = $ref([119.950736, 31.689614])
let map
let localsearch
useApiLoader({
    v: "4.0",
    plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
}).then(() => {
    map = new T.Map("mapContainer")
    map.centerAndZoom(new T.LngLat(center[0], center[1]), 18)
    map.addLayer(new T.TileLayer(imageURL, {
        minZoom: 12,
        maxZoom: 18
    }))
    map.setMaxZoom(18)
    // 添加切换地图类型控件
    map.addControl(new T.Control.MapType())
    // 创建搜索对象
    localsearch = new T.LocalSearch(map, {
        pageCapacity: 10,	// 每页显示的数量
        onSearchComplete: localSearchResult	// 接收数据的回调函数
    })
})

let dialogVisible = $ref(false)
// 当前点击的坐标
let selectedLoc = []
const OnMapClick = (e) => {
    if (e.lnglat === undefined) {
        return
    }
    dialogVisible = true
    selectedLoc = [e.lnglat.lng, e.lnglat.lat]
}

let sceneName = $ref("")
const OnSelectSim = () => {
    if (selectedSceneType === undefined) {
        toast.add({ severity: 'warn', summary: '请选择事故场景', detail: '', life: 3000 })
        return
    }
    if (sceneName === "") {
        toast.add({ severity: 'warn', summary: '请输入场景名称', detail: '', life: 3000 })
        return
    }
    dialogVisible = false

    let to = ""
    if (selectedSceneType.value === scenes.poolFire) {
        poolFirePoint.value = {
            name: sceneName,
            location: selectedLoc
        }
        to = "/poolfire"
    } else if (selectedSceneType.value === scenes.flowingFire) {
        flowingFirePoint.value = {
            name: sceneName,
            location: selectedLoc
        }
        to = "/flowingfire"
    } else if (selectedSceneType.value === scenes.sealRing) {
        sealRingPoint.value = {
            name: sceneName,
            location: selectedLoc
        }
        to = "/sealring"
    } else if (selectedSceneType.value === scenes.jetFire) {
        jetFirePoint.value = {
            name: sceneName,
            location: selectedLoc
        }
        to = "/jetfire"
    } else if (selectedSceneType.value === scenes.ballFire) {
        ballFirePoint.value = {
            name: sceneName,
            location: selectedLoc
        }
        to = "/ballfire"
    }

    if (to && openedPage.value.filter(v => v.to===to).length === 0) {
        openedPage.value.push({
            label: selectedSceneType.value,
            to: to,
            icon: ""
        })
    }

    router.push({
        path: to
    })
    if (to) {
        activeIndex.value = openedPage.value.indexOf(openedPage.value.filter(v => v.to===to)[0])
    }
}

let keyword = $ref("")
const onSearch = () => {
    localsearch.search(keyword, 7)
}
let suggestLocations = $ref([])
const localSearchResult = (result) => {
    map.clearOverLays()
    let names = []
    switch (parseInt(result.getResultType())) {
        case 1:  // 局部搜索
            for (let i of result.getPois()) {
                const lnglatArr = i.lonlat.split(" ")
                names.push({name: `${i.name}(${i.address})`, lnglat: lnglatArr})
            }
            break
        case 2:  // 全局搜索
            for (let i of result.getStatistics().priorityCitys) {
                names.push({name: `${i.name}(${keyword})`, lnglat: [i.lon, i.lat]})
            }
            break
    }
    suggestLocations = names
}

const onSuggestSelect = (e) => {
    const lnglat = e.value.lnglat
    const name = e.value.name
    const marker = new T.Marker(new T.LngLat(lnglat[0], lnglat[1]))
    //地图上添加标注点
    map.addOverLay(marker)
    //注册标注点的点击事件
    const markerInfoWin = new T.InfoWindow(name , {autoPan: true})
    marker.addEventListener("click", function () {
        marker.openInfoWindow(markerInfoWin)
    })
    // 地图跳转
    map.setZoom(18)
    map.panTo(new T.LngLat(lnglat[0], lnglat[1]))
}

// 获取企业所有区域
let enterpriseAreaGetRequest = $ref({})
let enterpriseAreaGetResponse = $ref({})
let points = $ref([])


// 获取所有企业信息
let enterprisesGetResponse = $ref({})
axios.post(accsimUrl.EnterprisesGet).then(rep => {
    enterprisesGetResponse = accsim.EnterprisesGetResponse.fromObject(rep.data)
})
let enterpriseGetRequest = $ref({})
let enterpriseGetResponse = $ref({})
const OnSelectEnterprise = () => {
    enterpriseGetRequest.id = enterpriseAreaGetRequest.enterpriseId
    axios.post(accsimUrl.EnterpriseGet, enterpriseGetRequest).then(rep => {
        enterpriseGetResponse = accsim.EnterpriseGetResponse.fromObject(rep.data)
        let new_center = BD09II2WGS84({
            lng: enterpriseGetResponse.enterprise.lng,
            lat: enterpriseGetResponse.enterprise.lat
    })
        center = [new_center.lng, new_center.lat]

        axios.post(accsimUrl.EnterpriseAreaGet, enterpriseAreaGetRequest).then(rep => {
            enterpriseAreaGetResponse = accsim.EnterpriseAreaGetResponse.fromObject(rep.data)
            addOverPolygon(enterpriseAreaGetResponse.points)
        })
    })

}

// 添加覆盖物，跳转到企业位置
const addOverPolygon = (points) => {
    // points: [{name: "", path: [{lng: 123, lat: 123}, ...]}, ...]
    for (let point of points) {
        let drawPoints = []
        for (let lngLat of point.path) {
            let newLngLat = BD09II2WGS84({
                lng: lngLat.lng,
                lat: lngLat.lat
            })
            drawPoints.push(new T.LngLat(newLngLat.lng, newLngLat.lat))
        }
        let newLngLat = BD09II2WGS84({
            lng: point.path[0].lng,
            lat: point.path[0].lat,
        })
        const label = new T.Label({
            text: point.name,
            position: new T.LngLat(newLngLat.lng,newLngLat.lat),
            offset: new T.Point(-9, 0)
        })
        label.setBackgroundColor("#FFFFFF")
        label.setFontColor("#FF0000")
        //创建地图文本对象
        map.addOverLay(label)
        //创建面对象
        const polygon = new T.Polygon(drawPoints,{
            color: "blue", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5
        })
        map.addOverLay(polygon)
    }
    map.setZoom(18)
    let newLngLat = BD09II2WGS84({
        lng: points[0].path[0].lng,
        lat: points[0].path[0].lat,
    })
    map.panTo(new T.LngLat(newLngLat.lng, newLngLat.lat))
}

</script>

<template>
    <div >
        <Dialog v-model:visible="dialogVisible" modal :style="{width: '650px'}" header="选择事故场景">
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-12">
                    <label>事故场景类型</label>
                    <Dropdown v-model="selectedSceneType" :options="[
                            {name: '池火灾后果计算'},
                            {name: '流淌火后果计算'},
                            {name: '密封圈后果计算'},
                            {name: '喷射火后果计算'},
                            {name: '火球火后果计算'},
                        ]" optionLabel="name" optionValue="name" placeholder="Select One"></Dropdown>
                </div>
                <div class="field col-12 md:col-12">
                    <label>场景名称</label>
                    <InputText type="text" v-model="sceneName"/>
                </div>
            </div>
            <template #footer>
                <Button label="取消" icon="pi pi-times" @click="dialogVisible = false" text />
                <Button label="场景模拟" icon="pi pi-check" @click="OnSelectSim" autofocus />
            </template>
        </Dialog>

        <AutoComplete placeholder="缩小地图搜索更大范围" style="position: absolute; right: 60px; top: 280px;z-index: 500;width:200px"
                      v-model="keyword" :suggestions="suggestLocations" optionLabel="name" @complete="onSearch" @item-select="onSuggestSelect"/>
        <div id="mapContainer" @click="map.removeEventListener('click',OnMapClick);map.addEventListener('click', OnMapClick);" style="width: 100%; height: 650px;position: relative"></div>
        <Dropdown v-model="enterpriseAreaGetRequest.enterpriseId" @change="OnSelectEnterprise"
                  :options="enterprisesGetResponse.enterprises" optionLabel="name"
                  optionValue="id" placeholder="选择企业"
                  style="position: absolute; right: 80px; top: 350px;z-index: 500;width:200px"></Dropdown>
    </div>
</template>

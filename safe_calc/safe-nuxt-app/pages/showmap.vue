<template>
  <div >
    <div id="mapContainer" style="width: 100%; height: 650px"></div>
  </div>
</template>

<script setup>
import { useApiLoader } from "vue-tianditu";
import {xfbj, mapmarker} from "~/pages/dangermap";
definePageMeta({
  keepalive: true
})
const props = defineProps({
  sceneName: String,
  locationY: Number,
  locationX: Number,
  fx: String,
  zs: Number,
  qs: Number,
  sw: Number,
  type: Number
})
let lay = new T.TileLayer(imageURL, {
  minZoom: 12,
  maxZoom: 18
})
let firecenter = new T.LngLat(props.locationX.toString(), props.locationY.toString())
var zoom = 17;
var newControl;
//所有圆
var circleall = new Array();
//地图绘制
var lineall = new Array();
let type = 1;

let fx = "北风"
useApiLoader({
  v: "4.0",
  plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
}).then(() => {
  const map = new T.Map("mapContainer");
  map.centerAndZoom(new T.LngLat(117.378000, 38.824803), 17);
  map.addLayer(lay);
  map.enableDrag();
  map.setMaxZoom(17);
  map.panTo(firecenter);
  circleall[0] = new T.Circle(firecenter, 1000, {
    color: "green",
    weight: 5,
    opacity: 0.5,
    fillColor: "red",
    fillOpacity: 0,
    lineStyle: "dashed"
  });
  circleall[1] = new T.Circle(firecenter, 2000, {
    color: "red",
    weight: 5,
    opacity: 0.5,
    fillColor: "red",
    fillOpacity: 0,
    lineStyle: "dashed"
  });
  circleall[2] = new T.Circle(firecenter, 3000, {
    color: "pink",
    weight: 5,
    opacity: 0.5,
    fillColor: "orange",
    fillOpacity: 0,
    lineStyle: "dashed"
  });
  setover(map);

})

function setover(map) {
  for (var i = 0; i < lineall.length; i++) {
    map.addLayer(lineall[i]);
    map.removeLayer(lineall[i]);
  }

  map.closeInfoWindow();
  map.clearOverLays();
  for (var i = 0; i < circleall.length; i++) {
    map.addOverLay(circleall[i]);
  }

  if (type === 2)
    xfbj(firecenter, props.fx, props.qs.toString(), props.zs.toString(), props.sw.toString(), props.sceneName, props.type, map);
  else
    xfbj(firecenter, props.fx, props.qs.toString(), props.zs.toString(), props.sw.toString(), props.sceneName, props.type, map);
  for (var i = 0; i < mapmarker.length; i++) {
    map.removeOverLay(mapmarker[i]);
  }


  //风向按钮
  newControl = new T.Control({position: "topright"});
  newControl.onAdd = function (map) {
    var container = document.createElement("ul");
    //container.style.cssText="width: 80px;"
    var zocsstext = "cursor:pointer;font-size:15px;color:white;background:#0033CC;padding:2px 10px; border-bottom:1px solid #ccc";
    var thiscsstext = "cursor:pointer;font-size:15px;color:white;background:orange;padding:2px 10px; border-bottom:1px solid #ccc";
    this.f1 = createButton("北风", "北风", 'a', container, fx === "北风" ? thiscsstext : zocsstext);
    this.f2 = createButton("东北风", "东北风", 'b', container, fx === "东北风" ? thiscsstext : zocsstext);
    this.f3 = createButton("东风", "东风", 'b', container, fx === "东风" ? thiscsstext : zocsstext);
    this.f4 = createButton("东南风", "东南风", 'b', container, fx === "东南风" ? thiscsstext : zocsstext);
    this.f5 = createButton("南风", "南风", 'b', container, fx === "南风" ? thiscsstext : zocsstext);
    this.f6 = createButton("西南风", "西南风", 'b', container, fx === "西南风" ? thiscsstext : zocsstext);
    this.f7 = createButton("西风", "西风", 'b', container, fx === "西风" ? thiscsstext : zocsstext);
    this.f8 = createButton("西北风", "西北风", 'b', container, fx === "西北风" ? thiscsstext : zocsstext);

    this.f1.onclick = showmap(this.f1, map);
    this.f2.onclick = showmap(this.f2, map);
    this.f3.onclick = showmap(this.f3, map);
    this.f4.onclick = showmap(this.f4, map);
    this.f5.onclick = showmap(this.f5, map);
    this.f6.onclick = showmap(this.f6, map);
    this.f7.onclick = showmap(this.f7, map);
    this.f8.onclick = showmap(this.f8, map);
    return container;
  };

  map.addControl(newControl);
}

const createButton = (html, title, className, container, csstext) => {
  var link = document.createElement("li");
  if (container) {
    container.appendChild(link);
  }

  link.innerHTML = html;
  link.title = title;
  link.style.cssText = csstext;
  return link;
}

//风向显示
const showmap = (that, map) => {
  return () => {
    for (var i = 0; i < lineall.length; i++) {
      map.removeLayer(lineall[i]);
    }

    map.closeInfoWindow();
    map.clearOverLays();
    var fx = that.title;
    map.clearOverLays();
    if (type === 2)
      xfbj(firecenter, fx, props.qs, props.zs, props.sw, props.sceneName, props.type, map);
    else
      xfbj(firecenter, fx, props.qs, props.zs, props.sw, props.sceneName, props.type, map);
    for (let i = 0; i < mapmarker.length; i++) {
      map.removeOverLay(mapmarker[i]);
    }
  }


}
</script>

<style scoped>

</style>
export var  mapmarker=new Array();
var circle=new Array();
var ls=new Array();
var marker,markerInfoWin,lineall;
var labelfx=null,fxdove=null;

//消防布局
export function xfbj(firecenter, cloud, qs, zs, sw, sceneName, firetype, map) {
    if(cloud=="无持续风向")
        cloud="东风";
    mapmarker=new Array();
    lineall=new Array();
    circle=new Array();
    ls=new Array();
    var xfcimg1,xfcimg2;
    var zo=map.getZoom();
    var firemsg;
    var x = firecenter.lng; //油罐中心经度
    var y = firecenter.lat; //油罐中心纬度
    var cloudraid;
    var linex=x + 300 * 0.000011;
    var aqx = x + 200 * 0.000011;
    var xfcx = x + 200 * 0.000011;
    var swx = x + sw * 0.000011;
    var zsx = x + zs * 0.000011;
    var qsx = x + qs * 0.000011;
    var index=70,m,n,m1,n1,zhm=0,zhn=0;
    //火灾信息
    marker = new T.Marker(firecenter);
    if (firetype == 2) {// 适用于油库和炼厂储罐区
        firemsg = "流淌火";
        markerInfoWin = new T.InfoWindow("<p>火灾类型:<b>" + firemsg
            + "</b>|场景名称:<b>" + sceneName + "</b></p><p>死亡面积(m<sup>2</sup>)<b>:" + (sw*sw).toFixed(2)
            + "</b>|重伤面积(m<sup>2</sup>):<b>" + (zs*zs).toFixed(2) + "</b></p><p>轻伤面积(m<sup>2</sup>):<b>" + (qs*qs).toFixed(2)
            + "</b></p>");

    } else if (firetype == 1) {// 适用于油库和炼厂储罐区
        firemsg = "池火灾";
        markerInfoWin = new T.InfoWindow("<p>火灾类型:<b>" + firemsg
            + "</b>|场景名称:<b>" + sceneName + "</b></p><p>死亡半径(m)<b>:" + sw
            + "</b>|重伤半径(m):<b>" + zs + "</b></p><p>轻伤半径(m):<b>" + qs
            + "</b></p>");
    } else if (firetype == 3) {// 适用于油库和炼厂储罐区
        firemsg = "密封圈火";
        markerInfoWin = new T.InfoWindow("<p>火灾类型:<b>" + firemsg
            + "</b>|场景名称:<b>" + sceneName + "</b></p><p>死亡半径(m)<b>:" + sw
            + "</b>|重伤半径(m):<b>" + zs + "</b></p><p>轻伤半径(m):<b>" + qs
            + "</b></p>");

    } else if (firetype == 4) {// 适用于炼厂石化装置区
        firemsg = "喷射火";
        markerInfoWin = new T.InfoWindow("<p>火灾类型:<b>" + firemsg
            + "</b>|场景名称:<b>" + sceneName + "</b></p><p>死亡半径(m)<b>:" + sw
            + "</b>|重伤半径(m):<b>" + zs + "</b></p><p>轻伤半径(m):<b>" + qs
            + "</b></p>");

    } else if (firetype == 5) {  // 火球火
        firemsg = "火球火";
        markerInfoWin = new T.InfoWindow("<p>火灾类型:<b>" + firemsg
            + "</b>|场景名称:<b>" + sceneName + "</b></p><p>死亡半径(m)<b>:" + sw
            + "</b>|重伤半径(m):<b>" + zs + "</b></p><p>轻伤半径(m):<b>" + qs
            + "</b></p>");
    }

    circle=circleinit(firemsg,qs, zs, sw, firecenter);
    var aqraid1, aqraid2, wxraid1, wxraid2,xfraid,zpraid; //反风向角度 风向危险区域角度

    if(cloud == "北风") {
        aqraid1 = 5* Math.PI / 6;
        aqraid2 = Math.PI / 5;
        wxraid1 = 11 * Math.PI / 6;
        wxraid2 = 6 * Math.PI / 5;
        aqx = x + 200 * 0.000011 * 0.96;
        xfcx = x + index * 0.000011 * 0.96;
        zpraid=aqraid2+Math.PI/4;
        xfcimg1="/cfcimg/xfc-3.gif";
        xfcimg2="/cfcimg/xfc3.gif";
        m=m1=50,n=n1=80;
        zhn=-30;
        zhm=60;
    } else if(cloud == "南风") {

        wxraid1 = 5* Math.PI / 6;
        wxraid2 = Math.PI / 5;
        aqraid1 = 11 * Math.PI / 6;
        aqraid2 = 6 * Math.PI / 5;
        aqx = x + 200 * 0.000011 * 0.96;
        xfcx = x + index * 0.000011 * 0.96;
        zpraid=aqraid2+Math.PI/4;
        xfcimg1="/cfcimg/xfc-0.gif";
        xfcimg2="/cfcimg/xfc0.gif";
        m=50,n=50;
        m1=50,n1=50;
        zhn=30;
    } else if(cloud == "东北风") {

        aqraid1 = Math.PI / 2;
        aqraid2 = 0;
        wxraid1 = 3 * Math.PI / 2;
        wxraid2 = Math.PI;
        swx = x + sw * 0.000011 * 0.82;
        zsx = x + zs * 0.000011 * 0.82;
        qsx = x + qs * 0.000011 * 0.82;
        aqx = x + 200 * 0.000011 * 0.82;
        xfcx = x + index * 0.000011 * 0.96;
        zpraid=aqraid2+Math.PI/5;
        xfcimg1="/cfcimg/xfc-3.gif";
        xfcimg2="/cfcimg/xfc-3.gif";
        m=80,n=80,m1=30,n1=30;
    } else if(cloud == "西南风") {

        wxraid1 = Math.PI / 2;
        wxraid2 = 0;
        aqraid1 = 3 * Math.PI / 2;
        aqraid2 = Math.PI;
        swx = x + sw * 0.000011 * 0.82;
        zsx = x + zs * 0.000011 * 0.82;
        qsx = x + qs * 0.000011 * 0.82;
        aqx = x + 200 * 0.000011 * 0.82;
        xfcx = x + index * 0.000011 * 0.82;
        zpraid=aqraid2+Math.PI/5;
        xfcimg1="/cfcimg/xfc-0.gif";
        xfcimg2="/cfcimg/xfc-0.gif";
        m=50,n=60;
        m1=60,n1=80;
    } else if(cloud == "东风") {
        aqraid1 = Math.PI / 4;
        aqraid2 = -Math.PI / 4;
        wxraid1 = 5 * Math.PI / 4;
        wxraid2 = 3 * Math.PI / 4;
        aqx = x + 200 * 0.000011 * 0.9;
        xfcx = x + index * 0.000011 * 0.9;
        zpraid=aqraid2+Math.PI/5;
        xfcimg1="/cfcimg/xfc0.gif";
        xfcimg2="/cfcimg/xfc-3.gif";
        m=60,n=80;
        m1=60,n1=30;
    } else if(cloud == "西风") {

        wxraid1 = Math.PI / 4;
        wxraid2 = -Math.PI / 4;
        aqraid1 = 5 * Math.PI / 4;
        aqraid2 = 3 * Math.PI / 4;
        aqx = x + 200 * 0.000011 * 0.9;
        xfcx = x + index* 0.000011 * 0.9;
        zpraid=aqraid2+Math.PI/5;
        xfcimg1="/cfcimg/xfc3.gif";
        xfcimg2="/cfcimg/xfc-0.gif";
        m=60,n=50;
        m1=60,n1=80;
        zhm=50;
        zhn=60;
    } else if(cloud == "东南风") {
        aqraid1 =0;
        aqraid2 = - Math.PI / 2;
        wxraid1 =Math.PI ;
        wxraid2 = Math.PI / 2;
        aqx = x + 200 * 0.000011 * 1.05;
        xfcx = x + index * 0.000011 * 1.05;
        zpraid=aqraid2+Math.PI/3;
        xfcimg1="/cfcimg/xfc0.gif";
        xfcimg2="/cfcimg/xfc0.gif";
        m=40,n=120;
        m1=90,n1=60;
        zhm=-30;
    } else if(cloud == "西北风") {

        wxraid1 =0;
        wxraid2 = - Math.PI / 2;
        aqraid1 =Math.PI ;
        aqraid2 = Math.PI / 2;
        aqx = x + 200 * 0.000011 * 1.05;
        xfcx = x + index * 0.000011 * 1.05;
        zpraid=aqraid2+Math.PI/3;
        xfcimg1="/cfcimg/xfc3.gif";
        xfcimg2="/cfcimg/xfc3.gif";
        m=60,n=40;
        m1=30,n1=60;
        zhm=30;
    }
    //{icon:new T.Icon({ iconUrl: "/img/fireicon.gif",iconAnchor: new T.Point(50,150)})}

    map.addOverLay(marker);
    marker.addEventListener("click", function() {
        marker.openInfoWindow(markerInfoWin);
    }); // 将标注添加到地图中


    //创建消防车标注对象
    var xfcicon1 = new T.Icon({
        iconUrl: xfcimg1,
        iconSize: new T.Point(100, 100),
        iconAnchor:new T.Point(m, n)

    });
    var xfcicon2 = new T.Icon({
        iconUrl: xfcimg2,
        iconSize: new T.Point(100, 100),
        iconAnchor:new T.Point(m1, n1)
    });
    var  xfmarker1 = new T.Marker(xuanzhuan(x, y, xfcx, y, aqraid2),{icon:xfcicon1,draggable:true});
    var  xfmarker2 = new T.Marker(xuanzhuan(x, y, xfcx, y, aqraid1),{icon:xfcicon2,draggable:true});

    //向地图上添加标注
    mapmarker.push(xfmarker1);
    mapmarker.push(xfmarker2);
    //创建指挥车标注对象
    var zpicon = new T.Icon({
        iconUrl: "/cfcimg/zhc3.png",
        iconSize: new T.Point(60, 50),
        iconAnchor:new T.Point(zhm, zhn)
    });

    var  zpmarker1 = new T.Marker(xuanzhuan(x, y, x + 180 * 0.000011 * 0.82, y, zpraid),{icon:zpicon,draggable:true});
    //向地图上添加标注

    mapmarker.push(zpmarker1);
    var wxqy = new T.Sector(new Array(firecenter, xuanzhuan(x, y, aqx, y, wxraid1), xuanzhuan(x, y, aqx, y, wxraid2)), {
        color: "red",
        weight: 2,
        opacity: 0.5,
        fillColor: 'red',
        fillOpacity: 0.4,
        fill: true
    });
    lineall.push(wxqy);

    var xfqy = new T.Sector(new Array(firecenter, xuanzhuan(x, y, aqx, y, wxraid1+Math.PI), xuanzhuan(x, y, aqx, y, wxraid2+Math.PI)), {
        color: "green",
        weight: 2,
        opacity: 0.5,
        fillColor: 'green',
        fillOpacity: 0.4,
        fill: true
    });
    lineall.push(xfqy);
    //风向箭头绘制

    fxhz(x, y,cloud, map);

//拉伸夹角
    ls.push(new T.Polyline([firecenter,xuanzhuan(x,y,linex,y,aqraid1)]));
    ls.push(new T.Polyline([firecenter,xuanzhuan(x,y,linex,y,aqraid2)]));
    ls.push(new T.Polyline([firecenter,xuanzhuan(x,y,linex,y,wxraid1)]));
    ls.push(new T.Polyline([firecenter,xuanzhuan(x,y,linex,y,wxraid2)]));


    for(var i = 0; i < circle.length; i++) {
        map.addOverLay(circle[i]);
    }

    if(zo>=16)
    {
        for(var i = 0; i < mapmarker.length; i++) {
            map.addOverLay(mapmarker[i]);
        }
    }

    for(var i = 0; i < lineall.length; i++) {
        map.addLayer(lineall[i]);
    }




    for(var i = 0; i < ls.length; i++) {
        ls[i].setColor("red");
        ls[i].setWeight(2);
        ls[i].setLineStyle("dashed");
        map.addLayer(ls[i]);

    }
}

//经纬度旋转
function xuanzhuan(x1, y1, x2, y2, radius) {
    var x0 = (x2 - x1) * Math.cos(radius).toFixed(5) - (y2 - y1) * Math.sin(radius).toFixed(5) + x1;
    var y0 = (x2 - x1) * Math.sin(radius).toFixed(5) + (y2 - y1) * Math.cos(radius).toFixed(5) + y1;
    return new T.LngLat(x0, y0);
}

//获取经纬度
function getcenter(lnglat) {
    alert("经纬度" + lnglat.getLng() + "," + lnglat.getLat());
}

//画正方形
function drawzfx(f,jl){
    var x = f.lng;
    var y = f.lat;
    var bounds = new T.LngLatBounds(new T.LngLat(x+getMoveLng(y,jl/1.5),y+getMoveLat(jl/1.5)),new T.LngLat(x-getMoveLng(y,jl/1.5),y-getMoveLat(jl/1.5)));
    var rect = new T.Rectangle(bounds );
    return rect;
}

function getMoveLat(latMovement) {
    return (180/(Math.PI * 6378137.0))*latMovement;
}

function getMoveLng(lat,lngMovement) {
    return (180/(Math.PI * 6378137.0*Math.cos(lat*Math.PI/180)))*lngMovement;

}

//三个半径初始化
function circleinit(firemsg,qs,zs,sw, firecenter){
    var circle=new Array();
    if(firemsg!="流淌火")
    {


        circle.push(new T.Circle(firecenter, parseFloat(qs)+40, {
            color: "#28ff28",
            weight: 1,
            opacity: 0,
            fillColor: "#28ff28",
            fillOpacity: 0.5,
            lineStyle: "solid"
        }));
        circle.push(new T.Circle(firecenter, parseFloat(zs)+40, {
            color: "orange",
            weight: 1,
            opacity: 0,
            fillColor: "orange",
            fillOpacity: 0.5,
            lineStyle: "solid"
        }));
        circle.push( new T.Circle(firecenter, parseFloat(sw)+40, {
            color: "red",
            weight: 1,
            opacity: 0,
            fillColor: "red",
            fillOpacity: 0.5,
            lineStyle: "solid"
        }));
    }
    else
    {
        circle[0] =drawzfx(firecenter,parseFloat(qs)+40);
        circle[0].setFillColor("#28ff28");
        circle[0].setColor("#28ff28");
        circle[1] =drawzfx(firecenter,parseFloat(zs)+40);
        circle[1].setFillColor("orange");
        circle[1].setColor("orange");
        circle[2] =drawzfx(firecenter,parseFloat(sw)+40);
        circle[2].setFillColor("red");
        circle[2].setColor("red");
    }

    circle.push( new T.Circle(firecenter, 40, {
        color: "red",
        weight: 1,
        opacity: 0,
        fillColor: "red",
        fillOpacity: 1,
        lineStyle: "solid"
    }));

    return circle;

}
//风向绘制
function fxhz(x,y,cloud, map){
    // 风向
    var cloudraid;
    if(labelfx!=null)
        map.removeOverLay(labelfx);
    if(fxdove!=null)
        map.removeLayer(fxdove);
    labelfx = new T.Label({
        text: cloud,
        position: new T.LngLat(x+0.004,y),
        offset: new T.Point(-9, 0)
    });
    //创建地图文本对象
    map.addOverLay(labelfx);

    if(cloud == "北风") {
        cloudraid = -Math.PI / 2;

    } else if(cloud == "南风") {
        cloudraid = Math.PI / 2;

    } else if(cloud == "东北风") {
        cloudraid = -3 * Math.PI / 4;
    } else if(cloud == "西南风") {
        cloudraid = Math.PI / 4;
    } else if(cloud == "东风") {
        cloudraid = Math.PI;


    } else if(cloud == "西风") {
        cloudraid = 0;
    } else if(cloud == "东南风") {
        cloudraid = 19 * Math.PI / 24;
    } else if(cloud == "西北风") {
        cloudraid = -5 * Math.PI / 24;
    }


    fxdove=new T.DoveTailStraightArrow(new Array(new T.LngLat(x+0.004,y), xuanzhuan(x+0.004,y,x+0.0055,y, cloudraid)), {
        color: "#930093",
        weight: 3,
        opacity: 0.8,
        fillColor: '#E800E8',
        fillOpacity: 1,
        fill: true
    });
    map.addLayer(fxdove);
}
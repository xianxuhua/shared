const PI = 3.14159265358979324;


type point = {
    lat: number
    lng: number
}

export const BD09II2WGS84 = (baidu_point: point) => {
    let x_pi = 3.14159265358979324 * 3000.0 / 180.0;
    //百度坐标转成火星坐标
    let mars_point = { lat: 0, lon: 0,};
    let x = baidu_point.lng - 0.0065;
    let y = baidu_point.lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    mars_point.lat = z * Math.sin(theta);
    mars_point.lon = z * Math.cos(theta);

    //把火星坐标GCJ02转地球坐标系WGS84
    let gcjLat =  mars_point.lat;
    let gcjLon = mars_point.lon;
    let d = delta(gcjLat, gcjLon)
    return {
        'lat': ( gcjLat - d.lat ),
        'lng': ( gcjLon - d.lon )
    }

}

const delta = (lat: number, lon: number) => {
    let a = 6378245.0
    let ee = 0.00669342162296594323
    let dLat = transformLat(lon - 105.0, lat - 35.0)
    let dLon = transformLon(lon - 105.0, lat - 35.0)
    let radLat = lat / 180.0 * PI
    let magic = Math.sin(radLat)
    magic = 1 - ee * magic * magic
    let sqrtMagic = Math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI)
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * PI)
    return {
        'lat': dLat,
        'lon': dLon
    }
}

const transformLat = (x: number, y: number) => {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0
    return ret
}

const transformLon = (x: number, y: number) => {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0
    return ret
}
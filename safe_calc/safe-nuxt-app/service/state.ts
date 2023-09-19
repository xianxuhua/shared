type Page = {
    label: string,
    icon: string,
    to: string
}

export let openedPage = useState<Page[]>("openedPage")

openedPage.value = []
openedPage.value.push({
    label: "地理位置",
    to: "/",
    icon: ""
})
// tab activeIndex
export let activeIndex = useState<Number>("activeIndex")

type Point = {
    location: number[],
    name: string
}
export const poolFirePoint = useState<Point>("poolFirePoint")
poolFirePoint.value = {
    location: [0, 0],
    name: ""
}
export const flowingFirePoint = useState<Point>("flowingFirePoint")
flowingFirePoint.value = {
    location: [0, 0],
    name: ""
}
export const sealRingPoint = useState<Point>("sealRingPoint")
sealRingPoint.value = {
    location: [0, 0],
    name: ""
}
export const jetFirePoint = useState<Point>("jetFirePoint")
jetFirePoint.value = {
    location: [0, 0],
    name: ""
}
export const ballFirePoint = useState<Point>("ballFirePoint")
ballFirePoint.value = {
    location: [0, 0],
    name: ""
}
export enum scenes {
    poolFire = "池火灾后果计算",
    flowingFire = "流淌火后果计算",
    sealRing = "密封圈后果计算",
    jetFire = "喷射火后果计算",
    ballFire = "火球火后果计算",
}
export const selectedSceneType = useState<scenes>("selectedSceneType")

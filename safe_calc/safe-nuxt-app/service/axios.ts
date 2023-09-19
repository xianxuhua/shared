import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "service/axios";
import {useRouter} from "#app";
import toast from "./toast"


const API = axios.create({
    baseURL: "http://localhost:8080",
})
API.interceptors.request.use((config: AxiosRequestConfig) => {
    let token = useCookie("token")
    const router = useRouter()
    config.url = config.baseURL! + config.url!
    if (!token.value && !router.currentRoute.value.path.startsWith("/login")) {
        location.href = "/login"
    }
    if (!router.currentRoute.value.path.startsWith("/login")) {
        config.headers!["authorization"] = "Bearer " + token.value
    }
    return config
}, (err: AxiosError) => {
    return Promise.reject(err)
})
let throttle = (fn: () => void, delay: number) => {
    let start_time = 0;
    return () => {
        let now_time=Date.now();
        if (now_time-start_time>delay){
            fn.call(document);
            start_time=now_time;
        }
    }
}
let netWorkFail = throttle(
    () => {
        toast.add({ severity: 'error', summary: '服务器出错！', detail: '', life: 3000 })
    },
    1000
)

let serverError = throttle(
    () => {
        toast.add({ severity: 'error', summary: '服务器出错！', detail: '', life: 3000 })
    },
    1000
)

const getErrMessage = (data: any): string => {
    if (data.message != null) {
        return String(data.message)
    }
    return ""
}

API.interceptors.response.use((config: AxiosResponse) => {
    return config
}, (err: AxiosError) => {
    if (err.response) {
        if (err.response.status === 0){
            netWorkFail()
        } else if (err.response.status >= 500) {
            serverError()
        } else {
            let message = ""
            switch (err.response.status) {
                case 400:
                    message = "请求参数错误"
                    break
                case 401:
                    message = "身份认证失败"
                    break
                case 403:
                    message = "禁止访问"
                    break
                case 404:
                    message = "未找到"
                    break
            }
            if (getErrMessage(err.response.data)) {
                toast.add({ severity: 'error', summary: getErrMessage(err.response.data), detail: '', life: 3000 })
            } else {
                toast.add({ severity: 'error', summary: message, detail: '', life: 3000 })
            }
        }
    }


    return Promise.reject(err)
})


export default API
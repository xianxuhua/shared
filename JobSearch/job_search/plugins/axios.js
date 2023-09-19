import {Notification} from "element-ui";

export default ({$axios, redirect, store ,app: {$cookies}}) => {
  store.commit("setToken", $cookies.get("user") || {token: "", is_enterprise: false, enterprise: 0})
  $axios.onRequest(config => {
    return config
  })

  $axios.onResponse(rep => {
    return rep
  })

  $axios.onError(err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 500: err.message = '服务器错误(500)'; break;
        case 501: err.message = '服务未实现(501)'; break;
        case 502: err.message = '网络错误(502)'; break;
        case 503: err.message = '服务不可用(503)'; break;
        case 504: err.message = '网络超时(504)'; break;
        case 505: err.message = 'HTTP版本不受支持(505)'; break;
      }
      if (err.response.status >= 500) Notification.error(err.message)
    } else {
      err.message = '连接服务器失败!'
      Notification.error(err.message)
    }

    return Promise.reject(err)
  })
}

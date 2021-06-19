import axios from 'axios'
import service from './webApi'
import {
    Toast
} from 'vant'

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000
});
const Http = {};
for (let key in service) {
    let api = service[key];
    Http[key] = async function (params, isFormData, config = {}) {
        let response = null,
            newParams = null;
        if (params && isFormData) {
            for (let key in params) {
                newParams = new FormData();
                newParams.append(key, params[key])
            }
        } else {
            newParams = params
        }
        // 不同请求判断
        // 请求返回
        if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
            try {
                response = await instance[api.method](api.url, newParams, config)
            } catch (e) {
                response = e
            }
        } else if (api.method === 'delete' || api.method === 'get') {
            config.params = newParams;
            try {
                response = await instance[api.method](api.url, config)
            } catch (e) {
                response = e
            }
        }
        return response //返回请求方法的容器
    }
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 发起请求做些什么
    Toast.loading({
        mask: false,
        duration: 0,
        forbidClick: true,
        meessage: '加载中…'
    })
    return config
}, () => {
    // 请求错误
    Toast.clear()
    Toast('请求错误，请求稍后重试')
})

// 相应拦截器
instance.interceptors.response.use(res => {
    // 请求成功
    Toast.clear()
    return res.data
}, () => {
    // 请求失败
    Toast.clear()
    Toast('请求错误，请求稍后重试')
})


export default Http
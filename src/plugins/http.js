import axios from "axios";
import store from "./store.js";
import {config} from "./config.js";


export const HTTP = axios.create({
    baseURL: config('api_base_url'),
});
HTTP.interceptors.request.use(request => {
    const token = store.getVal('auth.token')
    if (token) {
        request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request
})

export const APIs = {
    auth: {
        login: {
            method: 'post',
            url: 'api/auth/login'
        },
        register: {
            method: 'post',
            url: 'api/auth/register'
        },
        logout: {
            method: 'post',
            url: 'api/auth/logout'
        },
    },
    product: {
        list: {
            method: 'get',
            url: 'api/products'
        },
        show: {
            method: 'get',
            url: 'api/products/{id}'
        },
        create: {
            method: 'post',
            url: 'api/products/store'
        },
        delete: {
            method: 'delete',
            url: 'api/products/destroy/{id}'
        },
    }
}
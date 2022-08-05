import axios from "axios";
import store from "./store.js";


// axios.defaults.withCredentials = true;

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// // further down the file...
// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
//     axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }


export const HTTP = axios.create({
    baseURL: `http://localhost:8000/`,
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
        store: {
            method: 'post',
            url: 'api/products/store'
        },
        delete: {
            method: 'delete',
            url: 'api/products/destroy/{id}'
        },
    }
}
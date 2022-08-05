import home from "../pages/home.vue";
import login from "../pages/auth/login.vue";
import register from "../pages/auth/register.vue";

import { createRouter, createWebHistory } from 'vue-router'

export const routes =[
    {
        path: '/',
        name: 'home',
        meta: { requiresAuth: true },
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from,)=>{
    if (to.meta.requiresAuth && !localStorage.getItem('userLogged')) {

        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
    if (to.meta.requiresAuth && localStorage.getItem('userLogged')) {

        return {
            path: '/',
            query: {redirect: to.fullPath}
        }
    }
})


export default router
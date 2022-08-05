import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './plugins/http.js'
import Router from "./plugins/router.js";


createApp(App)
    .use(Router)
    .mount('#app')

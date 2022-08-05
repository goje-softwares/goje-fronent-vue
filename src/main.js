import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './plugins/http.js'
import Router from "./plugins/router.js";
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';



createApp(App)
    .use(Router)
    .use(VueSweetalert2)
    .mount('#app')

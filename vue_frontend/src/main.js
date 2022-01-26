import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import Vue3Material from 'vue3-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


createApp(App).use(router).use(Vue3Material).mount('#app')


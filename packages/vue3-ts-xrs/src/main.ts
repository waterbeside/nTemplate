import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'
import './assets/style/index.scss'

createApp(App).use(router).use(store).mount('#app')


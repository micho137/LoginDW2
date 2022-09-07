import { createApp } from 'vue'
import '../src/style.css'
import App from './App.vue'
import router from '../src/router'

createApp(App).use(router)
.mount('#app')

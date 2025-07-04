import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import './scripts/global.js'

const app = createApp(App)
app.use(router)
app.use(FloatingVue)
app.mount('#app')

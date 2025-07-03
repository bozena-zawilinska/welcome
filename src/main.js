import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './scripts/global.js'

// Add icons to the library
library.add(faArrowUpRightFromSquare)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(FloatingVue)
app.mount('#app')

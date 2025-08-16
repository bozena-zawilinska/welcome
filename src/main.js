import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

// Simple router navigation hook to ensure consistency
router.beforeEach((to, from, next) => {
  next();
});

const app = createApp(App)
app.use(router)
app.use(FloatingVue)
app.mount('#app')

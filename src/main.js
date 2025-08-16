import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

// Customize router behavior for mixed paths
router.beforeEach((to, from, next) => {
  // Only modify root-level paths (/about, /work, /contact) when in production
  if (process.env.NODE_ENV === 'production' && 
      to.path.startsWith('/') && 
      !to.path.startsWith('/welcome/') && 
      ['about', 'work', 'contact'].includes(to.path.split('/')[1])) {
    
    // Keep the path but ensure it's using the direct path structure
    // This ensures links work with both URL formats
    const directPath = to.path;
    next({ path: directPath, replace: true });
  } else {
    next();
  }
});

const app = createApp(App)
app.use(router)
app.use(FloatingVue)
app.mount('#app')

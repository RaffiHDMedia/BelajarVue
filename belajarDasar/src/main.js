import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Import Bootstrap (CSS dan JavaScript)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router) // ✅ Gunakan router
app.mount('#app') // ✅ Pasang aplikasi ke #app

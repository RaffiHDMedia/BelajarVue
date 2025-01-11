import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' // Import CSS Bootstrap
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.use('bootstrap')
app.mount('#app')

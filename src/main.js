import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$x = store
app.mount('#app')

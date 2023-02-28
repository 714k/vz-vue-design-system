import { createApp } from 'vue'
// import plugin from '@714k/vz-vue-design-system'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.use(plugin)
app.use(router)

app.mount('#app')

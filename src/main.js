import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

const Bus = {}
const emitter = new mitt()
Bus.$on = emitter.on
Bus.$off = emitter.off
Bus.$emit = emitter.emit

const app = createApp(App)
app.use(store).use(router).mount('#app')

app.config.globalProperties.$bus = Bus
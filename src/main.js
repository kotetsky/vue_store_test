import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.scss'
import store from '../src/vuex/store'
import router from '../src/router/router'

const app = createApp(App)
app.use(store, router)

app.mount('#app')

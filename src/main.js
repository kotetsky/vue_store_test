import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.scss'
import store from '../src/vuex/store'

const app = createApp(App)

app.mount('#app')
app.use(store)

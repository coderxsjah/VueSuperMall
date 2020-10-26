import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入mitt依赖库，使用事务总线
import mitt from "mitt"

import "assets/css/base.css"

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
//配置事务总线
app.config.globalProperties.$bus = mitt();


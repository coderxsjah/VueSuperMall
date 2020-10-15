import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "assets/css/base.css"

const app = createApp(App).use(store).use(router).mount('#app')
//事务总线
app.prototype.$bus = new Vue();

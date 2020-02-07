import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './assets/scss/layout.scss'

Vue.config.productionTip = true

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
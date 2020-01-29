import App from './App.vue'
import Vue from 'vue'

import './js/common'
import './assets/scss/layout.scss'

new Vue({
    render: h => h(App)
}).$mount('#app');
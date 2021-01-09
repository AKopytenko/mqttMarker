import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import coords from './modules/coords'

export default new Vuex.Store({

    modules: {

        coords
    }
})
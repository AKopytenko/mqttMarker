export default {
    state: {
        coords: {
            name: 'Начальная',
            y: 55.849913,
            x: 37.542815
        }
    },
    actions: {
        addCoords(context, formCoords) {
            context.commit('updateCoords', formCoords[0])
        }
    },
    mutations: {
        updateCoords(state, coords) {
            state.coords = coords
        }
    },
    getters: {
        getCoords(state) {
            return state.coords
        }
    }
}

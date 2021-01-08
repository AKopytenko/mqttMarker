export default {
    state: {
        coords: {
            name: 'Бобр Медведковский',
            y: 55.875645,
            x: 37.654899
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

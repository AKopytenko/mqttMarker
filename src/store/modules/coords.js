export default {
    
    state: {

        coords: {

            name: 'Бобр Медведковский',
            y: 55.875645,
            x: 37.654899
        }
    },

    getters: {
        
        getCoords: state => state.coords
    },

    actions: {

        addCoords({state}, coords) {

            state.coords = coords
        }
    }
}

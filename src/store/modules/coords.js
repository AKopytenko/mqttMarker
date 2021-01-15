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

        async addCoords({ getters }, marker) {

            const broker = getters.getBroker

            if(broker) {

                broker.publish('marker', JSON.stringify(marker))
            }
        },

        updateCoords({state}, marker) {

            state.coords = marker
        }
    }
}

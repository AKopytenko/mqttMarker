import Mqtt from 'mqtt'

export default {
    
    state: {

        broker: {},
        brokerProcess: false,
        brokerMsg: null
    },

    getters: {
        
        getBroker: state => state.broker,
        getBrokerProcess: state => state.brokerProcess,
        getBrokerMsg: state => state.brokerMsg
    },

    actions: {

        async addBroker({dispatch, state}) {

            const broker = await Mqtt.connect('mqtt://test.mosquitto.org:8080')

            broker.on('connect', function() {

                broker.subscribe('marker', function (error) {

                    if (!error) {
                        
                        state.broker = broker
                        state.brokerMsg = { success: true }
    
                    } else {
    
                        state.brokerMsg = { success: false, text: 'Не удалось подписаться на топики MQTT-брокера!' }
                    }
                })
            })

            broker.on('message', function (topic, message) {

                switch(topic) {
                    
                    case 'marker':
                        
                        dispatch('updateCoords', JSON.parse(message.toString()))    
                        break
                }

                broker.end()
                broker.reconnect()
            })
        }
    }
}
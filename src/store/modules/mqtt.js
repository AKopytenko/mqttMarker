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

        async addBroker({getters, dispatch, state}) {

            const broker = await Mqtt.connect('mqtt://test.mosquitto.org:8080')

            broker.on('connect', function() {

                console.log(' MQTT: Соединение установлено ')

                broker.subscribe('marker', function (error) {

                    if (!error) {
    
                        console.log(' MQTT: Подписка на топик [marker] - ОК ')
                        
                        state.broker = broker
                        state.brokerMsg = { success: true }
    
                    } else {

                        console.error(' MQTT: Подписка на топик [marker] - ОК ')
    
                        state.brokerMsg = { success: false, text: 'Не удалось подписаться на топики MQTT-брокера!' }
                    }
                })
            })

            broker.on('message', function (topic, message) {

                console.log(` MQTT: Получен топик [${topic}] - ${message.toString()} `)

                switch(topic) {
                    
                    case 'marker':
                        
                        dispatch('updateCoords', JSON.parse(message.toString()))    
                    
                        console.log('Store: ', state)

                        console.log('State coords: ', state.coords )

                        console.log('Store coords [getter]: ', getters.getCoords)

                        break
                }

                broker.end()
                broker.reconnect()
            })
        }
    }
}
const   mqtt    = require('mqtt'),
        client  = mqtt.connect('mqtt://localhost:8081'),
        topic   = 'TopicTest'
        message = 'Тестовое сообщение'

client.on('connect', () => {
    client.publish(topic, message)
    console.log('ОТПРАВЛЕНО\n', message)
})
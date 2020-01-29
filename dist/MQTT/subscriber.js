let mqtt = require('mqtt'),
    client = mqtt.connect('mqtt://localhost:8081'),
    topic = 'TopicTest'

client.on('message', (topic, message) => {
    message = message.toString()
    console.log(message)
});

client.on('connect', () => {
    client.subscribe(topic)
});
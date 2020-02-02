<template>
    <div class="mqttMarker">
        <MqttMarkerMap :coordsForm="coordsForm" />
        <MqttMarkerForm @sendMarkerData="processSendMarkerData" />
    </div>
</template>

<script>

import Mqtt             from 'mqtt'
import MqttMarkerMap    from './MqttMarkerMap.vue'
import MqttMarkerForm   from './MqttMarkerForm.vue'

let broker = Mqtt.connect('mqtt://test.mosquitto.org:8080')
broker.on('connect', function () {
    broker.subscribe('marker')
})

export default {
    name: 'MqttMarker',
    components: {
        MqttMarkerMap,
        MqttMarkerForm
    },
    data() {
        return {
            coordsForm: {
                name: 'Начальная',
                y: 55.849913,
                x: 37.542815,
            }
        }
    },
    methods: {
        processSendMarkerData(data) {
            let coordsForm = this.coordsForm;
            broker.publish('marker', JSON.stringify(data))
            broker.on('message', function (topic, message) {
                let coordsMqtt = JSON.parse( message.toString() )

                coordsForm.name   = coordsMqtt.name;
                coordsForm.x      = coordsMqtt.x;
                coordsForm.y      = coordsMqtt.y;
            })
        }
    }
}
</script>

<style lang="scss">
.mqttMarker {
    background: #f0f0f0;
}

@media (min-width: 1200px) {
    .container-fluid {
        max-width: 1140px;
    }
}
</style>
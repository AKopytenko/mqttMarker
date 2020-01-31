<template>
    <div class="mqttMarker">
        <MqttMarkerMap 
            :coordsForm="coordsForm"
        />
        <MqttMarkerForm 
            @sendMarkerData="processSendMarkerData"
        />
    </div>
</template>

<script>

import MqttMarkerMap    from './MqttMarkerMap.vue'
import MqttMarkerForm   from './MqttMarkerForm.vue'

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
            this.coordsForm.name   = data.name;
            this.coordsForm.x      = data.x;
            this.coordsForm.y      = data.y;
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
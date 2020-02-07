<template>
    <div class="mqttMarker">
        <MqttMarkerMap :coordsForm="getCoords" />
        <MqttMarkerForm />
    </div>
</template>

<script>

import {mapGetters}     from 'vuex'
import MqttMarkerMap    from './MqttMarkerMap.vue'
import MqttMarkerForm   from './MqttMarkerForm.vue'

export default {
    name: 'MqttMarker',
    components: {
        MqttMarkerMap,
        MqttMarkerForm
    },
    computed: 
        mapGetters(['getCoords'])
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
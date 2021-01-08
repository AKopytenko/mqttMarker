<template>
    <div class="mqttMarker">

        <MqttMarkerMap :coordsForm="getCoords" />

        <MqttMarkerForm />
        
    </div>
</template>

<script>

import { mapGetters }     from 'vuex'
import MqttMarkerMap    from './MqttMarkerMap'
import MqttMarkerForm   from './MqttMarkerForm'

export default {

    name: 'MqttMarker',

    components: {

        MqttMarkerMap,
        MqttMarkerForm
    },

    computed: {
        
        ...mapGetters([
            
            'getCoords'
        ])
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/layout.scss';
</style>
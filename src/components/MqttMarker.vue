<template>
    <div class="mqttMarker">
        <MqttMarkerMap />
        <MqttMarkerForm />
    </div>
</template>

<script>

import { mapActions }  from 'vuex'
import MqttMarkerMap   from '@/components/MqttMarkerMap'
import MqttMarkerForm  from '@/components/MqttMarkerForm'

export default {

    name: 'MqttMarker',

    components: {

        MqttMarkerMap,
        MqttMarkerForm
    },

    methods: {

        ...mapActions([

            'addBroker'
        ])
    },

    created() {

        this.addBroker()
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/layout.scss';
</style>
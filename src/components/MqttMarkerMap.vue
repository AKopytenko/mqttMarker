<template>
    <div class="mqttMarkerMap mapFiddle">
        <div class="mapFiddle">
            <div id="mqttMarkerMap_yandex" class="mapFiddle__wrapper">
                <!--yandex-map :settings="settings"></yandex-map-->
            </div>
        </div>
    </div>
</template>

<script>

//import { loadYmap, yandexMap, ymapMarker } from 'vue-yandex-maps'

// const settings = {
//     apiKey: '01f61c8f-de12-42a5-b23f-111c211500a9',
//     lang: 'ru_RU',
//     coordorder: 'latlong',
//     version: '2.1',
//     coords: [55.7, 37.6]
// }

export default {
    name: 'MqttMarkerMap',
    props: {
        //settings
    },
    components: {
        //yandexMap, 
        //ymapMarker
    },
    computed: {},
    methods: {},
    watch: {},
    data() {
        return {}
    },
    mounted() {
        //loadYmap({ ...settings, debug: true });
    }
}

// Yandex.maps API key: 01f61c8f-de12-42a5-b23f-111c211500a9

</script>

<style lang="scss">

</style>
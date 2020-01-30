<template>
    <div class="mqttMarkerMap mapFiddle">
        <div id="mqttMarkerMap_yandex" class="mapFiddle__wrapper">
            <yandex-map 
                :settings="settings" 
                :coords="coords"
                :zoom="15"
                :controls="controls"
            >
                <ymap-marker 
                    :coords="coords" 
                    marker-id="1" 
                    hint-content="Странный дом" 
                />
            </yandex-map>
        </div>
    </div>
</template>

<script>

import { loadYmap, yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    name: 'MqttMarkerMap',
    props: {},
    components: {
        yandexMap, 
        ymapMarker
    },
    computed: {},
    methods: {},
    watch: {},
    data() {
        return {
            settings: {
                apiKey: '01f61c8f-de12-42a5-b23f-111c211500a9',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1',
                controls: ['zoomControl']
            },
            coords: [
                55.849913, 37.542815
            ],
            controls: ['zoomControl']
        }
    },
    mounted() {}
}

</script>

<style lang="scss">
.mapFiddle {
    width: 50%;
    height: 100%;

    .ymap-container {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 576px) {
        width: 100%;
        height: 50%;
    }

    &__wrapper {
        width: 100%;
        height: 100%;
    }
}
</style>
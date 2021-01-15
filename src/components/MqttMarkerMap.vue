<template>
    <div class="mqttMarkerMap mapFiddle">
        <div id="mqttMarkerMap_yandex" class="mapFiddle__wrapper">
            <yandexMap 
                :settings="settings" 
                :coords="[getCoords.y, getCoords.x]"
                :zoom="15"
                :controls="controls"
            >
                <ymapMarker 
                    :coords="[getCoords.y, getCoords.x]" 
                    marker-id="1" 
                    :hint-content="getCoords.name"
                />
            </yandexMap>
        </div>
    </div>
</template>

<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { mapGetters } from 'vuex'

export default {

    name: 'MqttMarkerMap',

    data() {

        return {

            settings: {

                apiKey: '',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1',
                controls: ['zoomControl']
            },

            controls: ['zoomControl']
        }
    },

    components: {

        yandexMap, 
        ymapMarker
    },

    computed: {

        ...mapGetters([

            'getCoords'
        ])
    }
}

</script>

<style lang="scss">
@import '@/assets/styles/components/mqttMarkerMap.scss';
</style>
<template>
    <div class="mqttMarkerMap mapFiddle">
        <div id="mqttMarkerMap_yandex" class="mapFiddle__wrapper">
            <yandex-map 
                :settings="settings" 
                :coords="[coordsForm.x, coordsForm.y]"
                :zoom="15"
                :controls="controls"
            >
                <ymap-marker 
                    :coords="[coordsForm.x, coordsForm.y]" 
                    marker-id="1" 
                    :hint-content="coordsForm.name"
                />
            </yandex-map>
        </div>
    </div>
</template>

<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    name: 'MqttMarkerMap',
    props: {
        coordsForm: Object
    },
    components: {
        yandexMap, 
        ymapMarker
    },
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
                this.coordsForm.x, this.coordsForm.y
            ],
            controls: ['zoomControl']
        }
    }
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
<template>

    <div class="mqttMarkerForm mapControl">

        <h1 class="mapControl__header">Управление метками</h1>

        <form action="/" class="mapControl__form" @submit.prevent="sendCoordsForm($event.target.elements)">
            
            <div class="mapControl__formGroup">

                <label for="markerName" class="mapControl__formLabel">Название метки</label>

                <input required class="mapControl__formInput" type="text" 
                    id="markerName"
                    min="3" 
                    max="75" 
                    :class="{ 'invalid': 'markerName' in this.invalidFields }"
                >

                <span class="mapControl__formInputDescr">3-75 знаков. Буквы, цифры, пробелы, символы "- _ , ."</span>

            </div>

            <div class="mapControl__formGroup">

                <label for="markerY" class="mapControl__formLabel">Широта</label>

                <input required class="mapControl__formInput" type="text" 
                    id="markerY"
                    min="2" 
                    max="10" 
                    :class="{ 'invalid': 'markerY' in this.invalidFields }"
                >

                <span class="mapControl__formInputDescr">Формат: 000.000000</span>

            </div>

            <div class="mapControl__formGroup">

                <label for="markerX" class="mapControl__formLabel">Долгота</label>

                <input required class="mapControl__formInput" type="text" 
                    id="markerX"
                    min="2" 
                    max="10" 
                    :class="{ 'invalid': 'markerX' in this.invalidFields }"
                >

                <span class="mapControl__formInputDescr">Формат: 000.000000</span>

            </div>

            <div class="mapControl__formGroup">
                <button
                    class="mapControl__formSubmit"
                    type="submit"
                >
                    Послать
                </button>
            </div>
            
        </form>

    </div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

    name: 'MqttMarkerForm', 

    data() {

        return {

            invalidFields: {},
            invalidForm: false
        }
    },

    methods: {

        ...mapActions([

            'addCoords'
        ]),

        sendCoordsForm(fields) {

            const self  = this

            const name  = fields.markerName.value
            const x     = fields.markerX.value
            const y     = fields.markerY.value

            let data = {}

            self.invalidFields = {}

            if( /^[A-Za-zА-Яа-я\d\s\\.\\,-_]{3,75}$/.test(name) ) {
                data.name = name
            } else {
                self.invalidFields.markerName = true
                self.invalidForm = true
            }

            if( /^[-?\d]{1,3}\.\d{1,8}$/.test(x) && x <= 180 && x >= -180 ) {
                data.x = x
            } else {
                self.invalidFields.markerX = true
                self.invalidForm = true
            }

            if( /^[-?\d]{1,3}\.\d{1,8}$/.test(y) && y <= 85.08171 && y >= -85.08266 ) {
                data.y = y
            } else {
                self.invalidFields.markerY = true
                self.invalidForm = true
            }

            if( !self.invalidForm ) {

                this.addCoords(data)
            }
        }
    },

    computed: {

        ...mapGetters([

            'getCoords'
        ])
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/mqttMarkerForm.scss';
</style>
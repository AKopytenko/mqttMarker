<template>
    <div class="mqttMarkerForm mapControl">
        <h1 class="mapControl__header">Управление метками</h1>
        <form action="/" class="mapControl__form">
            
            <formInput 
                label="Название метки" 
                inputId="markerName" 
                min="3" 
                max="75" 
                descr='3-75 знаков. Буквы, цифры, пробелы, символы "- _ , ."' 
                @validInput="processValidInput" 
            />

            <formInput 
                label="Широта" 
                inputId="markerY" 
                min="2" 
                max="10" 
                descr="Формат: 000.000000" 
                @validInput="processValidInput" 
            />
            
            <formInput 
                label="Долгота" 
                inputId="markerX" 
                min="2" 
                max="10" 
                descr="Формат: 000.000000" 
                @validInput="processValidInput" 
            />

            <div class="mapControl__formGroup">
                <a 
                    href="#"
                    class="mapControl__formSubmit"
                    :class="{ unable: !validForm }"
                    @click.prevent="sendMarkerData()"
                >Послать</a>
            </div>
            
        </form>
    </div>
</template>

<script>

import Mqtt             from 'mqtt'
import FormInput        from '@/components/input/FormInput' 

let broker = Mqtt.connect('mqtt://test.mosquitto.org:8080')
broker.on('connect', function () {
    broker.subscribe('marker')
})

let formFields = new Map();
    formFields.set('markerName', false);
    formFields.set('markerX', false);
    formFields.set('markerY', false);

export default {
    name: 'MqttMarkerForm', 
    props: {},
    components: {
        FormInput
    },
    data() {
        return {
            validForm: false
        }
    },
    methods: {
        processValidInput(result) {
            if(result.status) {
                formFields.set(result.input, result.value);
            } else {
                formFields.set(result.input, false);
            }
            
            if(formFields.get('markerName') && formFields.get('markerX') && formFields.get('markerY')) {
                this.validForm = true;
            } else {
                this.validForm = false;
            }
        },
        sendMarkerData(data) {

            let $this = this

            if(this.validForm) {

                broker.publish('marker', data)

                broker.on('message', function () {

                    $this.$store.dispatch('addCoords', [
                        {
                            name: formFields.get('markerName'),
                            y: formFields.get('markerY'),
                            x: formFields.get('markerX')
                        }
                    ])
                })

            } else {

                console.log('Ошибка: Форма заполнена некорректно')
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/components/mqttMarkerForm.scss';
</style>
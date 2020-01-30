<template>
    <div class="mqttMarkerForm mapControl">
        <h1 class="mapControl__header">Управление метками</h1>
        <form action="/" class="mapControl__form">
            
            <formInput label="Название метки" inputId="pointName" min="3" max="75" descr="3-75 знаков. Буквы, цифры, пробелы, символы '- , .'" />
            <formInput label="Широта" inputId="pointX" min="2" max="10" descr="Формат: 000.000000" />
            <formInput label="Долгота" inputId="pointY" min="2" max="10" descr="Формат: 000.000000" />

            <div class="mapControl__formGroup">
                <input type="submit" value="Послать" class="mapControl__formSubmit">
            </div>
            
        </form>
    </div>
</template>

<script>

import formInput from './input/formInput.vue' 

export default {
    name: 'MqttMarkerForm', 
    props: {},
    components: {
        formInput
    },
    computed: {},
    data() {
        return {}
    },
    methods: {},
    watch: {},
    mounted() {}
}
</script>

<style lang="scss">

</style>
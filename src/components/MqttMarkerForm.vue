<template>
    <div class="mqttMarkerForm mapControl">
        <h1 class="mapControl__header">Управление метками</h1>
        <form action="" class="mapControl__form">
            <div class="mapControl__formGroup">
                <label for="pointName" class="mapControl__formLabel">Название</label>
                <input type="text" minlength="3" maxlength="75" id="pointName" required class="mapControl__formInput">
                <span class="mapControl__formInputDescr">3-75 знаков. Буквы, цифры, пробелы, символы "- , ."</span>
            </div>
            <div class="mapControl__formGroup">
                <label for="pointX" class="mapControl__formLabel">Широта</label>
                <input type="text" minlength="1" maxlength="11" id="pointX" required class="mapControl__formInput">
                <span class="mapControl__formInputDescr">Формат: 000.000000</span>
            </div>
            <div class="mapControl__formGroup">
                <label for="pointY" class="mapControl__formLabel">Долгота</label>
                <input type="text" minlength="1" maxlength="11" id="pointY" required class="mapControl__formInput">
                <span class="mapControl__formInputDescr">Формат: 000.000000</span>
            </div>
            <div class="mapControl__formGroup">
                <input type="submit" value="Послать" class="mapControl__formSubmit">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'MqttMarkerForm',
    props: {},
    computed: {},
    methods: {},
    watch: {},
    data() {
        return {}
    },
    mounted() {}
}
</script>

<style lang="scss">

</style>
<template>
    <div class="mqttMarkerForm mapControl">
        <h1 class="mapControl__header">Управление метками</h1>
        <form action="/" class="mapControl__form">
            
            <formInput 
                label="Название метки" 
                inputId="pointName" 
                min="3" 
                max="75" 
                descr="3-75 знаков. Буквы, цифры, пробелы, символы '- , .'" 
                @validInput="processValidInput" 
            />

            <formInput 
                label="Широта" 
                inputId="pointX" 
                min="2" 
                max="10" 
                descr="Формат: 000.000000" 
                @validInput="processValidInput" 
            />
            
            <formInput 
                label="Долгота" 
                inputId="pointY" 
                min="2" 
                max="10" 
                descr="Формат: 000.000000" 
                @validInput="processValidInput" 
            />

            <div class="mapControl__formGroup">
                <input 
                    type="submit" 
                    value="Послать" 
                    class="mapControl__formSubmit"
                    :class="{ unable: !formValid }"
                    @click="sendMarker()"
                >
            </div>
            
        </form>
    </div>
</template>

<script>

import formInput from './input/formInput.vue' 

let formFields = new Map();
formFields.set('pointName', false);
formFields.set('pointX', false);
formFields.set('pointY', false);

export default {
    name: 'MqttMarkerForm', 
    props: {},
    components: {
        formInput
    },
    computed: {},
    data() {
        return {
            formValid: false
        }
    },
    methods: {
        processValidInput(result) {
            if(result.status) {
                formFields.set(result.input, true);
            } else {
                formFields.set(result.input, false);
            }

            console.log(formFields.pointName);
            
            if(formFields.get('pointName') && formFields.get('pointX') && formFields.get('pointY')) {
                this.formValid = true;
            } else {
                this.formValid = false;
            }
        },
        sendMarker() {
            if(this.formValid) {
                console.log('Marker send: OK')
            } else {
                console.log('Marker send: FAIL')
            }
        }
    },
    watch: {},
    mounted() {}
}
</script>

<style lang="scss">
.mapControl {
    width: 50%;
    height: 100%;
    background-color: #34495e;
    box-sizing: border-box;
    padding: 50px;
    z-index: 1;
    box-shadow: 0 0 50px rgba(0,0,0,0.8);

    @media (min-width: 576px) and (max-width: 992px) {
        padding: 30px;
    }

    @media (max-width: 576px) {
        width: 100%;
        height: auto;
        padding: 20px;
    }

    &__header {
        color: #f0f0f0;
        font-size: 36px;
        margin: 0 0 5vh;

        @media (min-width: 576px) and (max-width: 992px) {
            font-size: 30px;
        }

        @media (min-width: 768px) and (max-width: 992px) {
            font-size: 30px;
            margin: 0 0 20px;
        }

        @media (max-width: 576px) {
            font-size: 24px;
            margin: 0 0 20px;
        }
    }

    &__form {

        &Group {
            margin: 0 0 5vh;

            @media (max-width: 576px) {
                margin: 0 0 20px;
            }
        }

        &Label {
            color: #f0f0f0;
            display: block;
            margin: 0 0 8px;
            font-size: 18px;
            font-weight: 200;
            line-height: 1;

            @media (max-width: 576px) {
                font-size: 16px;
            }
        }

        &Input {
            width: 100%;
            box-sizing: border-box;
            padding: 1vmin;
            font-size: calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px);
            line-height: 1;
            border: 1px solid #213b56;

            &.invalid {
                border-color: #ff0000;
                color: #ff0000;
            }
            
            &Descr {
                color: #8fa0b2;
                font-size: 14px;
            }

            @media (max-width: 576px) {
                height: 40px;
                padding: 8px;
                font-size: 16px;
            }
        }

        &Submit {
            background: #369;
            border: 0;
            font-size: calc((100vw - 480px)/ (1280 - 480) * (24 - 16) + 12px);
            color: #f0f0f0;
            min-width: 100px;
            line-height: 1;
            width: 25%;
            padding: 2vmin;
            cursor: pointer;

            &.unable {
                background: #34495e;
                border: 1px solid #369;
                cursor: default;
                outline: none;
            }

            @media (max-width: 576px) {
                height: 40px;
                padding: 8px;
                font-size: 16px;
            }
        }
    }
}
</style>
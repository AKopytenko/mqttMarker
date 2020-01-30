<template>
    <div class="mapControl__formGroup">
        <label :for="inputId" class="mapControl__formLabel">{{ label }}</label>
        <input required class="mapControl__formInput" type="text" 
            :id=inputId
            :minlength=min
            :maxlength=max
            v-model=val
            @focusout="inputCoords()"
            :class="{ invalid: !inputValid }"
        >
        <span class="mapControl__formInputDescr">{{ descr }}</span>
    </div>
</template>

<script>
export default {
    name: 'inputCoords',
    props: [
        'label',
        'inputId',
        'min',
        'max',
        'descr'
    ],
    methods: {
        inputCoords: function() {
            let inputVal = this.val
            this.inputValid = true
            if(this.inputId !== 'pointName') {
                ( /^-?\d{1,3}\.\d{1,8}$/.test(inputVal) && inputVal <= 180 && inputVal >= -180) ? this.inputValid = true : this.inputValid = false
            } else {
                ( /^[A-Za-zА-Яа-я\d\s\.\,]{3,75}$/.test(inputVal) ) ? this.inputValid = true : this.inputValid = false
            }
            this.$emit('validInput', {
                input: this.inputId,
                status: this.inputValid
            })
        }
    },
    data() {
        return {
            val: '',
            inputValid: true
        }
    }
}
</script>
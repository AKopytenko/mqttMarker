<template>
    <div class="mapControl__formGroup">
        <label :for="inputId" class="mapControl__formLabel">{{ label }}</label>
        <input required class="mapControl__formInput" type="text" 
            :id=inputId
            :minlength=min
            :maxlength=max
            v-model=val
            @input="inputCoords()"
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
            let inputVal = this.val;

            if(inputVal.length) {
                if(this.inputId !== 'pointName') {
                    if( /^-?\d{1,3}\.\d{0,6}$/.test(inputVal) && inputVal <= 180 && inputVal >= -180 ) {
                        console.log('OK: Coords'); 
                        return true;
                    } else {
                        console.log('FAIL: Coords'); 
                        return false;
                    }
                } else {
                    if( /^[A-Za-zА-Яа-я\d\s\.]{3,75}$/.test(inputVal) ) {
                        console.log('OK: String'); 
                        return true;
                    } else {
                        console.log('FAIL: String'); 
                        return false;
                    }
                }

                if( inputVal >= -180 ) {
                    console.log('OK 3'); 
                } else {
                    console.log('FAIL'); 
                    return false;
                }

                
            }
        }
    },
    data() {
        return {
            val: ''
        }
    }
}
</script>

<style>

</style>
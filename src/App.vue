<template>
  <div id="app">
    <MqttMarker />
  </div>
</template>

<script>

import MqttMarker from './components/MqttMarker.vue'

export default {
  name: 'app',
  components: {
    MqttMarker
  }
}
</script>
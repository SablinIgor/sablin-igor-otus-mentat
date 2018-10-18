<template>
  <div class="settings">
    <Stats
            daysCounter="10"
            v-bind:wins="{ x: '20', y: '100'}"
            accuracy="80"
    />
    <CalculationType />
    <Complexity />
    <PlayTime />
  </div>
</template>

<script>

import CalculationType from '../components/CalculationType'
import Complexity from '../components/Complexity'
import PlayTime from '../components/PlayTime'
import Stats from '../components/Stats'

export default {
  name: 'settings',

  components: {
    Stats,
    CalculationType,
    Complexity,
    PlayTime
  }
}
</script>
<style scoped>
  .settings {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/config.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>

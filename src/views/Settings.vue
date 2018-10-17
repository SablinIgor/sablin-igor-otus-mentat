<template>
  <div class="settings">
    <h1>This is an settings page</h1>
    <CalculationType />
    <Complexity />
  </div>
</template>

<script>

import CalculationType from '../components/CalculationType'
import Complexity from '../components/Complexity'

export default {
  name: 'settings',

  components: {
    CalculationType,
    Complexity
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

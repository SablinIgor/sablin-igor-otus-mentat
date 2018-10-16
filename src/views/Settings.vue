<template>
  <div class="settings">
    <h1>This is an settings page</h1>
    <calculationType></calculationType>
  </div>
</template>

<script>

import calculationType from '../components/calculationType'

export default {
  name: 'settings',

  components: {
    calculationType
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

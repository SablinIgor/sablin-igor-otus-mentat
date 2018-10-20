<template>
<div id="stats">
    <h2>Statistics</h2>
    <p>Days in game: {{ daysCounter }}</p>
    <p>Positive: {{ wins.x }} from {{ wins.y }}</p>
    <p>Total accuracy: {{ accuracy }}%</p>
</div>
</template>

<script>
export default {
  name: 'Stats',
  props: ['daysCounter', 'wins', 'accuracy']
}
</script>

<style scoped>
    #stats {
        color: white;
    }
</style>

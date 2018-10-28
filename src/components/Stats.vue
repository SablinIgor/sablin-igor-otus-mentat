<template>
<div id="stats">
    <h2>Statistics</h2>
    <p>Days in game: {{ daysCounter }}</p>
    <p>Last game: {{ counter.wins }} from {{ counter.total }}</p>
    <p>Total accuracy: {{ accuracy }}%</p>
</div>
</template>

<script>
export default {
  name: 'Stats',
  props: ['daysCounter', 'counter', 'accuracy']
}
</script>

<style scoped>
    #stats {
        color: white;
    }
</style>

<template>
<div>
    <h2>Статистика</h2>
    <p>Тренировочный день: {{ daysCounter }}</p>
    <p>Решено: {{ wins.x }} из {{ wins.y }}</p>
    <p>Общая точность: {{ accuracy }}%</p>
</div>
</template>

<script>
export default {
  name: 'Stats',
  props: ['daysCounter', 'wins', 'accuracy']
}
</script>

<style scoped>
    * {
        color: white;
    }
</style>

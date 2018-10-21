<template>
    <div class="container">
        <div class=""><span class="md_font">Task: {{ currenttask }} to {{ alltask }}</span></div>
        <div><span class="md_font">Time: {{ timetoplay }}</span></div>
    </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: ['currenttask', 'alltask', 'timetoplay']
}
</script>

<style scoped>
    * {
        color: white;
    }

    .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 700px;
    }
</style>

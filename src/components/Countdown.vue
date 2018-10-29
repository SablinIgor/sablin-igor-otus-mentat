<template>
    <div class="container">
        <div class=""><span class="md_font">Task: {{ currenttask }} to {{ alltask }}</span></div>
        <div><span class="md_font">Time: {{ now }}</span></div>
    </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: ['currenttask', 'alltask', 'timetoplay', 'startTimer', 'timeout'],
  data: function () {
    return {
      now: 0,
      interval: '',
      playTime: 0
    }
  },

  watch: {
    startTimer () {
      if (this.startTimer === true) {
        this.now = this.timetoplay

        this.interval = setInterval(() => {
          this.timerCount()
        }, 1000)
      }
    }
  },

  methods: {
    timerCount () {
      this.now--

      if (this.now === 0) {
        clearInterval(this.interval)
        this.timeout()
      }
    }
  }
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

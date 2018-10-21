<template>
  <div class="play">
    <Countdown
            currenttask="1"
            alltask="100"
            timetoplay="10"
    />
    <PseudoCalc
            task="99^3="
            expectedresult="970299"
    />
  </div>
</template>

<script>

import PseudoCalc from '../components/PseudoCalc'
import Countdown from '../components/Countdown'

export default {
  name: 'play',

  components: {
    PseudoCalc,
    Countdown
  }
}
</script>
<style scoped>
  .play {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/play.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>

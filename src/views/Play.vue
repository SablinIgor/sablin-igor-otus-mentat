<template>
  <div class="play">
    <Countdown
            currenttask="1"
            alltask="100"
            :timetoplay="currentTimeLimit"
            :startTimer="isGameStarted"
            :timeout="timeout"
    />
    <PseudoCalc
            task="99^3="
            expectedresult="970299"
    />
    <b-modal ref="myModalRef" hide-footer title="Failed!" v-model="showModal">
      <div class="d-block text-center">
        <h2>Timeout! Game over!!!</h2>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-btn>
    </b-modal>
  </div>
</template>

<script>

import PseudoCalc from '../components/PseudoCalc'
import Countdown from '../components/Countdown'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'play',

  components: {
    PseudoCalc,
    Countdown
  },

  data: function () {
    return {
      currentTimeLimit: 0,
      complexity: 0,
      playTime: 0,
      isGameStarted: false,
      showModal: false
    }
  },
  watch: {
    showModal: function (newVal, oldVal) {
      if (newVal === false) { this.hideModal() }
    }
  },
  computed: {
    ...mapGetters(
      {
        get_type_of_calcutation: 'TYPE_OF_CALCULATION',
        get_complexity: 'COMPLEXITY',
        get_time_to_play: 'TIME_TO_PLAY'
      }
    )
  },

  methods: {
    init: function () {
      this.currentTimeLimit = this.get_time_to_play * 60
    },
    start: function () {
      this.isGameStarted = true
    },
    timeout: function () {
      console.log('timeout')
      this.isGameStarted = false
      this.$refs.myModalRef.show()
    },
    check: function () {
      ;
    },
    newTurn: function () {
      ;
    },
    endGame: function () {
      ;
    },
    hideModal: function () {
      this.$refs.myModalRef.hide()
      this.$router.push({ path: '/' })
    }
  },

  mounted () {
    console.log('mounted play')
    this.init()
    this.start()
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

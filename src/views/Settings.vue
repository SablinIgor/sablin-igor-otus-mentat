<template>
  <div class="settings">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <Stats
                    daysCounter="10"
                    v-bind:wins="{ x: '20', y: '100'}"
                    accuracy="80"
            />
          </b-col>
          <b-col>
            <CalculationType @receiveCalculationType="setCalculationType" />
          </b-col>
        </b-row>
        <b-row>
          <b-col/>
          <b-col>
            <Complexity @receiveSetComplexity="setComplexity" />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <b-button :disabled="isReadyToPlay" size="lg" variant="primary">Let's play!</b-button>
          </b-col>
          <b-col>
            <PlayTime @receivePlayTime="setPlayTime"/>
          </b-col>
        </b-row>
    </b-container>
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
  },

  data: function () {
    return {
      calculation: [],
      complexity: 0,
      playTime: 0
    }
  },

  computed: {
    isReadyToPlay: function () {
      console.log('complexity')
      console.log(this.complexity)
      if (this.calculation.length === 0 ||
        this.complexity === 0 ||
        this.playTime === 0) {
        return 'disabled'
      }

      return null
    }
  },

  methods: {
    setCalculationType (value) {
      this.calculation = value
    },
    setComplexity (value) {
      this.complexity = parseInt(value)
    },
    setPlayTime (value) {
      this.playTime = parseInt(value)
    }
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

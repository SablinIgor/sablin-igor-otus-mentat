<template>
  <div class="settings">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <Stats
                    v-bind:daysCounter="statistics.daysInGame.total"
                    v-bind:counter="statistics.lastResult"
                    v-bind:accuracy="statistics.totalAccuracy"
            />
          </b-col>
          <b-col>
            <CalculationType
                    :checkedCategories="get_type_of_calcutation"
                    @receiveCalculationType="setCalculationType"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col/>
          <b-col>
            <Complexity
                    :initialValue="get_complexity"
                    @receiveSetComplexity="setComplexity"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <b-button
                    :disabled="isReadyToPlay"
                    size="lg"
                    variant="primary"
                    @click="play"
            >Let's play!</b-button>
          </b-col>
          <b-col>
            <PlayTime
                    :time="get_time_to_play"
                    @receivePlayTime="setPlayTime"/>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      if (this.calculation.length === 0 ||
        this.complexity === 0 ||
        this.playTime === 0) {
        return 'disabled'
      }

      return null
    },

    ...mapGetters(
      {
        statistics: 'STATISTICS',
        get_type_of_calcutation: 'TYPE_OF_CALCULATION',
        get_complexity: 'COMPLEXITY',
        get_time_to_play: 'TIME_TO_PLAY'
      }
    )
  },

  mounted: function () {
    this.calculation = this.get_type_of_calcutation
    this.complexity = this.get_complexity
    this.playTime = this.get_time_to_play
  },

  methods: {
    setCalculationType (value) {
      this.calculation = value
      this.saveTypeOfCalculation(this.calculation)
    },
    setComplexity (value) {
      this.complexity = parseInt(value)
      this.saveComplexity(this.complexity)
    },
    setPlayTime (value) {
      this.playTime = parseInt(value)
      this.saveTimeToPlay(this.playTime)
    },
    play () {
      this.saveDaysInGame()
      console.log('Lets play!!!')
    },
    ...mapActions({
      saveDaysInGame: 'SAVE_DAYS',
      saveTypeOfCalculation: 'SAVE_TYPE_OF_CALCULATION',
      saveComplexity: 'SAVE_COMPLEXITY',
      saveTimeToPlay: 'SAVE_TIME_TO_PLAY'
    })
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

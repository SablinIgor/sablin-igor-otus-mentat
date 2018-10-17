<template>
    <div>
        <h2>Сложность</h2>
        <VueSlideBar
                v-model="slider.value"
                :min="1"
                :max="10"
                :data="slider.data"
                :processStyle="slider.processStyle"
                :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
                :labelStyles="{color: 'white'}"
                :range="slider.range"
        />
        <h2>Value: {{ slider.value }}</h2>
    </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  name: 'Complexity',
  data () {
    return {
      slider: {
        value: 1,
        processStyle: {
          backgroundColor: 'red'
        },
        data: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        range: [
          {
            label: '1'
          },
          {
            label: '2'
          },
          {
            label: '3'
          },
          {
            label: '4'
          },
          {
            label: '5'
          },
          {
            label: '6'
          },
          {
            label: '7'
          },
          {
            label: '8'
          },
          {
            label: '9'
          },
          {
            label: '10'
          }
        ]
      }
    }
  },
  components: {
    VueSlideBar
  }
}
</script>

<style scoped>
    * {
        color: white;
    }
</style>

<template>
    <div>
        <h2>Complexity</h2>
        <VueSlideBar
                v-model="slider.value"
                :min="0"
                :max="10"
                :data="slider.data"
                :processStyle="slider.processStyle"
                :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
                :labelStyles="{color: 'white'}"
                :range="slider.range"
                @callbackRange="callbackRange"
        />
    </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  name: 'Complexity',
  props: ['initialValue'],
  data () {
    return {
      slider: {
        value: this.initialValue,
        processStyle: {
          backgroundColor: 'red'
        },
        data: [
          0,
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
            label: '0'
          },
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
  },

  methods: {
    callbackRange (val) {
      this.$emit('receiveSetComplexity', val.label)
    }
  }
}
</script>

<style scoped>
    * {
        color: white;
    }
</style>

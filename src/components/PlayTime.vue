<template>
    <div>
        <h2>Time to pay</h2>
        <VueSlideBar
                v-model="slider.value"
                :min="0"
                :max="15"
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
  name: 'PlayTime',
  data () {
    return {
      slider: {
        value: 0,
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
          10,
          11,
          12,
          13,
          14,
          15
        ],
        range: [
          {
            label: '0'
          },
          {
            label: '1 min'
          },
          {
            label: '2',
            isHide: true
          },
          {
            label: '3 min'
          },
          {
            label: '4',
            isHide: true
          },
          {
            label: '5',
            isHide: true
          },
          {
            label: '6 min'
          },
          {
            label: '7',
            isHide: true
          },
          {
            label: '8',
            isHide: true
          },
          {
            label: '9 min'
          },
          {
            label: '10',
            isHide: true
          },
          {
            label: '11',
            isHide: true
          },
          {
            label: '12 min'
          },
          {
            label: '13',
            isHide: true
          },
          {
            label: '14',
            isHide: true
          },
          {
            label: '15 min'
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
      this.$emit('receivePlayTime', val.label)
    }
  }
}
</script>

<style scoped>
    * {
        color: white;
    }
</style>

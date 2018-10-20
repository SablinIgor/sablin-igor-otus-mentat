<template>
    <div className="calcs">
        <h2>Type of calculation</h2>
        <ul>
            <li v-for="item in typeCalculationList">
                <input type="checkbox" :value="item" id="item" v-model="checkedCategories" @change="handleChange"> {{item}}
            </li>
        </ul>
        {{ checkedCategories }}
    </div>
</template>

<script>
export default {
  name: 'calculationType',

  data () {
    return {
      checkedCategories: [],
      selected: '',
      typeCalculationList: [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
        'Exponentiation'
      ]
    }
  },

  methods: {
    handleChange: function () {
      this.$emit('receiveCalculationType', this.checkedCategories)
    }
  }
}
</script>

<style scoped>
    * {
        color: white;
    }

    ul {
        list-style: none;
    }
</style>

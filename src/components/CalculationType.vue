<template>
    <div className="calcs">
        <h2>Type of calculation</h2>
        <ul>
            <li v-for="item in typeCalculationList">
                <input type="checkbox" :value="item" id="item" v-model="localCheckedCategories" @change="handleChange"> {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'calculationType',
  props: ['checkedCategories'],
  data () {
    return {
      selected: '',
      typeCalculationList: [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
        'Exponentiation'
      ],
      localCheckedCategories: this.checkedCategories
    }
  },

  methods: {
    handleChange: function () {
      this.$emit('receiveCalculationType', this.localCheckedCategories)
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

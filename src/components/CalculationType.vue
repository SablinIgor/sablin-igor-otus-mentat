<template>
    <div>
        <h2>Типы вычислений</h2>
        <ul>
            <li v-for="item in typeCalculationList">
                <input type="checkbox" :value="item" id="item" v-model="checkedCategories" @click="check($event)"> {{item}}
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
        'Сложение',
        'Вычитание',
        'Умножение',
        'Деление'
      ]
    }
  },

  methods: {
    check: function (e) {
      if (e.target.checked) {
        console.log(e.target.value + ' on')
      } else {
        console.log(e.target.value + ' off')
      }
    }
  }
}
</script>

<style scoped>
    * {
        color: white;
    }
</style>

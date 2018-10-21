<template>
    <div>
        <div class="container_header">
            <div class="box calc_btn lg_font">Clear!</div>
            <div class="display">
                <div class="task lg_font">{{ task }}</div>
                <div class="result lg_font">
                    <input v-model="expectedresult" class="inputResult">
                </div>
            </div>
            <div class="box calc_btn lg_font">Ready!</div>

        </div>

        <div class="container">
            <div class="box key lg_font">7</div>
            <div class="box key lg_font">8</div>
            <div class="box key lg_font">9</div>

            <div class="box key lg_font">4</div>
            <div class="box key lg_font">5</div>
            <div class="box key lg_font">6</div>

            <div class="box key lg_font">1</div>
            <div class="box key lg_font">2</div>
            <div class="box key lg_font">3</div>

            <div class="box key lg_font">+-</div>
            <div class="box key lg_font">0</div>
            <div class="box key lg_font">,</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PseudoCalc',

  props: ['task', 'expectedresult']
}
</script>

<style scoped>

    .calc_btn {
        padding: 10px;
        margin: 10px;
        color: red;
    }

    .container_header {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 400px;
    }

    .display {
        display: flex;
        flex-flow: row wrap;
        width: 400px;
        border: 1px solid white;
        border-radius: 5px;
        align-self: center;
    }

    .task {
        flex: 1;
        padding: 5px;
        margin: 10px;
        text-align: right;
    }

    .result {
        padding: 5px;
        margin: 10px;
    }

    .inputResult {
        color: black;
        width: 150px;
    }

    .box {
        border: 1px solid white;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.2s
    }

    .key {
        width: 100px;
        height: 100px;
        padding: 5px;
        margin: 5px;
    }

    .box:hover {
        background-color: grey;
    }

</style>

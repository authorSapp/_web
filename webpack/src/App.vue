<template>
  <div>
    <hr>
    <button class="btn btn-primary alert-success"
            v-on:click="showH2 = !showH2"
            >{{btnText}}</button>
    <button class="btn btn-primary alert-success"
            v-on:click="addNumber"
            v-bind:disabled="done"
            >Add number</button>
    <hr>
    <app-progress v-bind:val="numbers.length" v-bind:max="maxNumbers"></app-progress>    
    <hr>
    <input class="input-group input-group-lg" type="text" v-bind:value="name">
    <h3 v-show="showH2">Sum, {{sum}}</h3>
    <h3>Count: {{numbers.length}}</h3>
    <hr v-show="showH2">
    <ul class="list-group" v-show="showH2">
        <li class="list-group-item"
            v-for="number in numbers">
                {{number}}
            </li>
    </ul>
  </div>
</template>

<script>
  import Progress from './Progress.vue';

  export default {
    data() {
      return {
        name: 'Dara',
        showH2: true,
        numbers: [],
        maxNumbers: 10,
      }
    },
    methods: {
        addNumber() {
            this.numbers.push(Math.random())
        },


    },
    computed: {
        sum() {
            let sum = 0;
            for (let i = 0; i < this.numbers.length; i++) {
                sum += this.numbers[i];
            }
            return sum;

        },
        btnText() {
          return this.showH2 ? 'Hide' : 'Show';
        },
        done() {
          return this.numbers.length >= this.maxNumbers;
        },
    },
    components: {
      AppProgress: Progress
    },
  }
</script>

<style scoped>
  .container {
    color: red;
  }
</style>

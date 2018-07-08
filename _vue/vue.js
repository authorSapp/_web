let sample = new Vue({
    el: '.sample',
    data: {
        name: 'DaraGara',
        showH2: true,
        numbers: [],
        maxNumbers: 10,
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
});
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
          console.log('counter restarted!')
        }, 5000);
    }, 
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return "37!! Yeah!!";
      } else if (this.counter > 37) {
        return "Too much!";
      }
    },
  },
  methods: {
    increase(value){
        this.counter = this.counter + value;
        console.log('increase', value, this.counter);
    }
  }
});

app.mount('#assignment');
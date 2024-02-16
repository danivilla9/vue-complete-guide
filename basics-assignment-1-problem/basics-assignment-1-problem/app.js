const app = Vue.createApp({
  data() {
    return {
        name: 'Daniel',
        age: 26,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/250px-Vue.js_Logo_2.svg.png',
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    }
  }
  
});

app.mount('#assignment');

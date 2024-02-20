const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },

  watch: {
    counter(value){
      if(value>50){
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
        
      }        
    }
    /**
    name(value){
      this.fullname = value === '' ? '' : value + ' ' + this.lastName;
    },
    lastName(value){
      this.fullname = value === '' ? '' : this.name + ' ' + value;
    }*/
  }, 
  computed:{
    fullname(){
      if(this.name === '' || this.lastName === '')
        return '';
      return this.name + ' ' + this.lastName;
    }
  }, 
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name="";
    },
    outputFullName(){
      if(this.name === '')
        return '';
      return this.name + ' ' + 'Doe';
    }
  }
});

app.mount('#events');

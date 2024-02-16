const app = Vue.createApp({
    data(){
        return {
            firstInput: '',
            secondInput: ''
        }
    },
    methods: {
        showAlert(){
            alert('Button pressed!!');
        },
        setFirstInput(event){
            this.firstInput = event.target.value;
        },
        setSecondInput(event){
            this.secondInput = event.target.value;
        }
    }

});

app.mount('#assignment');
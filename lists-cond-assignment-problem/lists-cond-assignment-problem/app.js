const app = Vue.createApp({
    data() {
        return {
        tasks: [],
        enteredTask: '',
        isListShown: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleListVisibility() {
            this.isListShown = !this.isListShown;
        },
        getButtonCaption() {
            return this.isListShown ? 'Hide List' : 'Show List';
        }
    }
});

app.mount('#assignment');
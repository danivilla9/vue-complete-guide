<template>
    <section>
        <form @submit.prevent="submitData">
            <div>
                <h2>
                    <b>New Username: </b>
                </h2>
                <h3><input type="text" id="username" name="username" v-model="enteredUsername"></h3>
            </div>
            <div>
                <h2>
                    <b>New Age: </b>
                </h2>
                <h3><input type="text" id="age" name="age" v-model="enteredAge"></h3>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            enteredUsername: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('submit-data', this.enteredUsername, this.enteredAge)
        }
    },
    emits: ['submit-data']
}
</script>
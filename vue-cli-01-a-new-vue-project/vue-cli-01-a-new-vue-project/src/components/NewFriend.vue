<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" id="name" name="name" placeholder="Name" v-model="enteredName">
        </div>
        <div>
            <label>Phone</label> 
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" v-model="enteredPhone">
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" v-model="enteredEmail">
        </div>
        <div>
            <button type="submit">Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>
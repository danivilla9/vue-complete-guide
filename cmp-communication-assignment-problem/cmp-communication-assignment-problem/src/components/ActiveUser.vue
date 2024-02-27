<template>
    <section>
        <h2><b>Username: </b></h2>
        <h3>{{ username }}</h3>
    </section>
    <section>
        <h2><b>Age: </b></h2>
        <h3>{{ age }}</h3>
    </section>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
};
</script>
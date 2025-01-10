<template>
    <section class="page page--contact">
        <h1>Contact Me</h1>
        <p>
            Have an exciting project or idea? Let’s collaborate to create something amazing!
            I’m always open to discussing new opportunities or connecting with like-minded professionals.
        </p>
        <form @submit.prevent="submitForm">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="form.name" required />

            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="form.email" required />

            <label for="message">Your Message</label>
            <textarea id="message" v-model="form.message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        submitForm() {
            alert("Thank you! Your message has been sent.");
        },
    },
};
</script>

<style scoped>
.page--contact {
    /* Styling goes here */
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

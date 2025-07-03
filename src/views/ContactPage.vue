<template>
    <section class="page page--contact">
        <div class="row">
            <div class="col col--left">                    
                <img src="@/assets/contact-bz.jpg" alt="Bozena's avatar" width="662" height="883" />
            </div>
            <div class="col col--right container">
                <div class="group-text">
                    <h1>Let's work together!</h1>
                    <p>
                        Have an exciting project or idea? Let’s collaborate to create something amazing!
                        I’m always open to discussing new opportunities or connecting with like-minded professionals.
                    </p>
                </div>
                <form @submit.prevent="submitForm">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" v-model="form.name" required />

                    <label for="email">Your Email</label>
                    <input type="email" id="email" v-model="form.email" required />

                    <label for="message">Your Message</label>
                    <textarea id="message" v-model="form.message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
                <div class="group-connect">
                    <h2>Connect with me!</h2>
                    LinkedIn..
                    x
                    GitHub
                    email
                </div>
            </div>
        </div>
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

<style scoped lang="scss">
.page--contact {
    .row {
        display: flex;
        // flex-direction: column;
        // gap: -$spacing-lg;
    }

    .col {
        width: 50%;
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 16px;
        };
    }

    .col--left {
        margin-right: -2.5rem;
    }

    .col--right {
        margin-top: 2.5rem;
        margin-bottom: -2.5rem;

        &.container {
            background: white;
            display: flex;
            gap: 2.5rem;
            flex-direction: column;
        }
    }

    .group-text {
        display: flex;
        flex-direction: column;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

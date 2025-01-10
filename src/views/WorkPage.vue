<template>
    <div class="page page--work">
        <header class="page__header">
            <h1 class="page__title">Crafting Pixel-Perfect Experiences</h1>
            <p class="page__subtitle">
                Front End Developer • Accessibility Advocate • Performance Enthusiast
            </p>
        </header>

        <section class="work__intro">
            <h2 class="work__heading">What I Bring to the Table</h2>
            <p>
                I specialise in building interactive, accessible, and high-performing web applications.
                With an eye for detail and a passion for clean code, I transform designs into seamless
                user experiences that stand out.
            </p>
            <p>
                I believe in development with purpose — ensuring every project is not only visually stunning
                but also accessible and performant for all users, regardless of their devices or abilities.
            </p>
        </section>

        <section class="work__portfolio">
            <h2 class="work__heading">Recent Projects</h2>
            <div class="portfolio">
                <article class="portfolio__card portfolio__item" v-for="project in projects" :key="project.id">
                    <img :src="project.image" :alt="project.title" />
                    <h3 class="portfolio__title">{{ project.title }}</h3>
                    <p>
                        {{ project.description }}
                    </p>
                    <a :href="project.link" target="_blank" rel="noopener">View Project</a>
                </article>
            </div>
        </section>

        <section class="work__skills">
            <h2 class="work__heading">Tech Stack & Expertise</h2>
            <ul class="skills">
                <li>Vue.js & React.js</li>
                <li>HTML5, CSS3, and Modern JavaScript (ES6+)</li>
                <li>Accessibility (WCAG 2.1 Standards)</li>
                <li>Performance Optimisation</li>
                <li>CSS-in-JS, SCSS, and Tailwind</li>
                <li>Git, Webpack, and Grunt</li>
            </ul>
        </section>

        <footer class="work__footer">
            <h2 class="footer__heading">Let’s Build Something Amazing</h2>
            <p>
                Have an idea or project in mind? I’d love to collaborate!
                Whether it’s optimising an existing site or crafting something from scratch,
                let’s create experiences your users will love.
            </p>
            <a href="mailto:your-email@example.com" class="footer__contact-btn">Get in Touch</a>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "🌟 Accessibility-First Dashboard",
                    description:
                        "Designed and implemented a data- rich dashboard with WCAG - compliant components, improving usability for screen readers by 60%.",
                    link: "https://prodpad.com",
                    image: "/assets/prodpad-project.jpg",
                },
                {
                    id: 2,
                    title: "⚡ Lightning-Fast Blog Platform",
                    description:
                        "Optimised page speed and SEO for a blog platform, reducing load times by 40% and improving the Lighthouse score to 95+.",
                    link: "https://portfolio-link.com",
                    image: "/assets/wordpress-project.jpg",
                },
                {
                    id: 3,
                    title: "🎨 Design System Library",
                    description:
                        "Built a reusable Vue.js component library with 100+ components, enabling rapid prototyping and maintaining brand consistency.",
                    link: "https://passion4social.com",
                    image: "/assets/passion4social-project.jpg",
                },
                {
                    id: 4,
                    title: "Passion4Social Websites",
                    description:
                        "Designed and coded accessible WordPress sites for non-profits, ensuring compliance with WCAG standards.",
                    link: "https://passion4social.com",
                    image: "/assets/passion4social-project.jpg",
                },
            ],
        };
    },
};
</script>

<style scoped>
.page--work {
    /* Styling goes here */
}

.projects {
    display: grid;
    gap: 2rem;
}

.project-card {
    /* Card styles */
}
</style>


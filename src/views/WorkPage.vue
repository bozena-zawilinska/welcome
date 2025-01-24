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
                With over 3 years of expertise in Vue.js and 5+ years mastering WordPress, 
                I specialize in crafting customized templates and Gutenberg blocks that meet the unique needs of each project.

                As the sole web developer in my current role, I've taken full ownership of building, and optimizing ProdPad website, 
                achieving near-perfect PageSpeed scores for both desktop and mobile. 
                <!-- I specialise in building interactive, accessible, and high-performing web applications.
                With an eye for detail and a passion for clean code, I transform designs into seamless
                user experiences that stand out. -->
            </p>
            <p>
                With an eye for detail and a passion for clean code, I transform designs into seamless user experiences that stand out.
                <strong>My mission?</strong> To create digital solutions that are fast, functional, and future-proof. 
                Whether you’re looking for seamless performance, inclusive design, or tailored web functionality, I’m here to bring your vision to life.
            </p>
        </section>

        <section class="work__portfolio">
            <h2 class="work__heading">Featured Projects</h2>
            <div class="projects">
                <article class="portfolio__card project" v-for="project in projects" :key="project.id">
                    <img class="project__image" :src="project.image" :alt="project.title" />
                    <div class="project__content">
                        <h3 class="project__title">{{ project.title }}</h3>
                        <p class="project__description">
                            {{ project.description }}
                        </p>
                            <ul class="project__details">
                            <li><strong>Goals:</strong> {{ project.goals }}</li>
                            <li><strong>Role:</strong> {{ project.role }}</li>
                            <li><strong>Outcome:</strong> {{ project.outcome }}</li>
                        </ul>
                        <a class="project__link" :href="project.link" target="_blank" rel="noopener">View Project</a>
                    </div>
                </article>
            </div>
        </section>

        <section class="work__skills">
        <h2 class="work__heading">Tech Stack & Expertise</h2>
        <div class="skills">
            <div class="skills__category" v-for="category in skills" :key="category.id">
            <h3 class="skills__heading">{{ category.title }}</h3>
            <ul class="skills__list">
                <li v-for="item in category.items" :key="item" class="skills__item">{{ item }}</li>
            </ul>
            </div>
        </div>
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
    name: "ProjectsShowcase",
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "ProdPad",
                    description: "SaaS product for product teams to build flexible roadmaps and manage backlogs.",
                    goals: "Enhance the UI/UX of the SaaS platform, bugfixes and pixel perfect new features builded with accessibility in mind. Components created for reusability to prepare the platform for growth.",
                    role: "Front-end developer using Vue 3.",
                    outcome: "Improved user experience and WCAG 2.2 AA compliant platform.",
                    link: "https://www.prodpad.com/",
                    image: "/assets/prodpad.jpg",
                },
                {
                    id: 2,
                    title: "ProdPad",
                    description: "Marketing website.",
                    goals: "Build bespoke pixel perfect website with responsive Gutenberg blocks, templates and plugins for CPT.",
                    role: "WordPress developer",
                    outcome: "Improved user experience and achieved near-perfect PageSpeed Insights scores.",
                    link: "https://www.prodpad.com/",
                    image: "/assets/prodpad.jpg",
                },
                {
                    id: 2,
                    title: "Passion4Social",
                    description: "Website for a creative agency focused on building accessible and visually engaging websites for non-profits.",
                    goals: "Create bespoke WordPress websites that meet WCAG accessibility guidelines.",
                    role: "Lead WordPress developer responsible for custom designs, implementing features, and ensuring responsive mobile-first designs.",
                    outcome: "Delivered multiple WCAG-compliant websites that increased client visibility and engagement.",
                    link: "https://passion4social.com/",
                    image: "/assets/passion4social.jpg",
                },
                {
                    id: 3,
                    title: "Royal Hospital for Children and Young People",
                    description: "Informational Website for Children hospital in Edinburgh containing helpful information for young patients and their parents.",
                    goals: "Create an engagening and colorful website with well organised sections and a search feature to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://children.nhslothian.scot/",
                    image: "/assets/rhcyp.jpg",
                },
                {
                    id: 4,
                    title: "Just Enterprise",
                    description: "Website for a Business Support for Social Enterprises in Scotland.",
                    goals: "Provide an accessible and responsive website for patients and families to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://justenterprise.org/",
                    image: "/assets/rhcyp.jpg",
                },
                {
                    id: 5,
                    title: "Cerebral Palsy Scotland",
                    description: "Non-profit organization supporting people with cerebral palsy in building skills and confidence.",
                    goals: "Create a responsive and accessible website to increase resource availability and user engagement.",
                    role: "Front-end developer focusing on accessibility, responsive design, and performance optimization.",
                    outcome: "Improved accessibility and increased website visits by 35%.",
                    link: "https://cerebralpalsyscotland.org.uk/",
                    image: "/assets/cerebral-palsy-scotland.jpg",
                },
                {
                    id: 6,
                    title: "Bytzari",
                    description: "E-commerce platform for sustainable, ethical, and purposeful bespoke clothing.",
                    goals: "Develop a visually stunning and highly functional e-commerce platform.",
                    role: "WordPress developer responsible for designing and coding custom templates.",
                    outcome: "Improved user experience and increased sales conversions.",
                    link: "https://bytzari.com/",
                    image: "/assets/bytzari.jpg",
                },
                {
                    id: 7,
                    title: "ABZ Works",
                    description: "Website for Aberdeen City Council's employability team to support skills and training.",
                    goals: "Deliver an accessible platform to provide employment resources and training information.",
                    role: "Lead WordPress developer responsible for front-end development and accessibility.",
                    outcome: "Increased resource access and engagement across target demographics.",
                    link: "https://abzworks.co.uk/",
                    image: "/assets/abz-works.jpg",
                },
                {
                    id: 8,
                    title: "Environmental Key Fund",
                    description: "Grant platform for North Lanarkshire focused on environmental initiatives.",
                    goals: "Design a user-friendly and responsive site to simplify grant applications.",
                    role: "Front-end developer ensuring intuitive navigation and responsive design.",
                    outcome: "Increased grant applications by 20% post-launch.",
                    link: "https://environmentalkeyfund.com/",
                    image: "/assets/environmental-key-fund.jpg",
                },
                {
                    id: 9,
                    title: "Scottish Communities Finance",
                    description: "Website enabling reinvestment into local Scottish communities.",
                    goals: "Develop an accessible and responsive platform to encourage community funding initiatives.",
                    role: "Front-end developer focusing on performance and accessibility.",
                    outcome: "Improved community engagement and funding participation.",
                    link: "https://scotcomfinance.scot/",
                    image: "/assets/scottish-communities-finance.jpg",
                },
            ],
            skills: [
                {
                    id: 1,
                    title: "Industry Knowledge",
                    items: [
                    "Web Development (Front-end and WordPress)",
                    "Accessibility Best Practices (WCAG Compliance)",
                    "Performance Optimization (PageSpeed Insights, Lighthouse)",
                    "Responsive Web Design",
                    ],
                },
                {
                    id: 2,
                    title: "Tools & Technologies",
                    items: [
                    "Programming: Vue 3, JavaScript (ES6+), HTML5, CSS3, SCSS",
                    "Frameworks & Libraries: TailwindCSS, Nuxt.js, Bootstrap",
                    "Content Management: WordPress, ACF Pro",
                    "Version Control: Git, GitHub, GitLab",
                    "Testing & Debugging: Chrome DevTools, Lighthouse",
                    "Performance Tools: PageSpeed Insights, WebPageTest",
                    ],
                },
                {
                    id: 3,
                    title: "Interpersonal Skills",
                    items: [
                    "Independent Problem Solving",
                    "Collaboration and Communication",
                    "Time Management",
                    "Attention to Detail",
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}
.portfolio {
    &__card {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        overflow: hidden;
        text-align: left;
        // max-width: 350px;
        // transition: transform 0.3s;
        // :hover {
        //     transform: translateY(-5px);
        // }
    }
    .project {
        &__image {
            width: 100%;
            height: auto;
        }
        &__content {
            padding: $spacing-lg;
            flex: 1;
        }
        &__title {}
        &__description {}
        &__details {}
        &__link {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: background-color 0.3s;
            &:hover {
                background-color: #0056b3;
            }
        }
    }
}
</style>


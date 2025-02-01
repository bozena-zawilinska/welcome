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
            
            <div class="bento-grid">
                <div v-for="project in projects" :key="project.id" :id="`row-${project.id}`" class="row" >
                    
                    <div class="col col-1-1-1">
                        <header class="project__header">
                            <img class="project__logo" :src="getProjectPath(project.logo)" :alt="`${project.title} logo`" />
                            <h3 class="project__title text--supporting">{{ project.title }}</h3>
                        </header>

                        <!-- Card 5: Image -->
                        <div class="bento__card image no-padding">
                            <img v-if="project.images[0]" class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />
                            <!-- <img v-if="project.images[2]" :src="project.images[2].src" :alt="project.images[2].alt" /> -->
                        </div>
                        <!-- Card 2: Project -->
                        <article class="bento__card project">
                            <p class="project__description">{{ project.description }}</p>
                                    <a class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                                        <span class="project__footer-text">Visit website </span>
                                        <font-awesome-icon icon="arrow-up-right-from-square" />
                                    </a>
                        </article>
                    </div>
                    <div class="col col-1-1-2">
                        <div></div>
                        <div class="group-cards">
                            <!-- Card 3: Skills -->
                            <div class="bento__card skills">
                                <h4 class="skills__heading">Skills Used</h4>
                                <ul class="skills__tags text--small">
                                    <li v-for="skill in project.skills" :key="skill" class="skills__tag">{{ skill }}</li>
                                </ul>
                            </div>
                            
                            <!-- Card 2: Tools -->
                            <div class="bento__card tools">
                                <h4 class="tools__heading">Tools Used</h4>
                                <ul class="skills__tags text--small">
                                    <li v-for="tool in project.tools" :key="tool" class="skills__tag">{{ tool }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bento__card no-bg no-padding">
                            <img v-if="project.images[0]" class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />
                            <!-- <img v-if="project.images[1]" class="project__image" :src="getProjectPath(project.images[1].src)" :alt="project.images[1].alt" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- <section class="work__portfolio">
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
        </section> -->

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
// import * from "@/assets/projects/";
export default {
    name: "ProjectsShowcase",
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "ProdPad - SaaS Platform",
                    logo: "prodpad/logo.png",
                    showDropdown: false,
                    description: "ProdPad is a product management platform that helps teams build products that solve problems and drive outcomes. It offers features like roadmap, idea management, and feedback software to help teams work faster and communicate better. ProdPad emphasizes stakeholder communication, goal management, AI assistance, and organization-wide collaboration to help teams achieve their product goals.",
                    goals: "Enhance the UI/UX of the SaaS platform, bugfixes and pixel perfect new features builded with accessibility in mind. Components created for reusability to prepare the platform for growth.",
                    role: "Front-end developer using Vue 3.",
                    outcome: "Improved user experience and WCAG 2.2 AA compliant platform.",
                    link: "https://www.prodpad.com/",
                    skills: ["Vue.js", "HTML", "SCSS", "RESTful APIs & Fetching Data", "JavaScript"],
                    tools: ["Git/GitHub", "npm", "Vite", "DevTools", "VS Code"],
                    images: [
                        {
                            src: "prodpad/prodpad-website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "prodpad/website-1.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "ProdPad - Marketing Website",
                    logo: "prodpad/logo.png",
                    showDropdown: false,
                    description: "Marketing website built on a custom WordPress template, allowing the marketing team to create engaging content with ease. Using bespoke Gutenberg blocks, it delivers a smooth user experience while showcasing key features like roadmaps, idea management, and feedback collection. As the sole web developer on this project, I crafted a dynamic, user-friendly site that effectively communicates the brand’s strengths.",
                    goals: "Build bespoke pixel perfect website with responsive Gutenberg blocks, templates and plugins for CPT.",
                    role: "WordPress developer",
                    outcome: "Improved user experience and achieved near-perfect PageSpeed Insights scores.",
                    link: "https://www.prodpad.com/",
                    skills: ["PHP", "HTML", "SCSS", "JavaScript", "Webpack", "Website Performance"],
                    tools: ["WordPress CMS", "ACF PRO", "WP Engine", "VS Code", "GitHub"],
                    images: [
                        {
                            src: "prodpad/prodpad-website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "prodpad/website-1.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "prodpad/website-2.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 3,
                    title: "Passion4Social",
                    logo: "p4s/logo.png",
                    showDropdown: false,
                    description: "Website for a creative agency focused on building accessible and visually engaging websites for non-profits.",
                    goals: "Create bespoke WordPress websites that meet WCAG accessibility guidelines.",
                    role: "Lead WordPress developer responsible for custom designs, implementing features, and ensuring responsive mobile-first designs.",
                    outcome: "Delivered multiple WCAG-compliant websites that increased client visibility and engagement.",
                    link: "https://passion4social.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 4,
                    title: "Royal Hospital for Children and Young People",
                    logo: "nhs/logo.svg",
                    showDropdown: false,
                    description: "Informational Website for Children hospital in Edinburgh containing helpful information for young patients and their parents.",
                    goals: "Create an engagening and colorful website with well organised sections and a search feature to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://children.nhslothian.scot/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 5,
                    title: "Just Enterprise",
                    logo: "just-enterprise/logo.png",
                    showDropdown: false,
                    description: "Website for a Business Support for Social Enterprises in Scotland.",
                    goals: "Provide an accessible and responsive website for patients and families to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://justenterprise.org/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 6,
                    title: "Cerebral Palsy Scotland",
                    logo: "cps/logo.svg",
                    showDropdown: false,
                    description: "Non-profit organization supporting people with cerebral palsy in building skills and confidence.",
                    goals: "Create a responsive and accessible website to increase resource availability and user engagement.",
                    role: "Front-end developer focusing on accessibility, responsive design, and performance optimization.",
                    outcome: "Improved accessibility and increased website visits by 35%.",
                    link: "https://cerebralpalsyscotland.org.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 7,
                    title: "Bytzari",
                    logo: "tzari/logo.svg",
                    showDropdown: false,
                    description: "E-commerce platform for sustainable, ethical, and purposeful bespoke clothing.",
                    goals: "Develop a visually stunning and highly functional e-commerce platform.",
                    role: "WordPress developer responsible for designing and coding custom templates.",
                    outcome: "Improved user experience and increased sales conversions.",
                    link: "https://bytzari.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 8,
                    title: "ABZ Works",
                    logo: "abz-works/logo.svg",
                    showDropdown: false,
                    description: "Website for Aberdeen City Council's employability team to support skills and training.",
                    goals: "Deliver an accessible platform to provide employment resources and training information.",
                    role: "Lead WordPress developer responsible for front-end development and accessibility.",
                    outcome: "Increased resource access and engagement across target demographics.",
                    link: "https://abzworks.co.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 9,
                    title: "Environmental Key Fund",
                    logo: "ekf/logo.svg",
                    showDropdown: false,
                    description: "Grant platform for North Lanarkshire focused on environmental initiatives.",
                    goals: "Design a user-friendly and responsive site to simplify grant applications.",
                    role: "Front-end developer ensuring intuitive navigation and responsive design.",
                    outcome: "Increased grant applications by 20% post-launch.",
                    link: "https://environmentalkeyfund.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                },
                {
                    id: 10,
                    title: "Scottish Communities Finance",
                    logo: "scf/logo.svg",
                    showDropdown: false,
                    description: "Website enabling reinvestment into local Scottish communities.",
                    goals: "Develop an accessible and responsive platform to encourage community funding initiatives.",
                    role: "I developed the ScotCom Finance website using the WordPress Genesis Framework, creating custom page templates tailored to the client’s needs. I utilized Advanced Custom Fields (ACF) to build flexible content fields and leveraged Genesis hooks and WordPress widgets to position custom elements efficiently.",
                    outcome: "Improved community engagement and funding participation.",
                    link: "https://scotcomfinance.scot/",
                    skills: ["HTML", "CSS", "PHP", "WordPress", "Genesis Framework", "ACF"],
                    images: [
                        {
                            src: "scf/website-1.png",
                            alt: "Scottish Communities Finance Website",
                        },
                        {
                            src: "scf/website.png",
                            alt: "SCF Hooks",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
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
    methods: {
        getProjectPath(project) {
            return require(`@/assets/projects/${project}`);
        },
        toggleDropdown(id) {
            this.projects.forEach((project) => {
                project.showDropdown = project.id === id ? !project.showDropdown : false;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.bento-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 3rem;

    .row {
        display: flex;
        gap: 1.5rem;
        flex-direction: column;

        background-color: $green-white;
        border-radius: 12px;
        overflow: hidden;
        padding: $padding-large;

        @include breakpoint-up(md) {
            flex-direction: row;
        }

        .col {
            flex: 1;
            display: grid;
            gap: 1.5rem;
        }

        .col-1 {
            grid-template-columns: 1fr;
        }

        .col-1-1 {
            grid-template-rows: auto auto;
            grid-template-columns: 1fr;
        }

        .col-1-1-1 {
            grid-template-rows: 50px 1fr 1fr;
        }

        .col-1-1-2 {
            grid-template-rows: 50px 1fr 1fr;

            .group-cards {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }
        }
        .col-1-2 {
            grid-template-rows: auto auto;

            > *:first-child {
                grid-column: span 2;
            }

            @include breakpoint-up(lg) {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .col-4 {
            grid-template-columns: repeat(1, 1fr);
            @include breakpoint-up(lg) {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    .project__header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .project__logo {
            height: 30px;
            width: auto;
            margin-right: $margin-large;
            @include breakpoint-up(lg) {
                height: 50px;
            }
        }

        .project__title {
            flex-grow: 1;
            text-align: left;
            margin: 0;
        }
    }

    .bento__card {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        padding: $padding-large;
        display: flex;
        flex-direction: column;
        gap: $padding-large;

        &.no-padding {
            padding: 0;
        }
        &.no-bg {
            background: none;
            box-shadow: none;
        }

        &.project {
            text-align: left;
            display: flex;
            justify-content: space-between;
            p {
                line-height: 1.5;
                margin: 0;
            }
            .button {
                width: fit-content;
                max-width: 100%;
            }
        }


        &.tools, &.skills {
            grid-column: span 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            &__logos {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
            }

            .tools__logo {
                width: 30px;
                height: 30px;
            }

            .skills__tags {
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%;
            }

            .skills__tag {
                width: fit-content;
                padding: $spacing-xs;
                margin: $spacing-xs;
                background: #f0f0f0;
                border-radius: 12px;
            }
        }

        &.image {
            grid-column: span 1;

            img {
                flex: 1;
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 9;
                object-fit: cover;
                display: block;

                border-radius: 12px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>


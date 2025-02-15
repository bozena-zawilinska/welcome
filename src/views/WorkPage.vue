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
            
            <div class="bento-grid bento-grid--70-30">
                <!-- <div v-for="project in projects.slice(0, 4)" :key="project.id" :id="`row-${project.id}`" class="row" > -->
                <div v-for="project in projects.slice(0, 4)" :key="project.id" :id="`col-${project.id}`" class="col" >
                    <div id="row-1" class="row row--project">
                        <header class="project__header">
                            <img class="project__logo" :src="getProjectPath(project.logo)" :alt="`${project.title} logo`" />
                            <h3 class="project__title text--supporting">{{ project.title }}</h3>
                        </header>
                        <div></div>
                    </div>
                    <div id="row-2" class="row row--project">
                        <!-- Card 5: Image -->
                        <div class="bento__card image no-padding">
                            <img v-if="project.images[0]" class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />
                            <!-- <img v-if="project.images[2]" :src="project.images[2].src" :alt="project.images[2].alt" /> -->
                        </div>
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
                    </div>
                    <div id="row-3" class="row row--project">
                        <!-- Card 2: Project -->
                        <article class="bento__card project">
                            <p v-for="(line, index) in project.description.split('\n')" :key="index" class="project__description">
                                {{ line }}
                            </p>
                            <a class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                                <span class="project__footer-text">Visit website </span>
                                <font-awesome-icon icon="arrow-up-right-from-square" />
                            </a>
                        </article>
                        <div class="bento__card no-bg no-padding">
                            <img v-if="project.images[1]" class="project__image" :src="getProjectPath(project.images[1].src)" :alt="project.images[1].alt" />
                        </div>
                    </div>

                    <!-- <div class="col col-1-1-1">
                        <header class="project__header">
                            <img class="project__logo" :src="getProjectPath(project.logo)" :alt="`${project.title} logo`" />
                            <h3 class="project__title text--supporting">{{ project.title }}</h3>
                        </header> -->

                        <!-- Card 5: Image -->
                        <!-- <div class="bento__card image no-padding">
                            <img v-if="project.images[0]" class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />
                        </div> -->
                        <!-- Card 2: Project -->
                        <!-- <article class="bento__card project">
                            <p v-for="(line, index) in project.description.split('\n')" :key="index" class="project__description">
                                {{ line }}
                            </p>
                            <a class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                                <span class="project__footer-text">Visit website </span>
                                <font-awesome-icon icon="arrow-up-right-from-square" />
                            </a>
                        </article>
                    </div>
                    <div class="col col-1-1-2">
                        <div></div>
                        <div class="group-cards"> -->
                            <!-- Card 3: Skills -->
                            <!-- <div class="bento__card skills">
                                <h4 class="skills__heading">Skills Used</h4>
                                <ul class="skills__tags text--small">
                                    <li v-for="skill in project.skills" :key="skill" class="skills__tag">{{ skill }}</li>
                                </ul>
                            </div> -->
                            
                            <!-- Card 2: Tools -->
                            <!-- <div class="bento__card tools">
                                <h4 class="tools__heading">Tools Used</h4>
                                <ul class="skills__tags text--small">
                                    <li v-for="tool in project.tools" :key="tool" class="skills__tag">{{ tool }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bento__card no-bg no-padding">
                            <img v-if="project.images[1]" class="project__image" :src="getProjectPath(project.images[1].src)" :alt="project.images[1].alt" />
                        </div>
                    </div> -->
                </div>
            </div>

            <!-- Other Projects -->
            <div class="bento-grid bento-grid--100">
                <div v-for="project in projects.slice(4)" :key="project.id" class="bento-item">

                <!-- Image Card with Overlay -->
                <div class="bento__card image-container" @click="toggleDetails(project.id)">
                    <img class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />

                    <!-- Overlay Description -->
                    <div class="overlay" :class="{ 'show': project.showDetails }">
                    <p v-for="(line, index) in project.description.split('\n')" :key="index">
                        {{ line }}
                    </p>
                    <button class="button button--secondary" @click.stop="toggleDetails(project.id)">
                        Hide Details
                    </button>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="bento__actions">
                    <a class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                    Visit website <font-awesome-icon icon="arrow-up-right-from-square" />
                    </a>
                    <button class="button button--secondary" @click="toggleDetails(project.id)">
                    Show Details
                    </button>
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
                    
                    link: "https://www.prodpad.com/",
                    skills: ["PHP", "HTML", "SCSS", "JavaScript", "Webpack", "Website Performance", "Custom Gutenberg Blocks", "Custom WordPress Templates"],
                    tools: ["WordPress", "ACF PRO", "WP Engine", "VS Code", "GitHub"],
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
                    description: "At Passion4Social, I was the lead web developer responsible for building high-quality, accessible websites for a variety of clients. Collaborating closely with the design team, I transformed website mockups into fully functional, performant WordPress websites that met client expectations and industry best practices. My role involved the entire website development lifecycle, from initial setup on 20i hosting to local development using Local by Flywheel, and final deployment to the client’s hosting provider. I ensured smooth migrations, optimized site performance, and maintained high coding standards.",
                    
                    link: "https://passion4social.com/",
                    skills: ["PHP", "HTML", "CSS", "jQuery", "responsive design", "Website deployment and migration", "Website maintenance"],
                    tools: ["WordPress", "Genesis Framework", "20i", "Local by Flywheel", "Beanstalk", "FileZilla (SFTP)", "BrowserStack"],
                    images: [
                        {
                            src: "p4s/p4s-website.png",
                            alt: "Passion 4 Social Website",
                        },
                        {
                            src: "p4s/p4s-website-1.png",
                            alt: "Passion 4 Social Portfolio",
                        },
                        {
                            src: "scf/website.png",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 4,
                    title: "Royal Hospital for Children and Young People",
                    logo: "nhs/logo.svg",
                    showDropdown: false,
                    description: 
                        `I had the privilege of leading the development of this impactful project, designed to support children, young people, parents, carers, and healthcare professionals across NHS Lothian. This website serves as a vital resource, providing accessible and engaging information to help young patients and their families navigate hospital visits with confidence. 
                        The platform features: 
                        - Child-Friendly Content – Interactive guides to help children understand hospital procedures, tests, and stays in an approachable, reassuring way.
                        - Support for Families & Carers – Practical resources, from accommodation details to financial assistance and wellbeing support.
                        - Optimized Accessibility & Performance – Ensuring a seamless, inclusive experience for all users, including those with additional needs.
                        As the lead web developer, I was responsible for building a fully customized WordPress solution, implementing accessibility best practices, and optimizing performance to ensure a smooth and user-friendly experience. This project was a rewarding challenge that combined technical expertise with meaningful impact, making hospital visits less daunting for children and their families.`,
                    
                    link: "https://children.nhslothian.scot/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "nhs/nhs-website.png",
                            alt: "NHS Website",
                        },
                        {
                            src: "nhs/nhs-website-children.png",
                            alt: "Royal Hospital for Children and Young People",
                        },
                        {
                            src: "nhs/nhs-website-young-people.png",
                            alt: "Royal Hospital for Children and Young People",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "Just Enterprise",
                    logo: "just-enterprise/logo.png",
                    showDropdown: false,
                    description: "Website for a Business Support for Social Enterprises in Scotland.",
                    link: "https://justenterprise.org/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "just-enterprise/just-enterprise-website.png",
                            alt: "ProdPad Dashboard",
                        },
                    ],
                },
                {
                    id: 6,
                    title: "Cerebral Palsy Scotland",
                    logo: "cps/logo.svg",
                    showDropdown: false,
                    description: "Non-profit organization supporting people with cerebral palsy in building skills and confidence.",
                    link: "https://cerebralpalsyscotland.org.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "cps/cps-website.png",
                            alt: "ProdPad Dashboard",
                        },
                    ],
                },
                {
                    id: 7,
                    title: "Bytzari",
                    logo: "tzari/logo.svg",
                    showDropdown: false,
                    description: "E-commerce platform for sustainable, ethical, and purposeful bespoke clothing.",
                    link: "https://bytzari.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "tzari/tzari-website.png",
                            alt: "ProdPad Dashboard",
                        },
                    ],
                },
                {
                    id: 8,
                    title: "ABZ Works",
                    logo: "abz-works/logo.svg",
                    showDropdown: false,
                    description: "Website for Aberdeen City Council's employability team to support skills and training.",
                    link: "https://abzworks.co.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "abz-works/abz-works-website.png",
                            alt: "ProdPad Dashboard",
                        },
                    ],
                },
                {
                    id: 9,
                    title: "Environmental Key Fund",
                    logo: "ekf/logo.svg",
                    showDropdown: false,
                    description: "Grant platform for North Lanarkshire focused on environmental initiatives.",
                    link: "https://environmentalkeyfund.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "ekf/ekf-website.png",
                            alt: "ProdPad Dashboard",
                        },
                    ],
                },
                {
                    id: 10,
                    title: "Scottish Communities Finance",
                    logo: "scf/logo.svg",
                    showDropdown: false,
                    description: "Website enabling reinvestment into local Scottish communities.",
                    link: "https://scotcomfinance.scot/",
                    skills: ["HTML", "CSS", "PHP", "WordPress", "Genesis Framework", "ACF"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "scf/website-1.png",
                            alt: "Scottish Communities Finance Website",
                        },
                    ],
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
            console.log(project);
            return require(`@/assets/projects/${project}`);
        },
        toggleDropdown(id) {
            this.projects.forEach((project) => {
                project.showDropdown = project.id === id ? !project.showDropdown : false;
            });
        },
        toggleDetails(id) {
            this.projects = this.projects.map(project =>
                project.id === id ? { ...project, showDetails: !project.showDetails } : project
            );
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

    .col {
        .row--project {
            display: grid;
        }
        #row-2 {
            grid-template-columns: 60% 40%;
        }
        #row-3 {
            grid-template-columns: 40% 60%;
        }
        // .row--project:nth-child(1,3) {
        //     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        // }
    }

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
            .image {
                flex: 2;
            }
        }

        .col-1-1-2 {
            grid-template-rows: 50px 1fr 1fr;

            .group-cards {
                display: grid;
                grid-template-columns: 1fr;
                // grid-template-columns: repeat(2, 1fr);
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

    /* Bento Grid Full width */
    &--100 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        @include breakpoint-up(lg) {
            grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        }

        /* Bento Item */
        .bento-item {
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            transition: transform 0.2s ease;
            padding: $padding-large;

            &:hover {
                transform: translateY(-5px);
            }

            // .project__header {
            //     flex-direction: column;
            //     align-items: center;
            // }

            /* Image Container */
            .image-container {
                overflow: hidden;
                cursor: pointer;
                box-shadow: none;

                .project__image {
                    transition: transform 0.3s ease-in-out;
                }

                &:hover .project__image {
                    transform: scale(1.05);
                }
            }

             /* Action Buttons */
            .bento__actions {
                display: flex;
                gap: 1.5rem;
                justify-content: center;
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

        /* Overlay Description */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: $spacing-xs;
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .overlay.show {
            opacity: 1;
            transform: translateY(0);
        }

        .overlay p {
            color: white;
        }

       
    }
}

// @media (prefers-reduced-motion: no-preference) {
//   .bento-grid {
//     & > .bento-item {
//       animation: slide-in-from-right linear both;
//       animation-timeline: view();
//       animation-range: entry 0% entry 100% entry 200%;
//     }
//   }
// }


</style>


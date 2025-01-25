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
            <!-- {{ projects }} -->
            <div class="bento-grid">
                <div v-for="project in projects" :key="project.id" :id="`row-${project.id}`" class="row" >
                    <div class="col col-1">
                        <!-- Card 1: Project -->
                        <article class="bento__card project">
                        <header class="project__header">
                            <img class="project__logo" :src="project.logo" :alt="`${project.title} logo`" />
                            <p class="project__title text--supporting">{{ project.title }}</p>
                            <div class="dropdown" @click.stop="toggleDropdown(project.id)">
                                <button class="dropdown__toggle">⋮</button>
                                <ul v-if="project.showDropdown" class="dropdown__menu">
                                    <li><a :href="project.link" target="_blank" rel="noopener">View Project</a></li>
                                </ul>
                            </div>

                        </header>
                        <img v-if="project.images[0]" class="project__image" :src="project.images[0].src" :alt="project.images[0].alt" />
                        <div class="project__content">
                            <p class="project__description">{{ project.description }}</p>
                        </div>
                        <footer class="project__footer">
                            <span class="project__footer-text">I built this website for:</span>
                            <!-- <span class="project__client">{{ project.title }}</span> -->
                        </footer>
                        </article>
                    </div>
                    <div class="col col-4">
                        
                        <!-- Card 2: Tools -->
                        <article class="bento__card tools">
                        <h4 class="tools__heading">Tools Used</h4>
                        <div class="tools__logos">
                            <img v-for="tool in project.tools" :src="tool.src" :alt="tool.alt" :key="tool.alt" class="tools__logo" />
                        </div>
                        </article>

                        <!-- Card 4: Image -->
                        <article class="bento__card image">
                        <img v-if="project.images[1]" :src="project.images[1].src" :alt="project.images[1].alt" />
                        </article>

                        <!-- Card 5: Image -->
                        <article class="bento__card image">
                        <img v-if="project.images[2]" :src="project.images[2].src" :alt="project.images[2].alt" />
                        </article>

                        <!-- Card 3: Skills -->
                        <article class="bento__card skills">
                        <h4 class="skills__heading">Skills Used</h4>
                        <ul class="skills__tags text--small">
                            <li v-for="skill in project.skills" :key="skill" class="skills__tag">{{ skill }}</li>
                        </ul>
                        </article>
                        
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
export default {
    name: "ProjectsShowcase",
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "ProdPad",
                    logo: "@/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "SaaS product for product teams to build flexible roadmaps and manage backlogs.",
                    goals: "Enhance the UI/UX of the SaaS platform, bugfixes and pixel perfect new features builded with accessibility in mind. Components created for reusability to prepare the platform for growth.",
                    role: "Front-end developer using Vue 3.",
                    outcome: "Improved user experience and WCAG 2.2 AA compliant platform.",
                    link: "https://www.prodpad.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "ProdPad",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Marketing website.",
                    goals: "Build bespoke pixel perfect website with responsive Gutenberg blocks, templates and plugins for CPT.",
                    role: "WordPress developer",
                    outcome: "Improved user experience and achieved near-perfect PageSpeed Insights scores.",
                    link: "https://www.prodpad.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 3,
                    title: "Passion4Social",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Website for a creative agency focused on building accessible and visually engaging websites for non-profits.",
                    goals: "Create bespoke WordPress websites that meet WCAG accessibility guidelines.",
                    role: "Lead WordPress developer responsible for custom designs, implementing features, and ensuring responsive mobile-first designs.",
                    outcome: "Delivered multiple WCAG-compliant websites that increased client visibility and engagement.",
                    link: "https://passion4social.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 4,
                    title: "Royal Hospital for Children and Young People",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Informational Website for Children hospital in Edinburgh containing helpful information for young patients and their parents.",
                    goals: "Create an engagening and colorful website with well organised sections and a search feature to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://children.nhslothian.scot/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "Just Enterprise",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Website for a Business Support for Social Enterprises in Scotland.",
                    goals: "Provide an accessible and responsive website for patients and families to easily find information.",
                    role: "Front-end developer ensuring WCAG compliance and optimized performance.",
                    outcome: "Enhanced website usability and achieved accessibility compliance.",
                    link: "https://justenterprise.org/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 6,
                    title: "Cerebral Palsy Scotland",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Non-profit organization supporting people with cerebral palsy in building skills and confidence.",
                    goals: "Create a responsive and accessible website to increase resource availability and user engagement.",
                    role: "Front-end developer focusing on accessibility, responsive design, and performance optimization.",
                    outcome: "Improved accessibility and increased website visits by 35%.",
                    link: "https://cerebralpalsyscotland.org.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 7,
                    title: "Bytzari",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "E-commerce platform for sustainable, ethical, and purposeful bespoke clothing.",
                    goals: "Develop a visually stunning and highly functional e-commerce platform.",
                    role: "WordPress developer responsible for designing and coding custom templates.",
                    outcome: "Improved user experience and increased sales conversions.",
                    link: "https://bytzari.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 8,
                    title: "ABZ Works",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Website for Aberdeen City Council's employability team to support skills and training.",
                    goals: "Deliver an accessible platform to provide employment resources and training information.",
                    role: "Lead WordPress developer responsible for front-end development and accessibility.",
                    outcome: "Increased resource access and engagement across target demographics.",
                    link: "https://abzworks.co.uk/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 9,
                    title: "Environmental Key Fund",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Grant platform for North Lanarkshire focused on environmental initiatives.",
                    goals: "Design a user-friendly and responsive site to simplify grant applications.",
                    role: "Front-end developer ensuring intuitive navigation and responsive design.",
                    outcome: "Increased grant applications by 20% post-launch.",
                    link: "https://environmentalkeyfund.com/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                },
                {
                    id: 10,
                    title: "Scottish Communities Finance",
                    logo: "/assets/prodpad-1.jpg",
                    showDropdown: false,
                    description: "Website enabling reinvestment into local Scottish communities.",
                    goals: "Develop an accessible and responsive platform to encourage community funding initiatives.",
                    role: "Front-end developer focusing on performance and accessibility.",
                    outcome: "Improved community engagement and funding participation.",
                    link: "https://scotcomfinance.scot/",
                    skills: ["Vue 3", "TailwindCSS", "WCAG Compliance", "Performance Optimization"],
                    images: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
                        },
                    ],
                    tools: [
                        {
                            src: "/assets/prodpad-1.jpg",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "/assets/prodpad-2.jpg",
                            alt: "ProdPad Roadmap",
                        },
                        {
                            src: "/assets/prodpad-3.jpg",
                            alt: "ProdPad Backlog",
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

        .col-4 {
            grid-template-columns: repeat(1, 1fr);
            @include breakpoint-up(lg) {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    .bento__card {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        padding: $padding-large;

        grid-column: span 2;
        grid-row: span 2;
        display: flex;
        flex-direction: column;

        .project {
            &__header {
                display: flex;
                // flex: 1 1 0;
                align-items: center;
                // justify-content: space-between;
                justify-content: flex-start;
                margin-bottom: $padding-large;

                .project__logo {
                    height: 60px;
                    width: 60px;
                    border-radius: 50%;
                    margin-right: $padding-large;
                }
                .project__title {
                //   font-size: 1.5rem;
                //   font-weight: bold;
                    flex-grow: 1;
                    text-align: left;
                }
                .dropdown {
                    display: flex;
                    justify-content: flex-end;
                    position: relative;
                    // width: 100%;

                    &__toggle {
                        background: none;
                        border: none;
                        cursor: pointer;
                        font-size: 1.2rem;
                        font-weight: bold;
                    }

                    &__menu {
                        display: none;
                        position: absolute;
                        right: 0;
                        background: white;
                        border: 1px solid #ddd;
                        list-style: none;
                        padding: 0.5rem;
                        border-radius: 8px;

                        li {
                            margin: 0;
                            a {
                                text-decoration: none;
                                color: #007bff;
                                &:hover {
                                    color: #0056b3;
                                }
                            }
                        }
                    }

                    &:hover .dropdown__menu {
                        display: block;
                    }
                }
            }

            &__image {
                flex: 1;
                width: 100%;
                height: auto;
                margin-bottom: 1rem;
            }

            &__content {
                margin-bottom: auto;
                p {
                    line-height: 1.5;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
            }

            &__footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;

                .project__client {
                    font-weight: bold;
                }
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
                width: 50px;
                height: 50px;
            }

            .skills__tags {
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                padding: 0;
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
                width: 100%;
                height: auto;
                border-radius: 12px;
            }
        }
    }
}

// .projects {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 2rem;
//     margin-top: 2rem;
// }
// .portfolio {
//     &__card {
//         display: flex;
//         flex-direction: column;
//         gap: 1.5rem;
//         margin-bottom: 2rem;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         border-radius: 12px;
//         overflow: hidden;
//         text-align: left;
//     }
//     .project {
//         &__image {
//             width: 100%;
//             height: auto;
//         }
//         &__content {
//             padding: $spacing-lg;
//             flex: 1;
//         }
//         &__title {}
//         &__description {}
//         &__details {}
//         &__link {
//             display: inline-block;
//             margin-top: 1rem;
//             padding: 0.5rem 1rem;
//             background-color: #007BFF;
//             color: white;
//             text-decoration: none;
//             border-radius: 6px;
//             transition: background-color 0.3s;
//             &:hover {
//                 background-color: #0056b3;
//             }
//         }
//     }
// }
</style>


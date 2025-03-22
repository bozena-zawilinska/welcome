<template>
    <div class="page page--work">
        <h1 class="visually-hidden">My Work</h1>
        <section class="work__intro">
            <div class="work__image">
                <img src="@/assets/avatar-bz-3.png" alt="" />
                <div class="shadow"></div>
            </div>
            <div class="container work__text-group">
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
            </div>

        </section>
        <section class="work__resume">

            <h2 class="work__heading">Featured Projects</h2>
            <div class="resume-container">
                <div 
                    v-for="project in projects.slice(0, 4)" 
                    :key="project.id" 
                    class="container resume-card"
                >
                    <header class="card__header">
                        <h3 class="card__title">{{ project.title }}</h3>
                        <img class="card__logo" :src="getProjectPath(project.logo)" :alt="`${project.title} logo`" />
                    </header>
                    <!-- <h1 class="animated-heading">About Me</h1> -->
                    <h4 class="card__subtitle text--base">
                        {{ project.role }}
                    </h4>
                    <p class="card__summary" :class="{ 'hide': project.showDetails }" >
                        {{ project.summary }}
                    </p>

                    <!-- Full Description -->
                    <div class="card__details" :class="{ 'show': project.showDetails }" aria-expanded="true">
                        <p v-for="(line, index) in project.description.split('\n')" :key="index">
                            {{ line }}
                        </p>
                            <div class="tablet-frame">
                                <div class="image-container">
                                    <img class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" width="500" height="281"/>
                                </div>
                            </div>
                    </div>
                    <div class="group-buttons">
                        <button class="link-underline" @click.stop="toggleDetails(project)" :aria-expanded="project.showDetails">
                            {{ project.showDetails ? 'Show less' : 'Show more' }}
                            <i class="fa" :class="project.showDetails ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
                        </button>
        
                        <button class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                            <span class="project__footer-text">View live </span>
                            <font-awesome-icon icon="arrow-up-right-from-square" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="work__portfolio">
            
            <div class="shade shade--soft-red"></div>
            <!-- Other Projects -->
            <h2 class="work__heading">Other Projects</h2>
            <div class="bento-grid bento-grid--100">
                <div 
                    v-for="(project, index) in projects.slice(4)" 
                    :key="project.id" 
                    class="bento-item"
                    :class="{ 'is-visible': project.isVisible, 'left-col': index % 2 === 0, 'right-col': index % 2 !== 0 }"
                    :style="{ '--delay': (Math.floor(index / 2) * 0.4) + 's' }"
                    ref="bentoItems"
                >

                    <!-- Image Card with Overlay -->
                    <div class="bento__card image-container">
                        <img class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />

                        <!-- Overlay Description -->
                        <div class="overlay" :class="{ 'show': project.showDetails }">
                        <p v-for="(line, index) in project.description.split('\n')" :key="index">
                            {{ line }}
                        </p>
                        <button class="button button--secondary" @click.stop="showDetails(project.id)">
                            Hide Details
                        </button>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="bento__actions">
                        <button class="button button--secondary" @click="showDetails(project.id)">
                        Show Details
                        </button>
                        <button class="button button--primary" :href="project.link" target="_blank" rel="noopener noreferrer">
                        Visit website <font-awesome-icon icon="arrow-up-right-from-square" />
                        </button>
                    </div>
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
            <p>My approach ensures that every website is not only visually stunning but also <strong>accessible</strong>, providing an inclusive experience for all users—because great design should work for everyone.</p>
            <a href="/contact" class="footer__contact-btn">Get in Touch</a>
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
                    title: "ProdPad - SaaS Platform",
                    logo: "prodpad/logo.png",
                    role: "Frontend Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
                    description: "As a Front-end Developer at ProdPad, I collaborated closely with the Product and Design teams to enhance UI/UX, develop new features and improve accessibility. My work focused on building reusable components, maintaining clean and well-documented code, and ensuring consistency using ESLint for formatting and best practices. I frequently interacted with backend APIs, handling data fetching for users and accounts to deliver seamless product experiences.",
                    
                    link: "https://www.prodpad.com/sandbox/",
                    skills: ["VUE 3", "HTML 5", "Sassy CSS 💅", "JavaScript", "RESTful APIs"],
                    tools: ["Git", "npm", "Vite", "ESLint", "Figma" ],
                    images: [
                        {
                            src: "prodpad/prodpad-app-dashboard.png",
                            alt: "ProdPad Dashboard",
                        },
                        {
                            src: "prodpad/prodpad-app-product-portfolio.png",
                            alt: "ProdPad Product Portfolio",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "ProdPad - Marketing Website",
                    logo: "prodpad/logo.png",
                    role: "WordPress Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
                    description: "As the sole Website Developer at ProdPad, I developed a library of 20+ custom Gutenberg blocks, enabling the Marketing team to build flexible and engaging pages with ease. The project prioritized SEO, performance, and accessibility to enhance user experience and search rankings. My work contributed to a modern, high-performing website aligned with brand and business goals.",
                    
                    link: "https://www.prodpad.com/",
                    skills: ["PHP", "HTML & SCSS", "JavaScript", "Webpack", "WordPress (custom themes & blocks)"],
                    tools: ["ACF PRO", "BrowserStack", "GitHub", "Figma"],
                    images: [
                        {
                            src: "prodpad/prodpad-homepage.png",
                            alt: "ProdPad Homepage",
                        },
                        {
                            src: "prodpad/prodpad-glossary-page.png",
                            alt: "ProdPad Glossary",
                        },
                    ],
                },
                {
                    id: 3,
                    title: "Passion4Social",
                    logo: "p4s/logo.png",
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
                    description: "As Lead Web Developer at Passion4Social, I built high-quality, accessible WordPress websites, transforming designs into performant, client-ready sites. I managed the full development lifecycle, from setup on 20i hosting to local development with Local by Flywheel and final deployment. My role included site migrations, performance optimization, and maintaining high coding standards.",
                    
                    link: "https://passion4social.com/",
                    skills: ["PHP", "HTML & CSS", "jQuery", "Responsive Design", "Website deployment & maintenance"],
                    tools: ["WordPress", "Genesis Framework", "Local by Flywheel", "Beanstalk", "FileZilla (SFTP)"],
                    images: [
                        {
                            src: "p4s/p4s-homepage.png",
                            alt: "P4S Homepage",
                        },
                        {
                            src: "p4s/p4s-website-portfolio.png",
                            alt: "P4S Portfolio",
                        },
                    ],
                },
                {
                    id: 4,
                    title: "Royal Hospital for Children and Young People",
                    logo: "nhs/logo.svg",
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
                    description: "I led the development of an accessible, user-friendly platform for NHS Lothian, designed to support children, young people, parents, carers, and healthcare professionals. The site features interactive guides to help children understand hospital procedures, along with practical resources like accommodation, financial assistance, and wellbeing support. I ensured a seamless, user-friendly experience, focusing on accessibility, responsiveness, and performance throughout the development lifecycle.",
                    
                    link: "https://children.nhslothian.scot/",
                    skills: ["PHP", "HTML & CSS", "jQuery", "Responsive Design", "Website deployment & maintenance"],
                    tools: ["WordPress", "Genesis Framework", "Local by Flywheel", "Beanstalk", "FileZilla (SFTP)"],
                    images: [
                        {
                            src: "nhs/nhs-landing-page.png",
                            alt: "NHS Landing Page",
                        },
                        {
                            src: "nhs/nhs-website-children.png",
                            alt: "Royal Hospital for Children and Young People",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "Just Enterprise",
                    logo: "just-enterprise/logo.png",
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
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
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
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
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
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
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
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
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
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
                    role: "Website Developer",
                    summary: "Short description of the project.",
                    showDetails: false,
                    description: "Website enabling reinvestment into local Scottish communities.",
                    link: "https://scotcomfinance.scot/",
                    skills: ["HTML", "CSS", "PHP", "WordPress", "Genesis Framework", "ACF"],
                    tools: ["WordPress CMS", "ACF PRO", "VS Code", "GitHub", "Google PageSpeed", ""],
                    images: [
                        {
                            src: "scf/scf-website.png",
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
    mounted() {
        this.observeBentoItems();
    },
    methods: {
        getProjectPath(project) {
            // console.log(project);
            return require(`@/assets/projects/${project}`);
        },
        toggleDropdown(id) {
            this.projects.forEach((project) => {
                project.showDetails = project.id === id ? !project.showDetails : false;
            });
        },
        toggleDetails(project) {
            project.showDetails = !project.showDetails;
        },
        showDetails(id) {
            this.projects = this.projects.map(project =>
                project.id === id ? { ...project, showDetails: !project.showDetails } : project
            );
        },
        observeBentoItems() {
            const options = {
                root: null,
                threshold: 0.3, // Trigger when 30% of the item is visible
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
                });
            }, options);

            this.$nextTick(() => {
                this.$refs.bentoItems.forEach((item) => {
                observer.observe(item);
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.work {
    &__intro {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        margin-bottom: 5rem;
        flex-direction: column;
        @include breakpoint-up(lg) {    
            align-items: center;
            flex-direction: row;
        }
    }
    &__image {
        flex: 1;
        max-width: 300px;
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        margin-top: 160px; 
        @include breakpoint-up(lg) {    
            margin-top: 0;
        } 

        img {
            position: absolute;
            margin-right: -1rem;
            height: 400px;
            width: auto;
            filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.3));
            z-index: -1;
            left: 10%;
            @include breakpoint-up(lg) {    
                left: unset;
                z-index: 1;
            }
        }

        .shadow {
            position: absolute;
            width: 160px;
            height: 65px;
            background: rgba(157, 157, 157, 0.5);
            filter: blur(16px);
            border-radius: 50%;
            z-index: -1;
            display: none;
            @include breakpoint-up(lg) {    
                display: block;
                bottom: -1vh;
                left: 15%;
            }
            @include breakpoint-up(xl) {    
                bottom: -3vh;
                // left: 5vw;
            }
        }
    }
    &__text-group {
        flex: 2;
        background: $red-background;
        border-radius: 20px;
        box-shadow: 5px 5px 20px rgba(#CBCDD3, 10%);
        perspective: 40px;



        // .work__heading {
        //     color: white;
        // }
    }  

    &__portfolio {

    }
}

.bento-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 3rem;
    margin: 3rem 0;

    // &--70-30 {

    //     .bento-item {
    //         display: flex;
    //         gap: 1.5rem;
    //         flex-direction: column;

    //         // background: rgb(245, 245, 247);
    //         background: #f4f4f7;
    //         // background-color: $green-white;
    //         border-radius: 12px;
    //         overflow: hidden;
    //         padding: $padding-large;
    
    //         .row {
    //             display: flex;
    //             flex-direction: column;
    //             flex: 1;
    //             gap: 1.5rem;
    //         }
    
    
    //         @include breakpoint-up(xl) {    
    //             .row {
    //                 flex-direction: row;
    //                 max-height: 320px; // required to align the cards with the image column
    //             }
    
    //             #row-2 {
    //                 .bento__card.image {
    //                     flex: 0 0 66.66%;
    //                 }
    //             }
    //             #row-3 {
    //                 .bento__card.project {
    //                     flex: 0 0 33.33%;
    //                 }
    //             }
    //         }
    //     }
    // }

    /* Bento Grid Full width */
    &--100 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        @include breakpoint-up(md) {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
        @include breakpoint-up(xl) {
            grid-template-columns: repeat(2, minmax(400px, 1fr));
        }

        /* Bento Item */
        .bento-item {
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            transition: transform 0.2s ease;
            padding: 1.5rem;
            gap: 1.5rem;
            position: relative;
            overflow: hidden;

            &:hover {
                transform: translateY(-5px);
            }

            /* Image Container */
            .image-container {
                overflow: hidden;
                // cursor: pointer;
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
        border-radius: 16px;
        // overflow: hidden;
        // padding: $padding-large;
        display: flex;
        flex-direction: column;
        gap: $padding-large;
        position: relative;
        filter: drop-shadow(4px 4px 4px rgba(233, 240, 243, 0.5));
        border: 4px solid rgba(233, 240, 243, 0.5);
        // box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;

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

        &.group-cards {
            flex: 1;
            justify-content: center;
            text-align: left;
        }


        // .tools, .skills {
        //     grid-column: span 1;
        //     display: flex;
        //     flex-direction: column;
        //     align-items: center;

        //     @include breakpoint-up(lg) {
        //         flex-direction: row;
        //         justify-content: start;
        //         align-items: flex-start;
        //         text-align: left;
        //         gap: $padding-large;
        //         h4 {
        //             flex: 0 0 33%;
        //         }
        //         .skills__tags {
        //             flex: 1;
        //         }
        //     }

        //     .skills__tags {
        //         // display: flex;
        //         // flex-direction: column;
        //         // flex-wrap: wrap;
        //         // white-space:
        //         list-style: none;
        //         padding: 0;
        //         margin: 0;
        //         width: 100%;
        //         // gap: 8px;
        //     }

        //     .skills__tag {
        //         display: list-item;
        //         // width: fit-content;
        //         // padding: $spacing-xs;
        //         // // margin: $spacing-xs;
        //         // background: #f0f0f0;
        //         // border-radius: 12px;
        //         &::before {
        //             content: "✔️";
        //             text-align: center;
        //             color: transparent;
        //             text-shadow: 0 0 $rosemary;
        //             margin-right: $spacing-xs;
        //         }
        //     }
        // }

        

        // &.image {
        //     grid-column: span 1;

        //     img {
        //         flex: 1;
        //         width: 100%;
        //         height: auto;
        //         aspect-ratio: 16 / 9;
        //         // object-fit: scale-down;
        //         object-fit: cover;
        //         display: block;

        //         border-radius: 12px;
        //         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


        //     }
        // }

        /* Overlay Description */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            // padding: 1.5rem;
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.3s ease, transform 0.3s ease;
            overflow-wrap: break-word;
            word-wrap: break-word;
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

// Animations
@media (prefers-reduced-motion: no-preference) {
    .bento-grid {
        // &--70-30 {
        //     .bento-item {
        //         opacity: 0;
        //         transform: translateY(50px) scale(0.95);
        //         transition: opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        //         transition-delay: var(--delay, 0s);
        //         }

        //     .bento-item.is-visible {
        //         opacity: 1;
        //         transform: translateY(0) scale(1);
        //     }
        // }

        &--100 {
            .bento-item {
                opacity: 0;
                transform: scale(0.95);
                transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                transition-delay: var(--delay, 0s);
            }

            .bento-item.left-col {
                transform: translateX(-50px) scale(0.95);
            }

            .bento-item.right-col {
                transform: translateX(50px) scale(0.95);
            }

            .bento-item.is-visible {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@import "../styles/components/media";
.resume-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-lg;
    width: 100%;
    // min-width: 100%;
}

.resume-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: none;

    @include breakpoint-up(xl) {
        // max-width: calc(50% - #{$spacing-lg*2});
        // flex: 1;
    }

    .group-buttons {
        justify-content: space-between;
        margin: 0;
        max-width: 100%;
        button {
            max-width: fit-content;
        }
    }
}

.card {
    /* Header: Title & Logo */
    &__header {
        display: flex;
        justify-content: space-between;
        position: relative;
        word-wrap: break-word;
        gap: $spacing-sm;

        .card__title {
            width: calc(100% - 100px);
        }

        .card__logo {
            width: 50px;
            height: auto;
            position: absolute;
            right: 0;
            @include breakpoint-up(md) {
                width: 70px;
            }
        }
    }

    &__summary {
        transition: max-height 0.3s ease-out;
        // max-height: fit-content;
        overflow: hidden;
        &.hide {
            max-height: 0;
            
        }
    }

    /* Collapsible Details */
    &__details {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        &.show {
            max-height: fit-content;
            margin-bottom: $spacing-lg;
        }
    }
}
</style>


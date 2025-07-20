<template>
  <div class="page page--work">
    <!-- Progress bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <div class="container">
      <h1 class="animated-heading">
        <span class="typing-text">{{ typedText }}</span>
        <span class="cursor" :class="{ typing: isTyping }">|</span>
      </h1>
      <section class="work__intro" aria-labelledby="intro-heading">
        <div class="work__image">
          <div class="image-wrapper">
            <img
              src="@/assets/avatar-bz-3.png"
              aria-hidden="true"
              width="400"
              height="400"
              @load="imageLoaded = true"
            />
            <div class="image-border" aria-hidden="true"></div>
          </div>
          <div class="shadow" aria-hidden="true"></div>
        </div>
        <div class="container work__text-group">
          <h2 id="intro-heading" class="work__heading">
            What I Bring to the Table
          </h2>
          <p>
            With over 3 years of expertise in Vue.js and 5+ years mastering
            WordPress, I specialize in crafting customized templates and
            Gutenberg blocks that meet the unique needs of each project. As the
            sole web developer in my current role, I've taken full ownership of
            building, and optimizing ProdPad website, achieving near-perfect
            PageSpeed scores for both desktop and mobile.
            <!-- I specialise in building interactive, accessible, and high-performing web applications.
                    With an eye for detail and a passion for clean code, I transform designs into seamless
                    user experiences that stand out. -->
          </p>
          <p>
            With an eye for detail and a passion for clean code, I transform
            designs into seamless user experiences that stand out.
            <strong>My mission?</strong> To create digital solutions that are
            fast, functional, and future-proof. Whether you’re looking for
            seamless performance, inclusive design, or tailored web
            functionality, I’m here to bring your vision to life.
          </p>
        </div>
      </section>
      <section class="work__featured" aria-labelledby="featured-projects">
        <h2 id="featured-projects" class="section-title">Featured Projects</h2>
        <div class="featured-grid">
          <div
            v-for="project in projects.slice(0, 4)"
            :key="project.id"
            :data-project-id="project.id"
            class="featured-card"
            :class="{ 'is-expanded': project.showDetails }"
          >
            <header class="card__header">
              <h3 class="card__title">{{ project.title }}</h3>
              <img
                class="card__logo"
                :src="getProjectPath(project.logo)"
                :alt="`${project.title} logo`"
              />
            </header>

            <div class="card__content">
              <h4 class="card__subtitle">{{ project.role }}</h4>
              <p class="card__summary" :class="{ hide: project.showDetails }">
                {{ project.summary }}
              </p>
            </div>

            <div
              class="card__details"
              :class="{ show: project.showDetails }"
              :aria-expanded="project.showDetails"
            >
              <p
                v-for="(line, index) in project.description.split('\n')"
                :key="index"
                class="details__text"
              >
                {{ line }}
              </p>
              <div class="project__showcase">
                <div class="showcase__image">
                  <img
                    class="project__image"
                    :src="getProjectPath(project.images[0].src)"
                    :alt="project.images[0].alt"
                  />
                </div>
                <!-- Skills badges -->
                <div class="project__skills" v-if="project.skills">
                  <span
                    v-for="skill in project.skills"
                    :key="skill"
                    class="skill-badge"
                    @mouseenter="animateSkill"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <div class="card__actions">
              <button
                class="action-button action-button--toggle"
                @click="toggleDetails(project)"
                :aria-expanded="project.showDetails"
                :aria-controls="'project-' + project.id"
              >
                {{ project.showDetails ? 'Show less' : 'Show more' }}
                <ChevronUpIcon v-if="project.showDetails" class="hero-icon" />
                <ChevronDownIcon v-else class="hero-icon" />
              </button>

              <a
                class="action-button action-button--primary"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="work__portfolio">
        <h2 class="section-title">Other Projects</h2>
        <div class="portfolio-grid">
          <div
            v-for="(project, index) in projects.slice(4)"
            :key="project.id"
            class="portfolio-card"
            :class="{ 'is-visible': project.isVisible }"
            :style="{ '--delay': Math.floor(index / 2) * 0.2 + 's' }"
            ref="portfolioItems"
          >
            <div class="card__image-container">
              <img
                class="project__image"
                :src="getProjectPath(project.images[0].src)"
                :alt="project.images[0].alt"
              />
              <div class="card__overlay" :class="{ show: project.showDetails }">
                <p
                  v-for="(line, index) in project.description.split('\n')"
                  :key="index"
                  class="overlay__text"
                >
                  {{ line }}
                </p>
              </div>
            </div>

            <div class="card__info">
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__role">{{ project.role }}</p>
            </div>

            <div class="card__actions">
              <button
                class="action-button action-button--secondary"
                @click="showDetails(project.id)"
              >
                {{ project.showDetails ? 'Hide' : 'Show' }} Details
              </button>
              <a
                class="action-button action-button--primary"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="work__cta">
        <div class="cta__content">
          <h2 class="cta__heading">🌱 Let's bring your vision to life!</h2>
          <p>
            Whether you need a custom-built solution, a performance boost, or a
            more accessible website,
            <a href="/contact" class="cta__link"> >I’m here to help.</a>
          </p>
        </div>
      </div>
    </div>

    <div class="shade shade--blue-bell"></div>
    <div class="shade shade--wisteria shade--secondary"></div>
    <div class="shade shade--lavender shade--tertiary"></div>

    <!-- Scroll to top button -->
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="scroll-to-top show"
      aria-label="Scroll to top"
    >
      <svg
        class="scroll-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'ProjectsShowcase',
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      imageLoaded: false,
      typedText: '',
      isTyping: true,
      fullText: 'My Work',
      typingSpeed: 150,
      showScrollButton: false,
      scrollProgress: 0,
      projects: [
        {
          id: 1,
          title: 'ProdPad - SaaS Platform',
          logo: 'prodpad/logo.png',
          role: 'Frontend Developer',
          summary:
            'Enhanced user experience and accessibility for a product management SaaS platform, building reusable Vue.js components and integrating with RESTful APIs.',
          showDetails: false,
          description:
            'As a Frontend Developer at ProdPad, I collaborated closely with Product and Design teams to enhance UI/UX, develop new features, and improve accessibility across the platform. I built reusable Vue.js components following best practices, maintained clean and well-documented code, and ensured consistency using ESLint. My work involved integrating multiple third-party APIs including Recurly for payment processing and subscription management, HubSpot API for CRM integration, and analytics platforms like Segment, Mixpanel, and PostHog for comprehensive user tracking. I also integrated Help Scout for seamless customer support functionality. I implemented responsive designs, optimized performance through code splitting and lazy loading, and created intuitive user interfaces that streamlined product management workflows. My contributions led to improved user satisfaction, increased platform adoption, and enhanced data-driven decision making through better analytics integration.',

          link: 'https://www.prodpad.com/sandbox/',
          skills: [
            'VUE 3',
            'HTML 5',
            'Sassy CSS 💅',
            'JavaScript',
            'RESTful APIs',
          ],
          tools: ['Git', 'npm', 'Vite', 'ESLint', 'Figma'],
          images: [
            {
              src: 'prodpad/prodpad-app-dashboard.png',
              alt: 'ProdPad Dashboard',
            },
            {
              src: 'prodpad/prodpad-app-product-portfolio.png',
              alt: 'ProdPad Product Portfolio',
            },
          ],
        },
        {
          id: 2,
          title: 'ProdPad - Marketing Website',
          logo: 'prodpad/logo.png',
          role: 'WordPress Developer',
          summary:
            'Developed 20+ custom Gutenberg blocks and optimized website performance, achieving 95+ PageSpeed scores while enabling flexible content management for marketing teams.',
          showDetails: false,
          description:
            'As the sole Website Developer at ProdPad, I architected and developed a comprehensive library of 20+ custom Gutenberg blocks, empowering the Marketing team to create flexible, engaging pages without developer dependency. I integrated multiple marketing and analytics platforms including HubSpot API for seamless form submission and lead capture, LinkedIn advertising pixels for targeted campaign tracking, Google Analytics for comprehensive website performance monitoring, Segment for unified customer data collection, and PostHog for advanced user behavior analytics. These integrations provided the marketing team with powerful insights into user journeys, conversion optimization, and campaign effectiveness. I prioritized SEO optimization, performance enhancement, and WCAG accessibility compliance to improve search rankings and user experience. Using modern WordPress development practices, I implemented custom post types, advanced custom fields, and responsive designs. The project resulted in a 40% improvement in page load times, 95+ PageSpeed scores, enhanced marketing attribution accuracy, and significantly reduced content deployment time for marketing campaigns.',

          link: 'https://www.prodpad.com/',
          skills: [
            'PHP',
            'HTML & SCSS',
            'JavaScript',
            'Webpack',
            'WordPress (custom themes & blocks)',
          ],
          tools: ['ACF PRO', 'BrowserStack', 'GitHub', 'Figma'],
          images: [
            {
              src: 'prodpad/prodpad-homepage.png',
              alt: 'ProdPad Homepage',
            },
            {
              src: 'prodpad/prodpad-glossary-page.png',
              alt: 'ProdPad Glossary',
            },
          ],
        },
        {
          id: 3,
          title: 'Passion4Social',
          logo: 'p4s/logo.png',
          role: 'Website Developer',
          summary:
            'Led full-stack WordPress development managing the complete project lifecycle from local development to deployment, delivering high-quality accessible websites for diverse clients.',
          showDetails: false,
          description:
            'As Lead Web Developer at Passion4Social, I managed the complete website development lifecycle for multiple client projects, from initial setup to final deployment. I built high-quality, accessible WordPress websites using the Genesis Framework, transforming client designs into performant, SEO-optimized sites. My responsibilities included local development setup using Local by Flywheel, version control with Beanstalk, and deployment to 20i hosting. I performed site migrations, implemented performance optimizations, and maintained high coding standards across all projects. This role required strong project management skills, client communication, and the ability to deliver pixel-perfect websites on tight deadlines.',

          link: 'https://passion4social.com/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'Website deployment & maintenance',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla (SFTP)',
          ],
          images: [
            {
              src: 'p4s/p4s-homepage.png',
              alt: 'P4S Homepage',
            },
            {
              src: 'p4s/p4s-website-portfolio.png',
              alt: 'P4S Portfolio',
            },
          ],
        },
        {
          id: 4,
          title: 'Royal Hospital for Children and Young People',
          logo: 'nhs/logo.svg',
          role: 'Website Developer',
          summary:
            'Developed an accessible, user-friendly healthcare platform for NHS Lothian, featuring interactive guides and comprehensive resources for children, families, and healthcare professionals.',
          showDetails: false,
          description:
            'I led the development of a comprehensive healthcare platform for NHS Lothian, designed to support children, young people, parents, carers, and healthcare professionals. The site features interactive guides that help children understand hospital procedures, reducing anxiety through clear explanations and visual aids. I implemented practical resources including accommodation booking, financial assistance information, and wellbeing support tools. The project required strict adherence to NHS accessibility standards and healthcare compliance regulations. I focused on creating an intuitive, child-friendly interface while maintaining professional functionality for healthcare staff, ensuring the platform serves diverse user needs effectively.',

          link: 'https://children.nhslothian.scot/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'Website deployment & maintenance',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla (SFTP)',
          ],
          images: [
            {
              src: 'nhs/nhs-landing-page.png',
              alt: 'NHS Landing Page',
            },
            {
              src: 'nhs/nhs-website-children.png',
              alt: 'Royal Hospital for Children and Young People',
            },
          ],
        },
        {
          id: 5,
          title: 'Just Enterprise',
          logo: 'just-enterprise/logo.png',
          role: 'Website Developer',
          showDetails: false,
          description:
            'Provided ongoing website improvements and maintenance for Just Enterprise, a key organization supporting social enterprises across Scotland. My work included regular updates to content, troubleshooting technical issues, implementing new features, and ensuring optimal website performance.',
          link: 'https://justenterprise.org/',
          skills: [
            'Vue 3',
            'TailwindCSS',
            'WCAG Compliance',
            'Performance Optimization',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'just-enterprise/just-enterprise-website.png',
              alt: 'ProdPad Dashboard',
            },
          ],
        },
        {
          id: 6,
          title: 'Cerebral Palsy Scotland',
          logo: 'cps/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          description:
            'Provided regular website improvements and maintenance for Cerebral Palsy Scotland, a vital charity supporting individuals with cerebral palsy. My ongoing work included content updates and technical troubleshooting. I maintained the sites performance and functionality while supporting the organizations mission to better serve their community.',
          link: 'https://cerebralpalsyscotland.org.uk/',
          skills: [
            'Vue 3',
            'TailwindCSS',
            'WCAG Compliance',
            'Performance Optimization',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'cps/cps-website.png',
              alt: 'ProdPad Dashboard',
            },
          ],
        },
        {
          id: 7,
          title: 'Bytzari',
          logo: 'tzari/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          description:
            'I developed the complete website from scratch, implementing custom product showcase features, responsive design, and optimized performance for mobile-first shopping experiences. The platform effectively communicates the brands ethical values while providing a seamless shopping experience that converts visitors into customers.',
          link: 'https://bytzari.com/',
          skills: [
            'Vue 3',
            'TailwindCSS',
            'WCAG Compliance',
            'Performance Optimization',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'tzari/tzari-website.png',
              alt: 'ProdPad Dashboard',
            },
          ],
        },
        {
          id: 8,
          title: 'ABZ Works',
          logo: 'abz-works/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          description:
            'I built the complete website and trained ABotZ chatbot to give simple answers leading user quickly to the right content on the website. The platform is packed with useful guides and content ensuring users receive immediate assistance throughout their employment journey.',
          link: 'https://abzworks.co.uk/',
          skills: [
            'Vue 3',
            'TailwindCSS',
            'WCAG Compliance',
            'Performance Optimization',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'abz-works/abz-works-website.png',
              alt: 'ProdPad Dashboard',
            },
          ],
        },
        {
          id: 9,
          title: 'Environmental Key Fund',
          logo: 'ekf/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          description:
            'Developed a grant application platform for the Environmental Key Fund, North Lanarkshire Councils initiative supporting local environmental projects.',
          link: 'https://environmentalkeyfund.com/',
          skills: [
            'Vue 3',
            'TailwindCSS',
            'WCAG Compliance',
            'Performance Optimization',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'ekf/ekf-website.png',
              alt: 'ProdPad Dashboard',
            },
          ],
        },
        {
          id: 10,
          title: 'Scottish Communities Finance',
          logo: 'scf/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          description:
            'Built a community finance platform for Scottish Communities Finance, designed to promote and facilitate reinvestment in local Scottish communities. I implemented project showcase systems, impact reporting tools, and community engagement features that connect investors with local initiatives.',
          link: 'https://scotcomfinance.scot/',
          skills: [
            'HTML',
            'CSS',
            'PHP',
            'WordPress',
            'Genesis Framework',
            'ACF',
          ],
          tools: [
            'WordPress CMS',
            'ACF PRO',
            'VS Code',
            'GitHub',
            'Google PageSpeed',
            '',
          ],
          images: [
            {
              src: 'scf/scf-website.png',
              alt: 'Scottish Communities Finance Website',
            },
          ],
        },
      ],
      skills: [
        {
          id: 1,
          title: 'Industry Knowledge',
          items: [
            'Web Development (Front-end and WordPress)',
            'Accessibility Best Practices (WCAG Compliance)',
            'Performance Optimization (PageSpeed Insights, Lighthouse)',
            'Responsive Web Design',
          ],
        },
        {
          id: 2,
          title: 'Tools & Technologies',
          items: [
            'Programming: Vue 3, JavaScript (ES6+), HTML5, CSS3, SCSS',
            'Frameworks & Libraries: TailwindCSS, Nuxt.js, Bootstrap',
            'Content Management: WordPress, ACF Pro',
            'Version Control: Git, GitHub, GitLab',
            'Testing & Debugging: Chrome DevTools, Lighthouse',
            'Performance Tools: PageSpeed Insights, WebPageTest',
          ],
        },
        {
          id: 3,
          title: 'Interpersonal Skills',
          items: [
            'Independent Problem Solving',
            'Collaboration and Communication',
            'Time Management',
            'Attention to Detail',
          ],
        },
      ],
    }
  },
  mounted() {
    this.startTypingAnimation()
    this.observeElements()
    this.setupScrollListener()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    startTypingAnimation() {
      let index = 0
      const typeCharacter = () => {
        if (index < this.fullText.length) {
          this.typedText += this.fullText.charAt(index)
          index++
          setTimeout(typeCharacter, this.typingSpeed)
        } else {
          this.isTyping = false
          setTimeout(() => {
            this.isTyping = true
          }, 1000)
        }
      }

      setTimeout(typeCharacter, 500)
    },

    setupScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      this.showScrollButton = window.pageYOffset > 300

      // Calculate scroll progress
      const scrollTop = window.pageYOffset
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.scrollProgress = (scrollTop / documentHeight) * 100
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    getProjectPath(project) {
      // console.log(project);
      return require(`@/assets/projects/${project}`)
    },
    toggleDropdown(id) {
      this.projects.forEach((project) => {
        project.showDetails = project.id === id ? !project.showDetails : false
      })
    },
    toggleDetails(project) {
      project.showDetails = !project.showDetails

      // Add a small delay to make the transition smoother
      this.$nextTick(() => {
        const projectElement = this.$el.querySelector(
          `[data-project-id="${project.id}"]`
        )
        if (projectElement) {
          projectElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          })
        }
      })
    },
    showDetails(id) {
      this.projects = this.projects.map((project) =>
        project.id === id
          ? { ...project, showDetails: !project.showDetails }
          : project
      )
    },
    observeElements() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      }, options)

      // Observe featured cards
      this.$nextTick(() => {
        const featuredCards = this.$el.querySelectorAll('.featured-card')
        featuredCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })

        // Observe portfolio cards
        const portfolioCards = this.$el.querySelectorAll('.portfolio-card')
        portfolioCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })
      })
    },

    // Fun skill badge animation
    animateSkill(event) {
      const badge = event.target
      badge.style.transform = 'scale(1.05) rotate(2deg)'

      setTimeout(() => {
        badge.style.transform = 'scale(1) rotate(0deg)'
      }, 200)

      // Add a sparkle effect
      this.createSparkle(badge)
    },

    // Create sparkle effect
    createSparkle(element) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.position = 'absolute'
      sparkle.style.width = '4px'
      sparkle.style.height = '4px'
      sparkle.style.background = '#1772f3'
      sparkle.style.borderRadius = '50%'
      sparkle.style.pointerEvents = 'none'
      sparkle.style.animation = 'sparkleAnimation 0.6s ease-out forwards'

      const rect = element.getBoundingClientRect()
      sparkle.style.left = rect.left + Math.random() * rect.width + 'px'
      sparkle.style.top = rect.top + Math.random() * rect.height + 'px'

      document.body.appendChild(sparkle)

      setTimeout(() => {
        document.body.removeChild(sparkle)
      }, 600)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.page--work {
  min-height: 100vh;
  padding: 3rem;
  color: $white;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: $padding-large * 2;
  }

  .animated-heading {
    color: $white;
    font-size: $font-size-heading;
    margin-bottom: $spacing-lg * 2;
    text-align: center;
    font-weight: 700;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.6s ease-in-out;

    .typing-text {
      background: linear-gradient(45deg, #1772f3, #4a90e2, #1772f3);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 3s ease-in-out infinite;
    }

    .cursor {
      animation: blink 1s infinite;
      color: #1772f3;
      font-weight: 100;

      &.typing {
        animation: none;
        opacity: 1;
      }
    }
  }

  .section-title {
    color: $white;
    font-size: $font-size-h3;
    margin-bottom: $spacing-lg;
    text-align: center;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}

.work__intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-lg * 2;
  gap: $spacing-lg * 2;
  flex-direction: column;

  @include breakpoint-up(lg) {
    flex-direction: row;
  }

  .work__image {
    .image-wrapper {
      position: relative;
      display: inline-block;

      img {
        width: 300px;
        height: 300px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.02);
          filter: brightness(1.05) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
        }
      }

      .image-border {
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid transparent;
        border-radius: 25px;
        background: linear-gradient(45deg, #1772f3, #4a90e2, #1772f3) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        opacity: 0;
        animation: borderGlow 3s ease-in-out infinite;
      }
    }

    &:hover .image-border {
      opacity: 1;
      animation-play-state: paused;
    }
  }

  .work__text-group {
    flex: 2;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: $padding-large;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);

    .work__heading {
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #1772f3, #4a90e2);
        transition: width 0.5s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .intro__text {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      margin-bottom: $spacing-md;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      font-size: $font-size-base;

      strong {
        position: relative;
        background: linear-gradient(45deg, #1772f3, #4a90e2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -2px;
          right: -2px;
          bottom: 0;
          background: linear-gradient(45deg, #1772f3, #4a90e2);
          opacity: 0.1;
          border-radius: 4px;
          z-index: -1;
        }
      }
    }
  }
}

.work__featured {
  margin-bottom: $spacing-lg * 3;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-lg;

  @include breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.featured-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: $padding-large;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.12);

    &::before {
      left: 100%;
    }
  }

  &.is-expanded {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-md;

    .card__title {
      color: $white;
      font-size: $font-size-h4;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      margin: 0;
    }

    .card__logo {
      width: 60px;
      height: 60px;
      object-fit: contain;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      padding: 8px;
    }
  }

  .card__content {
    margin-bottom: $spacing-md;

    .card__subtitle {
      color: rgba(255, 255, 255, 0.8);
      font-size: $font-size-base;
      margin-bottom: $spacing-sm;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .card__summary {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.5;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      transition: opacity 0.3s ease;

      &.hide {
        opacity: 0;
        height: 0;
        overflow: hidden;
      }
    }
  }

  .card__details {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    margin-bottom: $spacing-md;

    &.show {
      opacity: 1;
      max-height: 1000px;
    }

    .details__text {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      margin-bottom: $spacing-sm;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .project__showcase {
      margin-top: $spacing-lg;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

      .showcase__image {
        position: relative;
        overflow: hidden;

        .project__image {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }

  .card__actions {
    display: flex;
    gap: $spacing-md;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-sm $spacing-md;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: $font-size-base;

  .hero-icon {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }

  &--toggle {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: $white;
      transform: translateY(-2px);
    }
  }

  &--primary {
    background: linear-gradient(135deg, #1772f3 0%, #155ab6 100%);
    color: $white;
    border: 1px solid #1772f3;

    &:hover {
      background: linear-gradient(135deg, #155ab6 0%, #0f4d8b 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(23, 114, 243, 0.3);
    }
  }

  &--secondary {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: $white;
      transform: translateY(-2px);
    }
  }
}

.work__portfolio {
  margin-bottom: $spacing-lg * 3;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-lg;
  margin-top: $spacing-lg * 2;
}

.portfolio-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: $padding-large;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.12);
  }

  .card__image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    .project__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .card__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: $spacing-md;

      &.show {
        opacity: 1;
      }

      .overlay__text {
        color: $white;
        text-align: center;
        line-height: 1.5;
        font-size: $font-size-small;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      }
    }
  }

  .card__info {
    .card__title {
      color: $white;
      font-size: $font-size-h5;
      font-weight: 600;
      margin-bottom: $spacing-xs;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .card__role {
      color: rgba(255, 255, 255, 0.8);
      font-size: $font-size-small;
      margin: 0;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }
  }

  .card__actions {
    display: flex;
    gap: $spacing-sm;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.work__cta {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: $padding-large * 2;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);

  .cta__content {
    position: relative;
    z-index: 1;

    .cta__heading {
      color: $white;
      font-size: $font-size-h3;
      margin-bottom: $spacing-lg;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      position: relative;

      &::after {
        content: '✨';
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
        animation: bounce 2s ease-in-out infinite;
      }
    }

    .cta__text {
      color: rgba(255, 255, 255, 0.9);
      font-size: $font-size-base;
      line-height: 1.6;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      margin: 0;

      .cta__link {
        color: #1772f3;
        text-decoration: underline;
        transition: color 0.3s ease;

        &:hover {
          color: #155ab6;
        }
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(23, 114, 243, 0.1) 0%,
      transparent 70%
    );
    animation: rotateBg 20s linear infinite;
    pointer-events: none;
  }
}

@keyframes rotateBg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-50%);
  }
  40% {
    transform: translateY(-60%);
  }
  60% {
    transform: translateY(-55%);
  }
}

// Typing animation keyframes
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

// Enhanced animated background shades
.shade {
  &--secondary {
    left: 60%;
    top: 20%;
    width: 400px;
    height: 400px;
    animation: float 8s ease-in-out infinite;
    animation-delay: -2s;
  }

  &--tertiary {
    left: 20%;
    top: 70%;
    width: 300px;
    height: 300px;
    animation: float 10s ease-in-out infinite;
    animation-delay: -4s;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

// Progress bar
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #1772f3, #4a90e2);
    transition: width 0.1s ease-out;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
      animation: shimmer 2s ease-in-out infinite;
    }
  }
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

// Small screen adjustments
@media (max-width: 767px) {
  .page--work {
    padding: 2rem 1rem;

    .container {
      padding: $padding-large;
    }
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .work__intro {
    flex-direction: column;
    gap: $spacing-lg;

    .work__image img {
      width: 250px;
      height: 250px;
    }
  }

  .card__actions {
    flex-direction: column;
    align-items: center;
  }
}

// Scroll to top button
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1772f3 0%, #4a90e2 100%);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(23, 114, 243, 0.3);

  &:hover {
    transform: translateY(0px) scale(1.1);
    box-shadow: 0 6px 25px rgba(23, 114, 243, 0.5);
  }

  &:active {
    transform: translateY(0px) scale(0.95);
  }

  .scroll-icon {
    width: 24px;
    height: 24px;
    stroke-width: 2.5;
  }
}

// Show scroll button when needed
.page--work:has(.scroll-to-top) {
  .scroll-to-top {
    opacity: 1;
    transform: translateY(0);
  }
}

// Alternative approach for browsers that don't support :has()
.scroll-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

// Final responsive adjustments
@media (max-width: 767px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;

    .scroll-icon {
      width: 20px;
      height: 20px;
    }
  }
}

// Skill badges styling
.project__skills {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-xs;
  margin-top: $spacing-md;

  .skill-badge {
    display: inline-block;
    background: linear-gradient(
      135deg,
      rgba(23, 114, 243, 0.2),
      rgba(74, 144, 226, 0.2)
    );
    color: rgba(255, 255, 255, 0.9);
    padding: $spacing-xs $spacing-sm;
    border-radius: 20px;
    font-size: $font-size-small;
    font-weight: 500;
    border: 1px solid rgba(23, 114, 243, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    user-select: none;

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(23, 114, 243, 0.3),
        rgba(74, 144, 226, 0.3)
      );
      border-color: rgba(23, 114, 243, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(23, 114, 243, 0.2);
    }
  }
}

// Sparkle animation
@keyframes sparkleAnimation {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

.sparkle {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

// Enhanced animated cards with staggered entrance
.featured-card,
.portfolio-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: var(--delay);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }
}

// Pulse animation for interactive elements
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(23, 114, 243, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(23, 114, 243, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(23, 114, 243, 0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Enhanced card hover effects
.featured-card:hover,
.portfolio-card:hover {
  .card__title {
    background: linear-gradient(45deg, #1772f3, #4a90e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card__logo {
    transform: scale(1.1) rotate(5deg);
    transition: all 0.3s ease;
  }
}

// Interactive button animations
.action-button {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 200px;
    height: 200px;
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  &--primary:hover {
    animation: pulse 2s infinite;
  }
}

// Enhanced image showcase animations
.project__showcase {
  .showcase__image {
    .project__image {
      &:hover {
        transform: scale(1.05);
        filter: brightness(1.1) saturate(1.2);
      }
    }
  }
}

// Card expand animation improvements
.card__details {
  transform: scaleY(0);
  transform-origin: top;

  &.show {
    transform: scaleY(1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

// Logo hover animations
.card__logo {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
}

// Floating animation for background shades
.shade {
  animation: floatEnhanced 12s ease-in-out infinite;

  &--secondary {
    animation-delay: -4s;
    animation-duration: 16s;
  }

  &--tertiary {
    animation-delay: -8s;
    animation-duration: 20s;
  }
}

@keyframes floatEnhanced {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(2deg);
  }
  50% {
    transform: translateY(-10px) translateX(-10px) rotate(0deg);
  }
  75% {
    transform: translateY(-30px) translateX(5px) rotate(-2deg);
  }
}
</style>

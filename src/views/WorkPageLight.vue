<template>
  <div class="page page--work">
    <!-- Progress bar -->
    <div class="progress-bar">
      <div
        class="progress-bar__fill"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>

    <div class="container">
      <h1 class="animated-heading">
        <span class="typing-text">{{ typedText }}</span>
        <span class="cursor" :class="{ typing: isTyping }">|</span>
      </h1>

      <!-- Developer Introduction -->
      <section class="work__intro" aria-labelledby="intro-heading">
        <div class="profile-image">
          <img
            src="@/assets/avatar-bz-3.png"
            alt="Bozena's profile picture"
            width="300"
            height="300"
          />
        </div>

        <div class="intro-content">
          <h2 id="intro-heading" class="intro-heading">
            What I Bring to the Table
          </h2>
          <p class="intro-text">
            With over 3 years of expertise in Vue.js and 5+ years mastering
            WordPress, I specialize in crafting customized templates and
            Gutenberg blocks that meet the unique needs of each project. As the
            sole web developer in my current role, I've taken full ownership of
            building and optimizing ProdPad website, achieving near-perfect
            PageSpeed scores for both desktop and mobile.
          </p>
          <p class="intro-text">
            With an eye for detail and a passion for clean code, I transform
            designs into seamless user experiences that stand out.
            <strong>My mission?</strong> To create digital solutions that are
            fast, functional, and future-proof. Whether you're looking for
            seamless performance, inclusive design, or tailored web
            functionality, I'm here to bring your vision to life.
          </p>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="work__featured" aria-labelledby="featured-projects">
        <h2 id="featured-projects" class="section-title">Featured Projects</h2>
        <div class="featured-projects-grid">
          <div
            v-for="project in projects.slice(0, 4)"
            :key="project.id"
            :data-project-id="project.id"
            class="card featured-card"
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
              <p class="card__description">
                {{ project.summary }}
              </p>
            </div>

            <div
              class="card__details"
              :class="{ show: project.showDetails }"
              :aria-expanded="project.showDetails"
            >
              <div class="details__content">
                <p
                  v-for="(line, index) in project.description.split('\n')"
                  :key="index"
                  class="details__text"
                >
                  {{ line }}
                </p>
                <div
                  class="image-showcase"
                  v-if="project.images && project.images[0]"
                >
                  <img
                    :src="getProjectPath(project.images[0].src)"
                    :alt="project.images[0].alt"
                  />
                </div>
                <!-- Skills badges -->
                <div class="skill-badges" v-if="project.skills">
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
                class="btn btn--secondary"
                @click="toggleDetails(project)"
                :aria-expanded="project.showDetails"
                :aria-controls="'project-' + project.id"
              >
                {{ project.showDetails ? 'Show less' : 'Show more' }}
                <ChevronUpIcon v-if="project.showDetails" class="icon" />
                <ChevronDownIcon v-else class="icon" />
              </button>

              <a
                class="btn btn--primary"
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

      <!-- Portfolio Grid -->
      <section class="work__portfolio">
        <h2 class="section-title">Other Projects</h2>
        <div class="portfolio-grid">
          <div
            v-for="(project, index) in projects.slice(4)"
            :key="project.id"
            class="card portfolio-card"
            :class="{ 'is-visible': project.isVisible }"
            :style="{ '--delay': Math.floor(index / 2) * 0.1 + 's' }"
          >
            <div class="image-showcase">
              <img
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

            <h3 class="card__title">{{ project.title }}</h3>

            <div class="card__actions">
              <button
                class="btn btn--secondary"
                @click="showDetails(project.id)"
              >
                {{ project.showDetails ? 'Hide' : 'Show' }} Details
              </button>
              <a
                class="btn btn--primary"
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

      <!-- Call to Action -->
      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-heading">🌱 Let's bring your vision to life!</h2>
          <p class="cta-text">
            Whether you need a custom-built solution, a performance boost, or a
            more accessible website,
            <a href="/contact" class="text-link">I'm here to help.</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll to top button -->
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="scroll-to-top"
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
  name: 'WorkPage',
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
            'Working closely with the Product and Design teams, I focused on making the platform more intuitive and accessible for all users. I built a library of reusable Vue.js components that made development faster and more consistent across the app.\n\nOne of the exciting parts was integrating various third-party services - from Recurly for handling payments and subscriptions, to HubSpot for managing customer relationships. I also worked with analytics platforms like Segment, Mixpanel, and PostHog to help the team understand how users interact with the product.\n\nThroughout it all, I maintained clean, well-documented code and used ESLint to keep everything consistent. It was rewarding to see how these improvements made the platform easier to use and more reliable for our customers.',
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
            'As the sole website developer, I created a comprehensive library of over 20 custom Gutenberg blocks that completely transformed how our marketing team works. Instead of waiting for developer help, they can now build engaging, professional pages on their own.\n\nI integrated essential marketing tools like HubSpot for seamless form submissions and lead capture, LinkedIn advertising pixels for targeted campaigns, and Google Analytics for detailed performance insights. The best part? I managed to achieve 95+ PageSpeed scores on both desktop and mobile.\n\nSeeing the marketing team go from feeling limited to being completely autonomous in creating beautiful, high-performing pages was incredibly satisfying. They can now focus on strategy and creativity rather than technical constraints.',
          link: 'https://www.prodpad.com/',
          skills: ['PHP', 'HTML & SCSS', 'JavaScript', 'Webpack', 'WordPress'],
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
            'At Passion4Social, I worked closely with my manager and design team who would assign me projects with PDF designs that needed to be brought to life. Each project was unique, but my approach was always the same: study the design carefully, then transform it into clean, accessible code that matched the vision perfectly.\n\nUsing the Genesis Framework as my foundation, I converted creative PDF designs into fast, SEO-optimized websites that looked great on every device. I handled everything from setting up local development environments to managing deployments and ensuring each site met accessibility standards.\n\nWhat I loved most was the challenge of translating static designs into dynamic, functional websites. Whether it was a small local business or a larger organization, each successful launch felt like a win when the final result perfectly matched the original design vision.',
          link: 'https://passion4social.com/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'Website deployment',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla',
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
            'This project was especially meaningful to me - creating a digital space that could help reduce anxiety for children and families during hospital visits. I developed interactive guides that explain medical procedures in child-friendly language, complete with visual aids and reassuring explanations.\n\nThe site serves multiple audiences: children who need age-appropriate information, parents seeking detailed guidance, and healthcare professionals looking for resources. I made sure everything was fully accessible and followed WCAG guidelines, because healthcare information should be available to everyone.\n\nKnowing that this platform might help a scared child feel more prepared for their hospital visit, or give parents the information they need to support their family, made every line of code feel purposeful.',
          link: 'https://children.nhslothian.scot/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'WCAG Compliance',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla',
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
            "Provided ongoing website maintenance and performance optimization for Scotland's leading social enterprise support organization.",
          link: 'https://justenterprise.org/',
          skills: [
            'WordPress',
            'PHP',
            'HTML & CSS',
            'Performance Optimization',
          ],
          images: [
            {
              src: 'just-enterprise/just-enterprise-website.png',
              alt: 'Just Enterprise Website',
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
            'Maintained accessibility-compliant website for vital charity supporting individuals with cerebral palsy and their families.',
          link: 'https://cerebralpalsyscotland.org.uk/',
          skills: ['WordPress', 'PHP', 'HTML & CSS', 'WCAG Compliance'],
          images: [
            {
              src: 'cps/cps-website.png',
              alt: 'Cerebral Palsy Scotland Website',
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
            'Built showcase website for sustainable clothing designer celebrating cultural diversity and challenging fashion industry norms.',
          link: 'https://bytzari.com/',
          skills: ['WordPress', 'Responsive Design', 'PHP', 'Custom Styling'],
          images: [
            {
              src: 'tzari/tzari-website.png',
              alt: 'Bytzari Website',
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
            'Developed comprehensive website with integrated ABotZ chatbot for intelligent user guidance and content discovery.',
          link: 'https://abzworks.co.uk/',
          skills: [
            'WordPress',
            'PHP',
            'Chatbot Integration',
            'WCAG Compliance',
          ],
          images: [
            {
              src: 'abz-works/abz-works-website.png',
              alt: 'ABZ Works Website',
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
            'Created streamlined grant application platform for North Lanarkshire Council supporting local environmental projects.',
          link: 'https://environmentalkeyfund.com/',
          skills: ['WordPress', 'Form Integration', 'Performance Optimization'],
          images: [
            {
              src: 'ekf/ekf-website.png',
              alt: 'Environmental Key Fund Website',
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
            'Built community finance platform promoting accessible financial services and reinvestment in local Scottish communities.',
          link: 'https://scotcomfinance.scot/',
          skills: ['WordPress', 'Financial Integration', 'Community Features'],
          images: [
            {
              src: 'scf/scf-website.png',
              alt: 'Scottish Communities Finance Website',
            },
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
      return require(`@/assets/projects/${project}`)
    },

    toggleDetails(project) {
      project.showDetails = !project.showDetails

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
      this.projects.forEach((project) => {
        project.showDetails = project.id === id ? !project.showDetails : false
      })
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

      this.$nextTick(() => {
        const featuredCards = this.$el.querySelectorAll('.featured-card')
        featuredCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })

        const portfolioCards = this.$el.querySelectorAll('.portfolio-card')
        portfolioCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })
      })
    },

    animateSkill(event) {
      const badge = event.target
      badge.style.transform = 'scale(1.05) rotate(2deg)'

      setTimeout(() => {
        badge.style.transform = 'scale(1) rotate(0deg)'
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Light theme specific styles for work page
.page--work {
  // Global section spacing
  section {
    margin-bottom: 3rem;

    @include breakpoint-down(md) {
      margin-bottom: 2rem;
    }
  }

  // Intro section specific styling
  .work__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: column;

    @include breakpoint-up(lg) {
      flex-direction: row;
    }

    .intro-content {
      flex: 2;

      .intro-heading {
        color: $text-primary;
        font-size: $font-size-h3;
        margin-bottom: 1.5rem;
        font-weight: 600;

        @include breakpoint-down(md) {
          font-size: $font-size-h3-mobile;
        }
      }

      .intro-text {
        color: $text-secondary;
        line-height: 1.6;
        margin-bottom: 1rem;
        font-size: $font-size-base;

        strong {
          @include light-text-gradient;
          font-weight: 600;
        }
      }
    }
  }

  // Featured projects - animation styles are now handled by _light-theme.scss
  // The enhanced .featured-projects-grid provides better layout without stretching issues

  // Portfolio grid
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .portfolio-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    // Image showcase
    .image-showcase {
      margin-bottom: 1rem;
    }

    // Title styling - now direct child of card
    .card__title {
      color: $text-primary;
      font-size: $font-size-h4;
      font-weight: 600;
      margin: 0 0 1rem 0;
      line-height: 1.3;
    }

    // Actions at the bottom
    .card__actions {
      margin-top: auto;
    }

    .card__overlay {
      position: absolute;
      inset: 0;
      background: rgba($text-primary, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: 1rem;
      border-radius: 16px;

      &.show {
        opacity: 1;
      }

      .overlay__text {
        color: $text-inverse;
        text-align: center;
        line-height: 1.5;
        font-size: $font-size-small;
      }
    }
  }

  // Button icons
  .icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  // Text link styling
  .text-link {
    color: $interactive-primary;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: $gradient-hero;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  // Typing animation
  .typing-text {
    @include light-text-gradient;
  }

  .cursor {
    animation: blink 1s infinite;
    color: $interactive-primary;
    font-weight: 100;

    &.typing {
      animation: none;
      opacity: 1;
    }
  }
}

// Animations
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

// Responsive adjustments
@include breakpoint-down(md) {
  .page--work {
    .portfolio-grid {
      grid-template-columns: 1fr;
    }

    .work__intro {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
}
</style>

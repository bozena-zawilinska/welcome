<template>
  <div class="home">
    <!-- Full-screen Hero Section -->
    <section
      id="hello"
      class="section--welcome"
      aria-labelledby="welcome-heading"
    >
      <div class="hero-container">
        <!-- Main Hero Content -->
        <div class="hero-content">
          <div class="hero-image" data-aos="fade-up" data-aos-delay="200">
            <img
              src="@/assets/contact-bz.jpg"
              alt="Bozena - Front-end Developer"
              width="400"
              height="400"
            />
          </div>

          <div class="hero-text" data-aos="fade-up" data-aos-delay="400">
            <TypingAnimation
              id="welcome-heading"
              class="header animated-heading"
              text="Hello, I'm Bozena!"
              :speed="80"
              wrapperElement="h1"
              customCursorClass="heading"
              @typingFinished="onFirstAnimationFinished"
            />
            <p class="hero-subtitle">
              A passionate <strong>Front-end and Website Developer</strong> with
              a knack for building web experiences that are not only visually
              captivating but also optimized for accessibility and performance.
              🚀
            </p>

            <!-- CTA Buttons -->
            <div class="hero-actions" data-aos="fade-up" data-aos-delay="600">
              <BaseButton
                variant="primary"
                size="large"
                to="/work"
                :icon-right="ArrowRightIcon"
                aria-label="View my portfolio work"
              >
                View My Work
              </BaseButton>
              <BaseButton
                variant="secondary"
                size="large"
                to="/contact"
                :icon-right="EnvelopeIcon"
                aria-label="Get in touch with me"
              >
                Get In Touch
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator" data-aos="fade-in" data-aos-delay="800">
          <a
            href="#portfolio"
            class="scroll-arrow"
            aria-label="Scroll to Portfolio section"
            @click.prevent="scrollToSection('portfolio')"
          >
            <span class="scroll-text">Scroll to explore</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Floating Elements for Visual Interest -->
      <div class="floating-elements" aria-hidden="true">
        <div class="floating-shape floating-shape--1"></div>
        <div class="floating-shape floating-shape--2"></div>
        <div class="floating-shape floating-shape--3"></div>
      </div>

      <!-- Background Gradients -->
      <BackgroundShades
        primary-color="purple"
        secondary-color="coral"
        tertiary-color="blue-bell"
        :show-tertiary="true"
        :animated="true"
      />
    </section>

    <!-- Portfolio Projects -->
    <section id="portfolio" class="section--projects">
      <div class="container">
        <div class="projects-header">
          <h2 class="section-title">
            Crafting Seamless & Scalable Web Experiences
          </h2>
          <div class="projects-tagline">
            <span class="tagline-emoji">🚀</span>
            <span class="tagline-text">
              <strong>Smart. Responsive. Effortless.</strong>
            </span>
          </div>
          <p class="projects-description">
            I build
            <strong>pixel-perfect, high-performance websites</strong> that
            empower teams to create stunning pages with minimal effort. My
            custom Gutenberg blocks are designed for maximum flexibility,
            allowing marketing teams to manage content effortlessly—without
            touching a line of code.
          </p>
        </div>

        <!-- CTA Actions -->
        <div class="projects-actions">
          <BaseButton
            variant="primary"
            size="large"
            to="/work"
            :icon-right="ArrowRightIcon"
            aria-label="Explore my portfolio work"
          >
            Explore My Work
          </BaseButton>
          <BaseButton
            variant="secondary"
            size="large"
            to="/contact"
            :icon-right="ChatBubbleLeftRightIcon"
            aria-label="Start a conversation about your project"
          >
            Get In Touch
          </BaseButton>
        </div>

        <!-- Featured Work Preview -->
        <div class="featured-work">
          <GutenbergVideo />
        </div>

        <!-- Key Features Grid -->
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized for performance with 95+ PageSpeed scores</p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3>Fully Responsive</h3>
            <p>Perfect experience across all devices and screen sizes</p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3>Accessible</h3>
            <p>WCAG 2.2 compliant for inclusive user experiences</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TypingAnimation from '@/components/TypingAnimation.vue'
import GutenbergVideo from '@/components/GutenbergVideo.vue'
import BaseButton from '@/components/Button.vue'
import BackgroundShades from '@/components/BackgroundShades.vue'
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HomePage',
  components: {
    TypingAnimation,
    GutenbergVideo,
    BaseButton,
    BackgroundShades,
  },
  data() {
    return {
      secondAnimationDelay: 0,
      isScrolled: false,
      ArrowRightIcon, // Make icons available in template
      EnvelopeIcon,
    }
  },
  mounted() {
    document.documentElement.style.scrollBehavior = 'smooth'
    this.initScrollListener()
    this.initFloatingAnimations()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },

    initScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },

    initFloatingAnimations() {
      // Add subtle floating animations to shapes
      const shapes = document.querySelectorAll('.floating-shape')
      shapes.forEach((shape, index) => {
        const duration = 3000 + index * 1000 // Different durations for each shape
        const distance = 20 + index * 10 // Different distances

        setInterval(() => {
          shape.style.transform = `translateY(${
            Math.sin(Date.now() / duration) * distance
          }px) rotate(${Math.sin(Date.now() / (duration * 2)) * 15}deg)`
        }, 16) // ~60fps
      })
    },

    onFirstAnimationFinished() {
      // Trigger any additional animations after typing completes
      const heroActions = document.querySelector('.hero-actions')
      if (heroActions) {
        heroActions.classList.add('is-visible')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/index.scss';

// Global override for homepage to ensure full width
:global(#app) {
  .home {
    padding: 0 !important;
    margin: 0 !important;
  }
}

// Home page container - remove all inherited styles
.home {
  margin: 0;
  padding: 0 !important; // Override any inherited padding
  width: 100%;
  min-height: 100vh;
  background: transparent;

  // Override any global page styles that add padding/margin
  &.page {
    padding: 0 !important;
    margin: 0 !important;
  }
}

// Hero Section - Full viewport
.section--welcome {
  height: 100vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  background: $background-primary;

  // Hero Container
  .hero-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  // Main Hero Content
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    flex: 1;

    @include breakpoint-up(lg) {
      flex-direction: row;
      text-align: left;
      gap: 4rem;
      max-width: 1200px;
    }

    // Avatar Image
    .hero-image {
      order: 1;

      @include breakpoint-up(lg) {
        order: 2;
        flex: 0 0 auto;
      }

      img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        @include breakpoint-up(md) {
          width: 350px;
          height: 350px;
        }

        @include breakpoint-up(lg) {
          width: 400px;
          height: 400px;
        }

        &:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
        }
      }
    }

    // Text Content
    .hero-text {
      order: 2;
      max-width: 600px;

      @include breakpoint-up(lg) {
        order: 1;
        flex: 1;
      }

      .animated-heading {
        font-size: clamp(2.5rem, 8vw, 4rem);
        margin-bottom: 1.5rem;
        line-height: 1.1;

        @include breakpoint-up(lg) {
          text-align: left;
        }
      }

      .hero-subtitle {
        font-size: clamp(1.1rem, 2.5vw, 1.25rem);
        color: $text-secondary;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        opacity: 0;
        animation: fadeInUp 0.6s ease-out 0.8s forwards;

        strong {
          @include light-text-gradient;
          font-weight: 600;
        }
      }

      // CTA Buttons
      .hero-actions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

        @include breakpoint-up(sm) {
          flex-direction: row;
          gap: 1.5rem;
        }

        @include breakpoint-up(lg) {
          justify-content: flex-start;
        }

        &.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  // Scroll Indicator
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;

    .scroll-arrow {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: $text-secondary;
      transition: all 0.3s ease;
      padding: 1rem;

      &:hover {
        color: $interactive-primary;
        transform: translateY(-4px);
      }

      .scroll-text {
        font-size: 0.875rem;
        font-weight: 500;
        opacity: 0.8;
      }

      .scroll-icon {
        width: 1.5rem;
        height: 1.5rem;
        animation: bounce 2s infinite;
      }
    }
  }

  // Floating Elements
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    .floating-shape {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        rgba($interactive-primary, 0.1),
        rgba($primary-purple, 0.05)
      );
      backdrop-filter: blur(10px);

      &--1 {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 10%;
        animation: float 6s ease-in-out infinite;
      }

      &--2 {
        width: 80px;
        height: 80px;
        top: 60%;
        right: 15%;
        animation: float 8s ease-in-out infinite reverse;
      }

      &--3 {
        width: 60px;
        height: 60px;
        bottom: 20%;
        left: 20%;
        animation: float 10s ease-in-out infinite;
      }
    }
  }
}

// Projects Section - Professional styling matching other pages
.section--projects {
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    $background-primary 0%,
    $background-secondary 100%
  );
  position: relative;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @include breakpoint-up(lg) {
      padding: 0 3rem;
    }
  }

  // Projects Header
  .projects-header {
    text-align: center;
    margin-bottom: 4rem;

    .section-title {
      color: $text-primary;
      font-size: clamp(2rem, 5vw, 3rem);
      margin-bottom: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: $gradient-hero;
        border-radius: 2px;
      }
    }

    .projects-tagline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;

      .tagline-emoji {
        font-size: 2rem;
        animation: bounce 2s infinite;
      }

      .tagline-text {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        color: $interactive-primary;
        font-weight: 600;

        strong {
          @include light-text-gradient;
        }
      }
    }

    .projects-description {
      font-size: clamp(1rem, 2vw, 1.125rem);
      color: $text-secondary;
      line-height: 1.7;
      max-width: 700px;
      margin: 0 auto;

      strong {
        color: $text-primary;
        font-weight: 600;
      }
    }
  }

  // CTA Actions
  .projects-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 4rem;

    @include breakpoint-up(sm) {
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  // Featured Work
  .featured-work {
    margin-bottom: 4rem;
    text-align: center;
  }

  // Features Grid
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;

    @include breakpoint-up(md) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .feature-card {
      @include light-card;
      text-align: center;
      padding: 2.5rem 2rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid transparent;

      &:hover {
        transform: translateY(-8px);
        border-color: rgba($interactive-primary, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .feature-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1.5rem;
        background: linear-gradient(
          135deg,
          $interactive-primary,
          $interactive-hover
        );
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;

        svg {
          width: 2rem;
          height: 2rem;
          color: white;
        }
      }

      &:hover .feature-icon {
        transform: scale(1.1) rotate(5deg);
      }

      h3 {
        color: $text-primary;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      p {
        color: $text-secondary;
        line-height: 1.6;
        margin: 0;
        font-size: 0.95rem;
      }
    }
  }

  // Background decoration
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: $gradient-purple;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

// Responsive adjustments
@include breakpoint-down(sm) {
  .section--welcome {
    .hero-container {
      padding: 1.5rem;
    }

    .hero-content {
      gap: 1.5rem;

      .hero-image img {
        width: 240px;
        height: 240px;
      }
    }
  }
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .scroll-icon,
  .hero-image img {
    animation: none !important;
  }

  .hero-subtitle,
  .hero-actions {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

// Focus states for better accessibility
.btn:focus-visible,
.scroll-arrow:focus-visible {
  outline: 2px solid $interactive-primary;
  outline-offset: 2px;
}
</style>

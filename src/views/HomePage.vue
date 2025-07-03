<template>
  <div class="home page page--home">
    <section
      id="hello"
      class="section--welcome"
      aria-labelledby="welcome-heading"
    >
      <div class="shade shade--wisteria"></div>
      <div class="hero-content">
        <div class="hero-image">
          <img
            src="@/assets/avatar-bz-2.png"
            aria-hidden="true"
            width="400"
            height="400"
          />
        </div>
        <div class="hero-text container">
          <TypingAnimation
            id="welcome-heading"
            class="header animated-heading"
            text="Hello, I'm Bozena!"
            :speed="80"
            wrapperElement="h1"
            customCursorClass="heading"
            @typingFinished="onFirstAnimationFinished"
          />
          <p>
            A passionate <strong>Front-end and Website Developer</strong> with a
            knack for building web experiences that are not only visually
            captivating but also optimized for accessibility and performance. 🚀
          </p>
        </div>
        <a
          href="#portfolio"
          class="scroll-arrow"
          aria-label="Scroll to Portfolio"
          @click.prevent="scrollToSection('portfolio')"
        >
          ↓
        </a>
      </div>
      <!-- Scroll Arrow -->
    </section>

    <!-- Portfolio Projects -->
    <section id="portfolio" class="section--projects">
      <div class="group--text">
        <h3>🚀 <strong>Smart. Responsive. Effortless.</strong></h3>
        <h2>Crafting Seamless & Scalable Web Experiences</h2>
        <p>
          I build <strong>pixel-perfect, high-performance websites</strong> that
          empower teams to create stunning pages with minimal effort. My custom
          Gutenberg blocks are designed for maximum flexibility, allowing
          marketing teams to manage content effortlessly—without touching a line
          of code.
        </p>
      </div>

      <div class="group--buttons">
        <button
          @click="$router.push('/contact')"
          class="button button--secondary"
        >
          Get in Touch
        </button>
        <button @click="$router.push('/work')" class="button button--primary">
          Explore My Work
        </button>
      </div>
      <GutenbergVideo />
    </section>
  </div>
</template>

<script>
import TypingAnimation from '@/components/TypingAnimation.vue'
import GutenbergVideo from '@/components/GutenbergVideo.vue'

export default {
  name: 'HomePage',
  components: {
    TypingAnimation,
    GutenbergVideo,
  },
  data() {
    return {
      secondAnimationDelay: 0, // Dynamic delay for the second animation
    }
  },
  created() {
    window.addEventListener('resize', this.updateIsMobile)
  },
  mounted() {
    document.documentElement.style.scrollBehavior = 'smooth'
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.section {
  position: relative;

  @include breakpoint-up(md) {
    flex-direction: row;
    align-items: flex-start;
  }

  &--welcome {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @include breakpoint-up(lg) {
      height: 95dvh;
    }

    .hero-content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1 1 50%;
      flex-direction: column-reverse;

      h1 {
        ::v-deep .typing .cursor {
          height: $font-size-heading !important; // Use more specificity with the class
        }
      }

      @include breakpoint-up(md) {
        flex-direction: row;
      }

      .hero-image {
        img {
          aspect-ratio: 9/16;
          object-fit: scale-down;
          max-height: 60vh;
          width: auto;
          @include breakpoint-up(md) {
            max-height: 80vh;
          }
        }
      }

      .hero-text {
        background: $red-background;
        text-align: left;
        position: relative;
        width: 80%;

        @include breakpoint-up(lg) {
          width: 100%;
        }
      }
    }
  }

  &--projects {
    display: flex;
    gap: $spacing-lg;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: $spacing-lg * 2 auto;

    @include breakpoint-up(lg) {
      margin: $spacing-lg * 4 auto $spacing-lg * 2;
      max-width: 1000px;
      text-align: center;
    }
  }
}

.scroll-arrow {
  position: absolute;
  bottom: $spacing-lg;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  text-align: center;
  font-size: 2rem;
  text-decoration: none;
  color: $font-dark !important;
  animation: bounce 2s infinite;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  @include breakpoint-up(lg) {
    display: block;
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
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>

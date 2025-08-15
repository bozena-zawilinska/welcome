<template>
  <div class="page page--about">
    <ProgressBar :progress="scrollProgress" />

    <!-- <div class="container"> -->
    <TypingAnimation
      id="about-heading"
      class="header animated-heading text--flex-center"
      text="About Me"
      :speed="80"
      wrapperElement="h1"
      customCursorClass="heading"
      @typingFinished="onFirstAnimationFinished"
    />

    <!-- Developer Introduction -->
    <section
      id="about-intro"
      class="about__intro"
      aria-labelledby="intro-heading"
    >
      <div class="profile-image">
        <img
          src="@/assets/avatar-bz-2.png"
          alt="Bozena's profile picture"
          width="300"
          height="300"
        />
      </div>

      <div class="intro-content">
        <h2 id="intro-heading" class="intro-heading">
          The Person Behind the Code
        </h2>
        <p class="intro-text">
          I believe in the power of curiosity and the thrill of creating
          something out of nothing. Web development is my playground where
          creativity meets problem-solving. Every day, I strive to build
          meaningful and accessible digital experiences.
        </p>
        <p class="intro-text">
          Over the years, I've refined my skills in front-end development,
          WordPress, and performance optimisation. My mission is to deliver
          inclusive, fast, and impactful web solutions that make a real
          difference in people's lives.
        </p>
      </div>
    </section>

    <!-- Interactive Cards Section -->
    <section class="about__cards" aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="section-title">What Drives Me</h2>
      <div class="cards-grid">
        <div
          v-for="card in aboutCards"
          :key="card.id"
          :data-card-id="card.id"
          class="card about-card"
          :class="`about-card--${card.type}`"
          @click="openCardModal(card)"
          @mouseenter="card.isHovered = true"
          @mouseleave="card.isHovered = false"
          @keydown.enter="openCardModal(card)"
          @keydown.space.prevent="openCardModal(card)"
          tabindex="0"
          role="button"
          :aria-label="`${card.title} - Click to view details`"
        >
          <div class="card__header">
            <div class="card__icon">
              <component :is="card.icon" class="hero-icon hero-icon--large" />
            </div>
            <h3 class="card__title">{{ card.title }}</h3>
          </div>

          <div class="card__preview">
            <p class="card__preview-text">
              {{ card.description.substring(0, 60) }}...
            </p>
            <div class="card__expand-hint">
              <span>Click to explore</span>
              <svg
                class="expand-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Modal Overlay -->
      <div
        v-if="selectedCard"
        class="card-modal-overlay"
        @click="closeCardModal"
        @keydown.escape="closeCardModal"
        tabindex="0"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`modal-title-${selectedCard.id}`"
      >
        <div class="card-modal" @click.stop>
          <button
            class="modal__close"
            @click="closeCardModal"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div class="modal__content">
            <div class="modal__header">
              <div class="modal__icon">
                <component
                  :is="selectedCard.icon"
                  class="hero-icon hero-icon--xl"
                />
              </div>
              <h3 :id="`modal-title-${selectedCard.id}`" class="modal__title">
                {{ selectedCard.title }}
              </h3>
            </div>

            <div class="modal__body">
              <p class="modal__description">
                {{ selectedCard.description }}
              </p>

              <div class="modal__fun-fact">
                <div class="fun-fact__icon">✨</div>
                <div class="fun-fact__content">
                  <span class="fun-fact__label">Fun fact:</span>
                  <span class="fun-fact__text">{{ selectedCard.funFact }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Touch Section -->
    <section class="about__personal" aria-labelledby="personal-heading">
      <h2 id="personal-heading" class="section-title">
        When I'm not coding...
      </h2>
      <div class="personal__grid">
        <div
          class="personal__item"
          v-for="(item, index) in personalItems"
          :key="index"
        >
          <div class="personal__emoji">{{ item.emoji }}</div>
          <div class="personal__content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction
      heading="Ready to create something amazing together?"
      text="Let's build digital experiences that make a difference. Whether it's a new project or optimizing what you have, I'm here to help bring your vision to life."
      support-text="Over 5 years of experience building accessible, user-focused digital solutions"
    >
      <template #actions>
        <BaseButton
          variant="primary"
          size="large"
          to="/work"
          :icon-right="ArrowRightIcon"
          aria-label="View my portfolio work"
          class="cta-button"
        >
          View My Work
        </BaseButton>
        <BaseButton
          variant="secondary"
          size="large"
          to="/contact"
          :icon-right="EnvelopeIcon"
          aria-label="Get in touch with me"
          class="cta-button"
        >
          Get In Touch
        </BaseButton>
      </template>
    </CallToAction>
    <!-- </div> -->

    <!-- Background shades for visual interest -->
    <BackgroundShades
      :colors="['lavender', 'wisteria', 'blue-bell']"
      :positions="['primary', 'secondary', 'tertiary']"
    />

    <!-- Scroll to top button -->
    <ScrollToTopButton :visible="showScrollButton" />
  </div>
</template>

<script>
import {
  ArrowRightIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BoltIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import BackgroundShades from '@/components/BackgroundShades.vue'
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'
import BaseButton from '@/components/Button.vue'
import CallToAction from '@/components/CallToAction.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  name: 'AboutPage',
  components: {
    ArrowRightIcon,
    EnvelopeIcon,
    CodeBracketIcon,
    HeartIcon,
    PuzzlePieceIcon,
    SparklesIcon,
    BoltIcon,
    UsersIcon,
    BackgroundShades,
    ScrollToTopButton,
    BaseButton,
    CallToAction,
    TypingAnimation,
    ProgressBar,
  },
  data() {
    return {
      showScrollButton: false,
      scrollProgress: 0,
      selectedCard: null, // For modal system
      // Make icons available for template binding
      ArrowRightIcon,
      EnvelopeIcon,
      aboutCards: [
        {
          id: 1,
          type: 'code',
          title: 'Code Enthusiast',
          icon: 'CodeBracketIcon',
          description:
            'I live and breathe clean, accessible code. Every line I write is crafted with purpose and precision, focusing on maintainability and user experience.',
          funFact: 'I debug with curiosity, not frustration!',
          isHovered: false,
        },
        {
          id: 2,
          type: 'problem',
          title: 'Problem Solver',
          icon: 'PuzzlePieceIcon',
          description:
            'Complex challenges excite me. I love breaking down problems into elegant, simple solutions that users can understand and developers can maintain.',
          funFact:
            'I once spent 3 hours debugging only to find a missing semicolon - and loved every minute of it!',
          isHovered: false,
        },
        {
          id: 3,
          type: 'passion',
          title: 'Passionate Creator',
          icon: 'HeartIcon',
          description:
            'Building digital experiences that make a difference is what drives me every single day. I believe technology should serve people, not the other way around.',
          funFact: 'My best ideas come during my morning coffee ritual ☕',
          isHovered: false,
        },
        {
          id: 4,
          type: 'innovation',
          title: 'Innovation Seeker',
          icon: 'SparklesIcon',
          description:
            "I stay curious about emerging technologies and love experimenting with new tools and techniques to push the boundaries of what's possible.",
          funFact:
            'I have a "playground" folder with 50+ experimental projects!',
          isHovered: false,
        },
        {
          id: 5,
          type: 'performance',
          title: 'Performance Optimizer',
          icon: 'BoltIcon',
          description:
            'Speed matters. I optimize every aspect of the user experience, from bundle sizes to loading times, ensuring applications are lightning-fast and accessible to everyone, regardless of their device or connection.',
          funFact:
            'I got ProdPad website to 95+ PageSpeed scores on both desktop and mobile!',
          isHovered: false,
        },
        {
          id: 6,
          type: 'collaboration',
          title: 'Team Collaborator',
          icon: 'UsersIcon',
          description:
            'Great software is built by great teams. I thrive in collaborative environments, mentoring others, conducting thorough code reviews, and fostering a culture of shared knowledge and continuous learning.',
          funFact:
            'I believe the best PRs are the ones that teach something new!',
          isHovered: false,
        },
      ],
      personalItems: [
        {
          emoji: '🌱',
          title: 'Gardening',
          description:
            'Nothing beats the satisfaction of growing something from seed to harvest. My garden is my zen space where I cultivate both plants and patience.',
        },
        {
          emoji: '💪',
          title: 'Fitness',
          description:
            "Exercise is my daily energy boost! Whether it's a Les Mills class at home or going cycling, pumping my blood makes me feel alive and ready to tackle any coding challenge.",
        },
        {
          emoji: '🐕',
          title: 'Adventures with Summer',
          description:
            'My dog Summer is my best companion. We love exploring new trails, playing fetch, and discovering new places together.',
        },
        {
          emoji: '🏞️',
          title: 'Nature Escapes',
          description:
            "Living in Scotland means having endless breathtaking landscapes at our doorstep. We love exploring places we've never been before - and Scottish views never disappoint!",
        },
        {
          emoji: '👨‍🍳',
          title: 'Home Cooking',
          description:
            "My husband and I love creating delicious meals together. Friends keep telling us we should open a restaurant, but honestly, that's exactly why we rarely eat out!",
        },
        {
          emoji: '👨‍👩‍👧‍👦',
          title: 'Family Time',
          description:
            "Quality moments with loved ones remind me what truly matters. Whether it's board game nights, sharing stories, or simply being present - family keeps me grounded and inspired.",
        },
      ],
    }
  },

  mounted() {
    this.setupScrollListener()
    this.observeElements()
    // Add global keyboard listener for modal
    document.addEventListener('keydown', this.handleGlobalKeydown)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('keydown', this.handleGlobalKeydown)
    // Cleanup body overflow in case modal was open
    document.body.style.overflow = ''
  },

  methods: {
    openCardModal(card) {
      this.selectedCard = card
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      // Focus management for accessibility
      this.$nextTick(() => {
        const modal = this.$el.querySelector('.card-modal-overlay')
        if (modal) modal.focus()
      })
    },

    closeCardModal() {
      this.selectedCard = null
      // Restore body scroll
      document.body.style.overflow = ''
    },

    handleGlobalKeydown(event) {
      // Close modal on Escape key
      if (event.key === 'Escape' && this.selectedCard) {
        this.closeCardModal()
      }
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

    observeElements() {
      const options = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Better margins to keep cards visible during expansion
        threshold: 0.1, // More lenient threshold
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
          // Don't remove is-visible class to prevent disappearing cards
          // Also don't interfere with expanded cards
        })
      }, options)

      this.$nextTick(() => {
        const cards = this.$el.querySelectorAll('.about-card')
        cards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })

        const personalItems = this.$el.querySelectorAll('.personal__item')
        personalItems.forEach((item, index) => {
          item.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(item)
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
@import '@/styles/components/section-welcome.scss';

// Light theme specific styles for about page
.page--about {
  // Global section spacing
  section {
    margin-bottom: 3rem;

    @include breakpoint-down(md) {
      margin-bottom: 2rem;
    }
  }

  // Intro section specific styling
  .about__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-direction: column;

    @include breakpoint-up(lg) {
      flex-direction: row;
    }

    .intro-content {
      flex: 2;
      max-width: 600px;

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

  // Cards section
  .about__cards {
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;

      // Better spacing for 6 cards
      @include breakpoint-up(md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include breakpoint-up(lg) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include breakpoint-up(xl) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 2rem auto 0;
      }
    }
  }

  .about-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    min-height: 280px; // Fixed minimum height for all cards
    display: flex;
    flex-direction: column;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    // Focus styles for accessibility
    &:focus {
      outline: 2px solid $interactive-primary;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid $interactive-primary;
      outline-offset: 2px;
    }

    .card__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 1.5rem;
      min-height: 140px; // Fixed height to ensure alignment

      .card__icon {
        margin-bottom: 1rem;
        height: 48px; // Fixed height for icon container
        display: flex;
        align-items: center;
        justify-content: center;

        .hero-icon--large {
          width: 3rem;
          height: 3rem;
          color: $interactive-primary;
          transition: transform 0.3s ease;
        }
      }

      .card__title {
        color: $text-primary;
        font-size: $font-size-h4;
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
        height: 60px; // Fixed height for 2 lines of text
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    .card__preview {
      min-height: 90px; // Fixed height to align "Click to explore"
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .card__preview-text {
        color: $text-secondary;
        line-height: 1.6;
        margin-bottom: 1rem;
        font-size: $font-size-base;
        flex-grow: 1;
      }

      .card__expand-hint {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: $interactive-primary;
        font-size: $font-size-small;
        font-weight: 500;
        opacity: 0.8;
        transition: opacity 0.3s ease;
        margin-top: auto; // Push to bottom

        .expand-icon {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }
      }
    }

    // Hover effects for icons and hints
    &:hover {
      .card__icon .hero-icon--large {
        transform: scale(1.1) rotate(5deg);
      }

      .card__expand-hint {
        opacity: 1;

        .expand-icon {
          transform: translateX(4px);
        }
      }
    }

    // Card type specific styling with subtle accents
    &--code {
      .card__icon .hero-icon--large {
        color: #1772f3;
      }
      .card__fun-fact {
        background: rgba(23, 114, 243, 0.05);
        border-color: rgba(23, 114, 243, 0.15);
      }
    }

    &--problem {
      .card__icon .hero-icon--large {
        color: #8b5cf6;
      }
      .card__fun-fact {
        background: rgba(139, 92, 246, 0.05);
        border-color: rgba(139, 92, 246, 0.15);
      }
    }

    &--passion {
      .card__icon .hero-icon--large {
        color: #ef4444;
      }
      .card__fun-fact {
        background: rgba(239, 68, 68, 0.05);
        border-color: rgba(239, 68, 68, 0.15);
      }
    }

    &--innovation {
      .card__icon .hero-icon--large {
        color: #10b981;
      }
      .card__fun-fact {
        background: rgba(16, 185, 129, 0.05);
        border-color: rgba(16, 185, 129, 0.15);
      }
    }

    &--performance {
      .card__icon .hero-icon--large {
        color: #f59e0b;
      }
      .card__fun-fact {
        background: rgba(245, 158, 11, 0.05);
        border-color: rgba(245, 158, 11, 0.15);
      }
    }

    &--collaboration {
      .card__icon .hero-icon--large {
        color: #3b82f6;
      }
    }
  }

  // Modal Overlay System
  .card-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: z(modal);
    padding: 2rem;
    animation: modalFadeIn 0.3s ease-out;

    @include breakpoint-down(md) {
      padding: 1rem;
    }
  }

  .card-modal {
    background: white;
    border-radius: 24px;
    max-width: 600px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

    @include breakpoint-down(md) {
      max-height: 90vh;
      border-radius: 16px;
    }
  }

  .modal__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: rgba($text-tertiary, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: z(content);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: $text-secondary;
    }

    &:hover {
      background: rgba($text-tertiary, 0.2);
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid $interactive-primary;
      outline-offset: 2px;
    }
  }

  .modal__content {
    padding: 3rem;

    @include breakpoint-down(md) {
      padding: 2rem;
    }
  }

  .modal__header {
    text-align: center;
    margin-bottom: 2rem;

    .modal__icon {
      margin-bottom: 1.5rem;

      .hero-icon--xl {
        width: 4rem;
        height: 4rem;
        color: $interactive-primary;
        margin: 0 auto;
      }
    }

    .modal__title {
      color: $text-primary;
      font-size: $font-size-subheading;
      font-weight: 700;
      margin: 0;
      line-height: 1.2;

      @include breakpoint-down(md) {
        font-size: $font-size-h3;
      }
    }
  }

  .modal__body {
    .modal__description {
      color: $text-secondary;
      font-size: $font-size-h5;
      line-height: 1.7;
      margin-bottom: 2rem;
      text-align: center;

      @include breakpoint-down(md) {
        font-size: $font-size-base;
      }
    }

    .modal__fun-fact {
      background: linear-gradient(
        135deg,
        rgba($interactive-primary, 0.08) 0%,
        rgba($interactive-primary, 0.03) 100%
      );
      border: 1px solid rgba($interactive-primary, 0.15);
      border-radius: 20px;
      padding: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      @include breakpoint-down(md) {
        padding: 1.5rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .fun-fact__icon {
        font-size: 2rem;
        flex-shrink: 0;
        line-height: 1;
      }

      .fun-fact__content {
        flex: 1;

        .fun-fact__label {
          color: $text-tertiary;
          font-size: $font-size-small;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.75rem;
        }

        .fun-fact__text {
          color: $text-primary;
          font-size: $font-size-h5;
          font-weight: 500;
          line-height: 1.5;
          font-style: italic;

          @include breakpoint-down(md) {
            font-size: $font-size-base;
          }
        }
      }
    }
  }

  // Personal section
  .about__personal {
    .personal__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
  }

  .personal__item {
    @include light-card;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    }

    .personal__emoji {
      font-size: 3rem;
      flex-shrink: 0;
      line-height: 1;
    }

    .personal__content {
      h4 {
        color: $text-primary;
        font-size: $font-size-h5;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      p {
        color: $text-secondary;
        line-height: 1.6;
        margin: 0;
        font-size: $font-size-base;
      }
    }
  }

  // Call to Action Actions
  .cta-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    @include breakpoint-up(sm) {
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  // Button icons
  .icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
}

// Responsive adjustments
@include breakpoint-down(md) {
  .page--about {
    .cards-grid {
      grid-template-columns: 1fr;
    }

    .personal__grid {
      grid-template-columns: 1fr;
    }

    .about__intro {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
}

// Animation keyframes
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

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>

<template>
  <section class="page page--about">
    <div class="container">
      <h1 class="animated-heading">About Me</h1>

      <!-- Developer Introduction -->
      <div class="about__intro">
        <p class="description">
          I believe in the power of curiosity and the thrill of creating
          something out of nothing. Web development is my playground where
          creativity meets problem-solving. Every day, I strive to build
          meaningful and accessible digital experiences.
        </p>
        <p class="description">
          Over the years, I've refined my skills in front-end development,
          WordPress, and performance optimisation. My mission is to deliver
          inclusive, fast, and impactful web solutions.
        </p>
      </div>

      <!-- Interactive Cards Section -->
      <div class="about__cards">
        <div
          v-for="card in aboutCards"
          :key="card.id"
          :class="[
            'about__card',
            `about__card--${card.type}`,
            { 'is-active': card.isActive },
          ]"
          @click="toggleCard(card.id)"
          @mouseenter="card.isHovered = true"
          @mouseleave="card.isHovered = false"
        >
          <div class="card__icon">
            <component :is="card.icon" class="hero-icon hero-icon--large" />
          </div>
          <h3 class="card__title">{{ card.title }}</h3>
          <p class="card__description" v-show="card.isActive">
            {{ card.description }}
          </p>
          <div class="card__fun-fact" v-show="card.isActive">
            <span class="fun-fact__label">Fun fact:</span>
            <span class="fun-fact__text">{{ card.funFact }}</span>
          </div>
        </div>
      </div>

      <!-- Personal Touch Section -->
      <div class="about__personal">
        <h2 class="section-title">When I'm not coding...</h2>
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
      </div>

      <!-- Call to Action -->
      <div class="about__cta">
        <p class="cta__text">Ready to build something amazing together?</p>
        <div class="cta__buttons">
          <a class="button button--primary" href="/work">
            View My Work
            <ArrowRightIcon class="hero-icon" />
          </a>
          <a class="button button--secondary" href="/contact">
            Get In Touch
            <ChatBubbleLeftRightIcon class="hero-icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="shade shade--lavender"></div>
    <div class="shade shade--wisteria shade--secondary"></div>
    <div class="shade shade--blue-bell shade--tertiary"></div>
  </section>
</template>

<script>
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'

export default {
  components: {
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    HeartIcon,
    PuzzlePieceIcon,
    SparklesIcon,
  },
  data() {
    return {
      aboutCards: [
        {
          id: 1,
          type: 'code',
          title: 'Code Enthusiast',
          icon: 'CodeBracketIcon',
          description:
            'I live and breathe clean, accessible code. Every line I write is crafted with purpose and precision.',
          funFact: 'I debug with curiosity, not frustration!',
          isActive: false,
          isHovered: false,
        },
        {
          id: 2,
          type: 'problem',
          title: 'Problem Solver',
          icon: 'PuzzlePieceIcon',
          description:
            'Complex challenges excite me. I love breaking down problems into elegant, simple solutions.',
          funFact:
            'I once spent 3 hours debugging only to find a missing semicolon - and loved every minute of it!',
          isActive: false,
          isHovered: false,
        },
        {
          id: 3,
          type: 'passion',
          title: 'Passionate Creator',
          icon: 'HeartIcon',
          description:
            'Building digital experiences that make a difference is what drives me every single day.',
          funFact: 'My best ideas come during my morning coffee ritual ☕',
          isActive: false,
          isHovered: false,
        },
        {
          id: 4,
          type: 'innovation',
          title: 'Innovation Seeker',
          icon: 'SparklesIcon',
          description:
            'I stay curious about emerging technologies and love experimenting with new tools and techniques.',
          funFact:
            'I have a "playground" folder with 50+ experimental projects!',
          isActive: false,
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
            "Exercise is my daily energy boost! Whether it's lifting weights or going for a run, pumping my blood makes me feel alive and ready to tackle any coding challenge.",
        },
        {
          emoji: '🐕',
          title: 'Adventures with Summer',
          description:
            "My dog Summer is my best companion. We love exploring new trails, playing fetch, and she's my unofficial code review buddy (she approves with tail wags).",
        },
        {
          emoji: '🏞️',
          title: 'Nature Escapes',
          description:
            "Weekends in nature recharge my creativity. There's something magical about fresh air and natural light that brings clarity to complex problems.",
        },
      ],
    }
  },
  methods: {
    toggleCard(cardId) {
      const card = this.aboutCards.find((c) => c.id === cardId)
      if (card) {
        card.isActive = !card.isActive
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page--about {
  min-height: 100vh;
  padding: 3rem;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1000px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .animated-heading {
    color: $white;
    font-size: $font-size-heading;
    margin-bottom: $spacing-lg * 2;
    text-align: center;
    font-weight: 700;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.6s ease-in-out;
  }
}

.about__intro {
  margin-bottom: $spacing-lg * 2;

  .description {
    margin-bottom: $spacing-md;
    font-size: $font-size-base;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }
}

.about__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-lg * 2;
}

.about__card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: $padding-large;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

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
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.12);

    &::before {
      left: 100%;
    }
  }

  &.is-active {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  &--code {
    background: linear-gradient(
      135deg,
      rgba(23, 114, 243, 0.4),
      rgba(155, 182, 246, 0.3)
    );
    border: 1px solid rgba(23, 114, 243, 0.3);

    &:hover {
      border-color: rgba(23, 114, 243, 0.6);
      background: linear-gradient(
        135deg,
        rgba(23, 114, 243, 0.5),
        rgba(155, 182, 246, 0.4)
      );
    }
    &.is-active {
      background: linear-gradient(
        135deg,
        rgba(23, 114, 243, 0.5),
        rgba(155, 182, 246, 0.4)
      );
      border-color: rgba(23, 114, 243, 0.6);
    }
  }

  &--problem {
    background: linear-gradient(
      135deg,
      rgba(181, 160, 216, 0.4),
      rgba(209, 160, 216, 0.3)
    );
    border: 1px solid rgba(181, 160, 216, 0.3);

    &:hover {
      border-color: rgba(181, 160, 216, 0.6);
      background: linear-gradient(
        135deg,
        rgba(181, 160, 216, 0.5),
        rgba(209, 160, 216, 0.4)
      );
    }
    &.is-active {
      background: linear-gradient(
        135deg,
        rgba(181, 160, 216, 0.5),
        rgba(209, 160, 216, 0.4)
      );
      border-color: rgba(181, 160, 216, 0.6);
    }
  }

  &--passion {
    background: linear-gradient(
      135deg,
      rgba(239, 141, 156, 0.4),
      rgba(255, 195, 158, 0.3)
    );
    border: 1px solid rgba(239, 141, 156, 0.3);

    &:hover {
      border-color: rgba(239, 141, 156, 0.6);
      background: linear-gradient(
        135deg,
        rgba(239, 141, 156, 0.5),
        rgba(255, 195, 158, 0.4)
      );
    }
    &.is-active {
      background: linear-gradient(
        135deg,
        rgba(239, 141, 156, 0.5),
        rgba(255, 195, 158, 0.4)
      );
      border-color: rgba(239, 141, 156, 0.6);
    }
  }

  &--innovation {
    background: linear-gradient(
      135deg,
      rgba(176, 219, 125, 0.4),
      rgba(153, 219, 180, 0.3)
    );
    border: 1px solid rgba(176, 219, 125, 0.3);

    &:hover {
      border-color: rgba(176, 219, 125, 0.6);
      background: linear-gradient(
        135deg,
        rgba(176, 219, 125, 0.5),
        rgba(153, 219, 180, 0.4)
      );
    }
    &.is-active {
      background: linear-gradient(
        135deg,
        rgba(176, 219, 125, 0.5),
        rgba(153, 219, 180, 0.4)
      );
      border-color: rgba(176, 219, 125, 0.6);
    }
  }
}

.card__icon {
  margin-bottom: $spacing-md;

  .hero-icon--large {
    width: 3rem;
    height: 3rem;
    color: $white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
}

.card__title {
  color: $white;
  font-size: $font-size-h4;
  margin-bottom: $spacing-sm;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card__description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: $spacing-md;
  line-height: 1.5;
  animation: fadeIn 0.5s ease-out;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.card__fun-fact {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: $spacing-sm;
  animation: fadeIn 0.6s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .fun-fact__label {
    color: rgba(255, 255, 255, 0.8);
    font-size: $font-size-small;
    font-weight: 500;
    display: block;
    margin-bottom: $spacing-xs;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  .fun-fact__text {
    color: rgba(255, 255, 255, 0.95);
    font-size: $font-size-base;
    font-style: italic;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
}

.about__personal {
  margin-bottom: $spacing-lg * 2;

  .section-title {
    color: $white;
    font-size: $font-size-h3;
    margin-bottom: $spacing-lg;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }
}

.personal__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;
}

.personal__item {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: $padding-large;
  display: flex;
  align-items: flex-start;
  gap: $spacing-md;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
  }
}

.personal__emoji {
  font-size: 3rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.personal__content {
  h4 {
    color: $white;
    font-size: $font-size-h5;
    margin-bottom: $spacing-sm;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.5;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }
}

.about__cta {
  text-align: center;

  .cta__text {
    color: $white;
    font-size: $font-size-h4;
    margin-bottom: $spacing-lg;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .cta__buttons {
    display: flex;
    gap: $spacing-md;
    justify-content: center;
    flex-wrap: wrap;
  }
}

// Responsive adjustments
@include breakpoint-up(md) {
  .about__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include breakpoint-up(lg) {
  .about__cards {
    grid-template-columns: repeat(4, 1fr);
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

// Enhanced fade-in animation
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Small screen adjustments
@media (max-width: 767px) {
  .page--about {
    padding: 2rem 1rem;

    .container {
      padding: $padding-large;
    }
  }

  .about__cards {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }

  .personal__grid {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }

  .cta__buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<template>
  <div
    class="journey-timeline"
    :class="{ 'journey-timeline--horizontal': horizontal }"
  >
    <h3 v-if="title" class="timeline-title">{{ title }}</h3>
    <div class="timeline-container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="timeline-item"
        :class="{ 'is-visible': true }"
        :style="{ '--delay': `${index * 0.15}s` }"
      >
        <div class="timeline-marker">
          <div class="timeline-marker-dot"></div>
        </div>
        <div class="timeline-content">
          <div class="timeline-period">{{ item.period }}</div>
          <h4 class="timeline-heading">{{ item.title }}</h4>
          <p class="timeline-description">{{ item.description }}</p>
          <div
            v-if="item.achievements && item.achievements.length"
            class="timeline-achievements"
          >
            <span class="achievements-label">Key Achievements:</span>
            <ul class="achievements-list">
              <li v-for="(achievement, i) in item.achievements" :key="i">
                {{ achievement }}
              </li>
            </ul>
          </div>
          <div v-if="item.skills && item.skills.length" class="timeline-skills">
            <span v-for="skill in item.skills" :key="skill" class="skill-badge">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JourneyTimeline',
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      required: true,
      validator: (items) =>
        items.every(
          (item) =>
            typeof item.period === 'string' &&
            typeof item.title === 'string' &&
            typeof item.description === 'string'
        ),
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.journey-timeline {
  margin: 2rem 0 4rem;

  .timeline-title {
    font-size: $font-size-h4;
    color: $text-primary;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
  }

  .timeline-container {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 24px;
      width: 2px;
      background: linear-gradient(
        to bottom,
        rgba($interactive-primary, 0.2),
        rgba($interactive-primary, 0.8),
        rgba($interactive-primary, 0.2)
      );

      @include breakpoint-up(md) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  // Horizontal timeline styles
  &--horizontal {
    .timeline-container {
      @include breakpoint-up(lg) {
        &::before {
          top: 24px;
          bottom: auto;
          left: 0;
          right: 0;
          width: auto;
          height: 2px;
          background: linear-gradient(
            to right,
            rgba($interactive-primary, 0.2),
            rgba($interactive-primary, 0.8),
            rgba($interactive-primary, 0.2)
          );
          transform: none;
        }

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
      }
    }

    .timeline-item {
      @include breakpoint-up(lg) {
        padding-left: 0;
        padding-top: 50px;
        margin-bottom: 0;
        width: 0;
        flex: 1;
        text-align: center;

        &:nth-child(odd),
        &:nth-child(even) {
          margin-left: 0;
          padding-right: 0;
          padding-left: 0;
          width: auto;
          text-align: center;

          .timeline-content {
            &::before {
              left: 50%;
              right: auto;
              top: -10px;
              transform: translateX(-50%) rotate(45deg);
            }

            .timeline-skills {
              justify-content: center;
            }
          }
        }
      }
    }

    .timeline-marker {
      @include breakpoint-up(lg) {
        left: 50%;
        top: -10px;
        transform: translateX(-50%);
        right: auto;
      }
    }

    .timeline-content {
      @include breakpoint-up(lg) {
        &::before {
          left: 50%;
          top: -10px;
          transform: translateX(-50%) rotate(45deg);
        }
      }
    }
  }

  .timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);

    @include breakpoint-up(md) {
      padding-left: 0;
      width: 50%;
      align-self: flex-start;

      &:nth-child(odd) {
        margin-left: 0;
        padding-right: 40px;
        text-align: right;

        .timeline-content {
          &::before {
            left: auto;
            right: -10px;
            transform: rotate(-45deg);
          }

          .timeline-skills {
            justify-content: flex-end;
          }
        }
      }

      &:nth-child(even) {
        margin-left: 50%;
        padding-left: 40px;
      }
    }

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-marker {
    position: absolute;
    left: 15px;
    top: 5px;
    width: 20px;
    height: 20px;

    @include breakpoint-up(md) {
      top: 15px;
      // Default positioning for odd items (left side of timeline)
      left: auto;
      right: -10px;
    }

    &-dot {
      width: 100%;
      height: 100%;
      background: $interactive-primary;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba($interactive-primary, 0.2);
    }
  }

  // Specific targeting for even items' markers at medium+ breakpoints
  @include breakpoint-up(md) {
    .timeline-item:nth-child(2n) .timeline-marker {
      left: -10px;
      right: auto;
    }
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;

    @include breakpoint-down(md) {
      max-width: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: -10px;
      width: 20px;
      height: 20px;
      background: inherit;
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      transform: rotate(45deg);

      @include breakpoint-down(md) {
        display: none;
      }
    }
  }

  .timeline-period {
    background: linear-gradient(
      135deg,
      $interactive-primary,
      $interactive-hover
    );
    color: white;
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    display: inline-block;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }

  .timeline-heading {
    color: $text-primary;
    font-size: 1.1rem;
    margin: 0 0 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .timeline-description {
    color: $text-secondary;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .timeline-achievements {
    margin-top: 1.25rem;

    .achievements-label {
      display: block;
      color: $text-primary;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .achievements-list {
      margin: 0;
      padding-left: 1.25rem;

      li {
        color: $text-secondary;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }

  .timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;

    .skill-badge {
      background: rgba($interactive-primary, 0.1);
      color: $interactive-primary;
      padding: 0.25rem 0.75rem;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
  .timeline-item {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>

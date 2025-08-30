<template>
  <section
    class="story-section"
    :id="id"
    :class="{ 'story-section--reversed': reverse }"
  >
    <div class="story-content">
      <h2 v-if="title" class="story-title">{{ title }}</h2>
      <div class="story-body">
        <slot></slot>
      </div>
      <div v-if="$slots.actions" class="story-actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <div v-if="$slots.media" class="story-media" :class="mediaClasses">
      <slot name="media"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StorySection',
  props: {
    id: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    mediaAlign: {
      type: String,
      default: 'center',
      validator: (value) => ['center', 'top', 'bottom'].includes(value),
    },
  },
  computed: {
    mediaClasses() {
      return {
        'story-media--center': this.mediaAlign === 'center',
        'story-media--top': this.mediaAlign === 'top',
        'story-media--bottom': this.mediaAlign === 'bottom',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.story-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 5rem;

  @include breakpoint-up(md) {
    flex-direction: row;
    align-items: center;
  }

  &--reversed {
    @include breakpoint-up(md) {
      flex-direction: row-reverse;
    }
  }

  .story-content {
    flex: 1;

    .story-title {
      color: $text-primary;
      font-size: $font-size-h3;
      margin-bottom: 1.5rem;
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 60px;
        height: 3px;
        background: $gradient-hero;
        border-radius: 2px;
      }
    }

    .story-body {
      color: $text-secondary;
      line-height: 1.7;

      ::v-deep(p) {
        margin-bottom: 1.25rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      ::v-deep(strong) {
        color: $text-primary;
        font-weight: 600;
      }

      ::v-deep(.highlight) {
        @include light-text-gradient;
        font-weight: 600;
      }
    }

    .story-actions {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  .story-media {
    flex: 1;
    display: flex;

    &--center {
      align-items: center;
      justify-content: center;
    }

    &--top {
      align-items: flex-start;
      justify-content: center;
    }

    &--bottom {
      align-items: flex-end;
      justify-content: center;
    }

    ::v-deep(img) {
      max-width: 100%;
      border-radius: 12px;
      //   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>

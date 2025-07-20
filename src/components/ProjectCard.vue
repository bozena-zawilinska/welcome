<template>
  <div
    :data-project-id="project.id"
    class="card project-card"
    :class="{
      'is-expanded': project.showDetails,
      'is-visible': isVisible,
      'featured-card': isFeatured,
      'portfolio-card': !isFeatured,
    }"
    :style="{ '--delay': delay + 's' }"
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
        {{ project.summary || project.description }}
      </p>
    </div>

    <!-- Featured project expanded details -->
    <div
      v-if="isFeatured"
      class="card__details"
      :class="{ show: project.showDetails }"
      :aria-expanded="project.showDetails"
      :id="'project-details-' + project.id"
    >
      <div class="details__content">
        <p
          v-for="(line, index) in project.description.split('\n')"
          :key="index"
          class="details__text"
        >
          {{ line }}
        </p>
        <div class="image-showcase" v-if="project.images && project.images[0]">
          <img
            :src="getProjectPath(project.images[0].src)"
            :alt="project.images[0].alt"
            loading="lazy"
          />
        </div>
        <!-- Skills badges -->
        <div class="skill-badges" v-if="project.skills">
          <SkillBadge
            v-for="skill in project.skills"
            :key="skill"
            :skill="skill"
          />
        </div>
      </div>
    </div>

    <!-- Portfolio project image showcase -->
    <div v-if="!isFeatured" class="image-showcase">
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

    <div class="card__actions">
      <button
        v-if="isFeatured"
        class="btn btn--ghost"
        @click="$emit('toggle-details', project)"
        :aria-expanded="project.showDetails"
        :aria-controls="'project-details-' + project.id"
        :aria-label="
          project.showDetails
            ? `Hide details for ${project.title}`
            : `Show details for ${project.title}`
        "
      >
        {{ project.showDetails ? 'Show less' : 'Show more' }}
        <ChevronUpIcon
          v-if="project.showDetails"
          class="icon"
          aria-hidden="true"
        />
        <ChevronDownIcon v-else class="icon" aria-hidden="true" />
      </button>

      <button
        v-else
        class="btn btn--secondary"
        @click="$emit('show-details', project.id)"
      >
        {{ project.showDetails ? 'Hide' : 'Show' }} Details
      </button>

      <a
        class="btn btn--primary"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ isFeatured ? 'View Live' : 'Visit Website' }}
      </a>
    </div>
  </div>
</template>

<script>
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import SkillBadge from './SkillBadge.vue'

export default {
  name: 'ProjectCard',
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    SkillBadge,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  emits: ['toggle-details', 'show-details'],
  methods: {
    getProjectPath(project) {
      return require(`@/assets/projects/${project}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.project-card {
  // Featured card specific styles
  &.featured-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &.is-expanded {
      border-color: rgba($interactive-primary, 0.3);
    }

    // Remove the old card__details styles since they're now in _light-theme.scss
  }

  // Portfolio card specific styles
  &.portfolio-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
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

  // Enhanced details text styling
  .details__text {
    color: $text-primary;
    line-height: 1.6;
    margin-bottom: 0.75rem;

    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
}
</style>

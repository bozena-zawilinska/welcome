<template>
  <Transition name="scroll-button" appear>
    <button
      v-if="visible"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Scroll to top of page"
      title="Scroll to top"
      type="button"
      :class="{ visible: visible, hidden: !visible }"
    >
      <svg
        class="scroll-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
      <span class="scroll-text">Top</span>
    </button>
  </Transition>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToTop() {
      // Smooth scroll to top with fallback
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        // Fallback for older browsers
        const scrollStep = -window.scrollY / (500 / 15)
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep)
          } else {
            clearInterval(scrollInterval)
          }
        }, 15)
      }

      // Announce to screen readers
      this.announceToScreenReader('Scrolled to top of page')
    },

    announceToScreenReader(message) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.setAttribute('class', 'sr-only')
      announcement.textContent = message
      document.body.appendChild(announcement)

      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Screen reader only text
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Transition animations
.scroll-button-enter-active,
.scroll-button-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-button-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-button-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

// The main button styles are defined in _light-theme.scss
// This ensures consistency across the app while maintaining component isolation
.scroll-to-top {
  // Additional component-specific styles can go here if needed

  // Ensure proper stacking context
  isolation: isolate;

  // Improve button accessibility on touch devices
  @media (hover: none) and (pointer: coarse) {
    // Larger touch target on mobile
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      z-index: -1;
    }
  }
}
</style>

<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Already defined in light-theme.scss, but included here for component isolation
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba($text-primary, 0.1);
  z-index: 1001;

  &__fill {
    height: 100%;
    background: $gradient-hero;
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
</style>

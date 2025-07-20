<template>
  <div class="tablet-frame">
    <div
      class="video-container"
      @mouseenter="showButton = true"
      @mouseleave="hideButton"
    >
      <!-- Video Element -->
      <video
        ref="gutenbergVideo"
        @click="toggleVideoPlayback"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        loading="lazy"
        preload="none"
        :poster="
          require('@/assets/projects/prodpad/gutenberg-blocks-video-poster.png')
        "
      >
        <source
          src="@/assets/projects/prodpad/gutenberg-blocks-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <!-- Play/Pause Button (Centered) -->
      <button
        id="play"
        v-show="showButton"
        @click="toggleVideoPlayback"
        :aria-label="isPlaying ? 'Pause video' : 'Play video'"
        :class="{ toggle: isPlaying }"
        class="button button--play"
      >
        <div id="me"></div>
      </button>

      <!-- Video Description for Screen Readers -->
      <p class="sr-only">
        This video demonstrates two of my custom Gutenberg blocks. 1️⃣ The **Hero
        Section Block** allows users to change the background, set a supportive
        title, adjust letter case, and customize a headline, tagline, and CTA
        button. 2️⃣ The **Auto Image Swiper** lets users add four images with
        descriptions. The block displays one image at a time with an automatic
        loading bar indicating when the next image will appear.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      showButton: true,
    }
  },
  methods: {
    toggleVideoPlayback() {
      const video = this.$refs.gutenbergVideo
      if (video.paused) {
        video.play()
        this.isPlaying = true
        this.hideButton()
      } else {
        video.pause()
        this.isPlaying = false
        this.showButton = true
      }
    },
    hideButton() {
      if (this.isPlaying) {
        setTimeout(() => {
          this.showButton = false
        }, 1000) // Delay hiding to prevent flickering
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import '../styles/components/media';

// .video-container {
//   box-shadow: $box-shadow-soft;
//   border-radius: 16px;
//   position: relative;
//   width: 100%;
//   margin: 0 auto;
//   padding-top: 56.25%; // 16:9 aspect ratio
//   overflow: hidden;
//   background-color: $lavender;
//   video {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     margin: auto;
//     object-fit: cover;
//     clip-path: inset(8px 8px);
//     cursor: pointer;
//   }
// }

#play {
  appearance: none;
  width: 120px;
  height: 120px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.85) 100%
  );
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4), 0 6px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.9) 100%
    );
  }

  &:active {
    transform: translate(-50%, -50%) scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: $red-background;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.1;
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(239, 141, 156, 0.1) 0%,
      transparent 70%
    );
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::after {
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle,
      rgba(239, 141, 156, 0.15) 0%,
      transparent 70%
    );
  }
}

#me {
  position: relative;
  z-index: 2;
  height: 28px;
  width: 5px;
  background: linear-gradient(135deg, $soft-red 0%, $pale-orange 100%);
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: -8px;
  box-shadow: 0 2px 8px rgba(239, 141, 156, 0.3);

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    height: 26px;
    width: 5px;
    background: inherit;
    border-radius: 3px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inherit;
  }

  &::before {
    top: 50%;
    left: 0px;
    transform: translateY(-50%) rotate(-56deg);
    transform-origin: top center;
  }

  &::after {
    top: 50%;
    left: 0px;
    transform: translateY(-50%) rotate(56deg);
    transform-origin: bottom center;
  }
}

/* Play/Pause Toggle Effect */
.toggle #me {
  height: 28px;
  left: -6px;
  background: linear-gradient(135deg, $soft-red 0%, $pale-orange 100%);

  &::before,
  &::after {
    transform: rotate(0deg);
    left: 10px;
    height: 28px;
    width: 5px;
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 0;
  }
}

/* Enhanced hover and focus effects */
.video-container:hover #play {
  opacity: 1;
}

#play:focus {
  outline: 3px solid $soft-red;
  outline-offset: 4px;
}

/* Add a subtle pulsing animation when paused */
@keyframes pulse {
  0% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 0 rgba(239, 141, 156, 0.4);
  }
  50% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      0 0 0 20px rgba(239, 141, 156, 0.1);
  }
  100% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 0 rgba(239, 141, 156, 0);
  }
}

#play:not(.toggle) {
  animation: pulse 2s infinite;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>

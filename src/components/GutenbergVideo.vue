<template>
  <div class="video-container" @mouseenter="showButton = true" @mouseleave="hideButton">
    <!-- Video Element -->
    <video ref="gutenbergVideo" @click="toggleVideoPlayback" @play="isPlaying = true" @pause="isPlaying = false">
      <source src="@/assets/projects/prodpad/prodpad-custom-gutenberg-blocks.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Play/Pause Button (Centered) -->
    <button
      id="play"
      v-show="showButton"
      @click="toggleVideoPlayback"
      :aria-label="isPlaying ? 'Pause video' : 'Play video'"
      :class="{ toggle: isPlaying }"
    >
      <div id="me"></div>
    </button>

    <!-- Video Description for Screen Readers -->
    <p class="sr-only">
      This video demonstrates two of my custom Gutenberg blocks.  
      1️⃣ The **Hero Section Block** allows users to change the background, set a supportive title, adjust letter case, and customize a headline, tagline, and CTA button.  
      2️⃣ The **Auto Image Swiper** lets users add four images with descriptions. The block displays one image at a time with an automatic loading bar indicating when the next image will appear.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      showButton: true
    };
  },
  methods: {
    toggleVideoPlayback() {
      const video = this.$refs.gutenbergVideo;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
        this.hideButton();
      } else {
        video.pause();
        this.isPlaying = false;
        this.showButton = true;
      }
    },
    hideButton() {
      if (this.isPlaying) {
        setTimeout(() => {
          this.showButton = false;
        }, 1000); // Delay hiding to prevent flickering
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.video-container {
  box-shadow: $box-shadow-soft;
  border-radius: 16px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 56.25%; // 16:9 aspect ratio
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: inset(8px 8px);
    cursor: pointer;
  }
}

#play {
  appearance: none;
  width: 100px;
  height: 100px;
  background: $red-background;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
  box-shadow: 5px 5px 7px -2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: background 1s ease;
  }
}

#me {
  position: relative;
  z-index: 1;
  height: 22px;
  width: 4px; 
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  transition: background 0.2s ease;
  left: -6px;

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    height: 20px;
    width: 4px;
    background: inherit;
    border-radius: 3px;
    transition: all 0.5s ease;
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
  height: 22px;
  left: -4px;

  &::before,
  &::after {
    transform: rotate(0deg);
    left: 8px;
    height: 22px;
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 0;
  }
}

/* Hide button when playing */
.video-container:hover #play {
  opacity: 1;
}

#play:focus {
  outline: 3px solid $soft-red; /* High contrast focus */
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

<template>
  <div class="home page page--home">
    <section id="hello" class="section--welcome">
      <div class="shade shade--wisteria"></div>
      <div class="hero-content">

        <div class="hero-image">
            <img src="@/assets/avatar-bz-2.png" alt="Bozena's avatar" />
        </div>
        <div class="hero-text container">
         <TypingAnimation
          class="header animated-heading"
          text="Hello, I'm Bozena!"
          :speed="80"
          wrapperElement="h1"
          customCursorClass="heading"
          @typingFinished="onFirstAnimationFinished"
        />
        <!-- <TypingAnimation 
          class="description animated-heading"
          text="A passionate Front-end and Website Developer with a knack for building web experiences that are not only visually captivating but also optimized for accessibility and performance. 🚀"
          :startDelay="2000"
          :speed="80"
          wrapperElement="p"
        /> -->
        <p class="parallax-text" data-speed="fast">
          A passionate Front-end and Website Developer with a knack for building web experiences that are not only visually captivating but also optimized for accessibility and performance. 🚀
        </p>
        </div>
        <a href="#portfolio" class="scroll-arrow" aria-label="Scroll to Portfolio">
          ↓
        </a>
      </div>
      <!-- Scroll Arrow -->
    </section>
    
      <!-- Portfolio Projects -->
      <section id="portfolio" class="section--projects">
        <div class="">
          <h2 class="parallax-text" data-speed="slow">Building Engaging & Scalable Websites</h2>
          <p class="parallax-text" data-speed="slow">
            I specialize in creating high-performance, accessible websites with custom WordPress solutions. 
            From crafting intuitive Gutenberg blocks to optimizing UX/UI, my work empowers teams to manage 
            content effortlessly.
          </p>

          <p class="parallax-text" data-speed="slow">See two of my Custom Gutenberg Blocks in action</p>
        </div>
          <div class="video-container">
            <video autoplay loop muted class="rounded-lg shadow-lg max-w-full">
              <source src="@/assets/projects/prodpad/prodpad-custom-gutenberg-blocks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="">
            <a href="/work" class="button button--primary">
              View My Work
            </a>
          </div>
        <!-- </div> -->
      </section>

      <!-- About Me -->
      <section id="about" class="section--about">
        <h2>About Me 🌸</h2>
        <p>Hello again! Thanks for scrolling this far! 🤗</p>
        <p>
          Other than coding, I spend most of my free time playing games or reading.
          Feel free to recommend books!
        </p>
        <ul class="skills">
          <li v-for="skill in skills" :key="skill.name">
            <img :src="skill.icon" :alt="skill.name" /> {{ skill.name }}
          </li>
        </ul>
      </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TypingAnimation from "@/components/TypingAnimation.vue";

export default {
  name: "HomePage",
  components: {
    // HelloWorld,
    TypingAnimation,
  },
  data() {
    return {
      secondAnimationDelay: 0, // Dynamic delay for the second animation
    };
  },
  methods: {
    onFirstAnimationFinished(totalDuration) {
      console.log("First animation finished. Total duration:", totalDuration);
      this.secondAnimationDelay = totalDuration; // Update delay for the second animation
    },
  },
};
</script>
<style lang="scss" scoped>
.section {

  position: relative;
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
        align-items: flex-start;
      }

      .hero-image {
        img {
          aspect-ratio: 9/16;
          object-fit: scale-down;
          max-width: 40dvw;
          height: auto;
          @include breakpoint-up(md) {
            max-width: 30dvw;
            // height: 700px;
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
    // text-align: center;
    margin: $spacing-lg * 2 auto;

    @include breakpoint-up(lg) {
      margin: $spacing-lg * 4 auto;
      padding: $spacing-lg * 4 auto;
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
  0%, 20%, 50%, 80%, 100% {
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

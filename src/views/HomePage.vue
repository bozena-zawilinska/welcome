<template>
  <div class="home page page--home">
    <section id="hello" class="section--welcome">
      <div class="shade--wisteria"></div>
      <div class="hero-content">

        <div class="hero-image">
            <img src="@/assets/avatar-bz-2.png" alt="Bozena's avatar" />
        </div>
        <div class="hero-text container">
         <TypingAnimation
          class="header animated-heading"
          text="Hello, I'm Bozena!"
          :speed="100"
          wrapperElement="h1"
          customCursorClass="heading"
          @typingFinished="onFirstAnimationFinished"
        />
        <TypingAnimation 
          class="description animated-heading"
          text="A passionate Front-end and Website Developer with a knack for building web experiences that are not only visually captivating but also optimized for accessibility and performance. 🚀"
          :startDelay="2000"
          :speed="100"
          wrapperElement="p"
        />
        </div>
      </div>
      <!-- Scroll Arrow -->
      <a href="#portfolio" class="scroll-arrow" aria-label="Scroll to Portfolio">
        ↓
      </a>
    </section>
    
      <!-- Portfolio Projects -->
      <section id="portfolio" class="section--projects">
        <div class="project" v-for="project in projects" :key="project.id">
          <video autoplay loop muted playsinline>
            <source :src="project.video" type="video/mp4" />
          </video>
          <div class="overlay">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul>
              <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
            </ul>
            <div class="view-project">
              <a :href="project.liveLink" target="_blank">View Live</a>
              <a :href="project.githubLink" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
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
  &--welcome {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

      height: 90dvh;
      @include breakpoint-up(md) {
         height: 95dvh;
      }
   
    .hero-content {
      display: flex;
      align-items: center;
      flex: 1 1 50%;
      flex-direction: column-reverse;
      margin-top: $spacing-lg * 2;
      // height: 90dvh;
      h1 {
        ::v-deep .typing .cursor {
          height: $font-size-heading !important; // Use more specificity with the class
        }
      }
      

      @include breakpoint-up(md) {
        flex-direction: row;
      }

      .hero-image {
        img {
          aspect-ratio: 9/16;
          object-fit: scale-down;
          max-width: 30dvw;
          height: auto;
        }
      }
      .hero-text {
        text-align: left;
        position: relative;
        width: 80%;
        
        @include breakpoint-up(lg) {
          width: 100%;
        }
      }
    }
  }
}

.scroll-arrow {
  display: block;
  margin: 0 auto $spacing-lg;
  text-align: center;
  font-size: 2rem;
  text-decoration: none;
  color: $font-dark !important;
  animation: bounce 2s infinite;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
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

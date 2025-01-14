<template>
  <div class="home page page--home">
    <section id="welcome" class="welcome-section">
      <div class="hero-content ">

        <div class="hero-image">
            <img src="@/assets/avatar.png" alt="Bozena's avatar" />
        </div>
        <div class="hero-text container">
          <h1 class="animated-heading">Hello! <span>I'm Bozena. 👋</span></h1>
          <p class="description">
            A multidisciplinary <span>developer</span> and <span>designer</span>
            <span class="smaller-text">(sometimes)</span> with a passion for
            creating engaging, entertaining user experiences. ✨
          </p>
        </div>
      </div>
    </section>

      <!-- Portfolio Projects -->
      <section id="projects" class="portfolio-projects">
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
      <section id="aboutMe" class="about-me">
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

export default {
  name: "HomePage",
  components: {
    // HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.welcome-section {
    @include gradient-background($lavender, $rosemary);
    padding: 2rem;
   
    .hero-content {
      display: flex;
      align-items: center;
      .hero-image {
        max-width: 25%;
        img {
          aspect-ratio: 9/16;
          object-fit: scale-down;
          max-width: 30dvw;
          height: auto;
        }
      }
      .hero-text {
        text-align: justify;
        max-width: 70%;
        position: relative;
        h1 {
          position: relative;
          &::after {
            content: "";
            width: 100%;
            background-color: $dark;
            margin: 1rem 0;
            position: absolute;
            box-shadow: 0 0 8px $dark;
            left: $spacing-xs;
            bottom: -$spacing-sm;
            z-index: -1;
          }
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>

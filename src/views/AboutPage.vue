<template>
  <section class="page page--about">
    <div class="container">
      <h1 class="animated-heading">About Me</h1>
      <p class="description">
        I believe in the power of curiosity and the thrill of creating something
        out of nothing. Web development is my playground where creativity meets
        problem-solving. Every day, I strive to build meaningful and accessible
        digital experiences.
      </p>
      <p class="description">
        Over the years, I've refined my skills in front-end development,
        WordPress, and performance optimisation. My mission is to deliver
        inclusive, fast, and impactful web solutions.
      </p>
      <a class="link-underline" href="/work">
        View My Work
        <ArrowRightIcon class="hero-icon" />
      </a>
    </div>
    <div class="shade shade--lavender"></div>
  </section>
</template>

<script>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    ArrowRightIcon,
  },
  methods: {
    navigateToWork() {
      this.$router.push('/work')
    },
  },
}
</script>

<style lang="scss">
.page--about {
  min-height: 100vh;
  padding: 3rem;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

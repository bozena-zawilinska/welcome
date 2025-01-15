<template>
  <section class="page page--about">
    <div class="container">
      <h1 class="animated-heading">About Me</h1>
      <p class="description">
        I believe in the power of curiosity and the thrill of creating something out of nothing.
        Web development is my playground where creativity meets problem-solving.
        Every day, I strive to build meaningful and accessible digital experiences.
      </p>
      <p class="description">
        Over the years, I've refined my skills in front-end development, WordPress, and performance optimisation.
        My mission is to deliver inclusive, fast, and impactful web solutions.
      </p>
      <button class="button" @click="navigateToWork">View My Work</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    navigateToWork() {
      this.$router.push('/work');
    },
  },
};
</script>

<style lang="scss">
.page--about {
  @include gradient-background($green-white, $rosemary);
  min-height: 100vh;
  padding: 3rem;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


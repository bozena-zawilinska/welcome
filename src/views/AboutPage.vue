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
      <a class="link-underline" href="/work">
        View My Work
        <i class="fa fa-arrow-right"></i>
      </a>
      <!-- <button class="button button--primary button--confetti" @click="navigateToWork">View My Work</button> -->
    </div>
    <div class="shade--lavender"></div>
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
  // @include gradient-background($green-white, $grayish-cyan, $grayish-blue);
  // background: $green-background;
  min-height: 100vh;
  padding: 3rem;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


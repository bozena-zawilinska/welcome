<template>
  <div class="app__container">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <SideNav />
    <main id="main-content" class="main__container">
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue';

export default {
  components: {
    SideNav,
  },
};
</script>

<style lang="scss">

:focus {
  outline: 3px solid $dark-gunmetal;
  outline-offset: 2px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus {
    width: auto;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    background: $white;
    z-index: 999;
  }
}
</style>

<template>
  <div id="app">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <SideNav />
    <main id="main-content">
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
  outline: 2px solid $dark-gunmetal;
  /* Custom focus styling */
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
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    background: #000;
    color: #fff;
    padding: 0.5rem;
  }
}
</style>

<template>
  <div class="app__container">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <SideNav
      :is-collapsed="isCollapsed"
      @update:isCollapsed="isCollapsed = $event"
    />
    <main
      id="main-content"
      class="main__container"
      :class="{
        'main--collapsed': isCollapsed,
        'main--expanded': !isCollapsed,
      }"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'

export default {
  components: { SideNav },
  data() {
    return {
      isCollapsed: true,
    }
  },
}
</script>

<style lang="scss">
.app__container {
  display: flex; // makes side nav and main sit next to each other
  min-height: 100vh;
}

.main__container {
  flex: 1; // fill remaining space
  transition: margin-left 0.3s;
  margin-left: 80px; // default collapsed width
}

.main--expanded {
  margin-left: 200px; // expanded nav width
}

:focus {
  outline: 2px solid $color-selected;
  outline-offset: 1px;
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
    z-index: z(skip-link);
  }
}

@media (max-width: 768px) {
  .main__container,
  .main--expanded,
  .main--collapsed {
    margin-left: 0 !important;
  }
}
</style>

<template>
  <div class="side-nav__container">
    <!-- Hamburger Icon (Only visible on mobile) -->
    <button class="hamburger-btn" @click="toggleNav" v-if="isCollapsed">
      <Bars3Icon class="menu-icon" />
    </button>
    <nav
      class="side-nav"
      :class="{ collapsed: isCollapsed }"
      v-show="!isCollapsed || !isMobile"
    >
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="nav-item"
          @mouseover="hoverItem = index"
          @mouseleave="hoverItem = null"
          v-float="isCollapsed && hoverItem === index ? item.title : ''"
          v-bind:title="isCollapsed && hoverItem === index ? item.title : ''"
          v-tooltip.auto="isCollapsed && hoverItem === index ? item.title : ''"
        >
          <a :href="item.link" :class="{ active: isActiveRoute(item.link) }">
            <span class="icon">
              <component :is="item.icon" class="hero-icon" />
              <span
                v-if="isActiveRoute(item.link) && isCollapsed && !isMobile"
                class="active-border"
              ></span>
            </span>
            <span v-if="!isCollapsed" class="title">{{ item.title }}</span>
            <span class="is-selected"></span>
          </a>
        </li>
      </ul>
      <a class="button button--toggle" @click="toggleNav">
        <!-- <i :class="isCollapsed ? 'fas fa-arrow-left' : 'fas fa-arrow-right'" v-tooltip="isCollapsed ? '[ to expand' : '[ to collapse'">]</i> -->
        <ChevronDoubleLeftIcon
          v-if="isCollapsed"
          class="toggle-icon"
          v-tooltip.auto="'Use [ to expand'"
        />
        <div
          v-else-if="!isCollapsed && !isMobile"
          class="hide-button-content"
          v-tooltip.auto="'Use [ to hide'"
        >
          <span class="hide-text">Hide</span>
          <ChevronDoubleRightIcon class="toggle-icon" />
        </div>
        <div v-else-if="isMobile" class="hide-button-content">
          <span class="hide-text">Close</span>
          <XMarkIcon class="toggle-icon" />
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
import {
  HomeIcon,
  UserIcon,
  PaintBrushIcon,
  EnvelopeIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/vue/24/outline'

export default {
  components: {
    HomeIcon,
    UserIcon,
    PaintBrushIcon,
    EnvelopeIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    XMarkIcon,
    Bars3Icon,
  },
  data() {
    return {
      isCollapsed: true, // controls nav state
      isMobile: false, // tracks if the device is mobile
      hoverItem: null, // tracks hovered item
      menuItems: [
        { title: 'Welcome', link: '/', icon: 'HomeIcon' },
        { title: 'About Me', link: '/about', icon: 'UserIcon' },
        { title: 'Portfolio', link: '/work', icon: 'PaintBrushIcon' },
        { title: 'Get in Touch', link: '/contact', icon: 'EnvelopeIcon' },
        // { title: "Welcome 🌟", link: "/", emoji: "🏠" },
        // { title: "About Me 💡", link: "/about", emoji: "👤" },
        // { title: "Portfolio 🚀", link: "/work", emoji: "🎨" },
        // { title: "Get in Touch 📬", link: "/contact", emoji: "✉️" },
      ],
    }
  },
  methods: {
    isActiveRoute(link) {
      // Check if the current route matches the menu item link
      return this.$route.path === link
    },
    handleKeyDown(event) {
      // Check if the key pressed is '['
      if (event.key === '[') {
        this.toggleNav()
      }
    },
    toggleNav() {
      this.isCollapsed = !this.isCollapsed
    },
    updateIsMobile() {
      // Updates the isMobile property based on the screen width
      this.isMobile = window.innerWidth <= 768
    },
  },
  mounted() {
    // Initial check for mobile devices
    this.updateIsMobile()
    // Listen for window resize to update the mobile state
    window.addEventListener('resize', this.updateIsMobile)
    // Listen for the '[' key to toggle the navigation
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    // Clean up the event listener
    window.removeEventListener('resize', this.updateIsMobile)
    // Remove the event listener when the component is destroyed
    window.removeEventListener('keydown', this.handleKeyDown)
  },
}
</script>
<style lang="scss" scoped>
.side-nav__container {
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  height: 24px;
  padding: 16px 0;
  z-index: 1;
}

/* Hamburger Menu Button (Mobile Only) */
.hamburger-btn {
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 20;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: $color-selected;
  }

  @media (max-width: 768px) {
    display: block;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
}

/* Side Navigation */
.side-nav {
  background: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;

  opacity: 1;
  visibility: visible;

  @include breakpoint-up(md) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.collapsed {
    opacity: 0;
    visibility: hidden;
    transition: width 0.7s ease, opacity 0.7s ease, visibility 0.7s ease;

    .active-border {
      display: block;
      position: absolute;
      top: 100%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 2px;
      margin: 0 auto;
      background-color: $color-selected;
      margin-top: 8px;
    }
  }

  .button--toggle {
    transition: all 0.3s ease;
    margin: $spacing-lg;
    display: flex;
    align-items: center;
    justify-content: center;

    .toggle-icon {
      width: 24px;
      height: 24px;
      stroke: currentColor;
    }

    .hide-button-content {
      display: flex;
      align-items: center;
      gap: 6px;

      .hide-text {
        // font-size: 24px;
        font-weight: 500;
      }

      // Mobile-specific styling - remove gap when no icon
      @media (max-width: 768px) {
        gap: 0;

        .hide-text {
          font-size: 14px;
        }
      }
    }
  }

  &:not(.collapsed) {
    .icon {
      margin-right: $spacing-xs;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    .nav-item {
      font-size: $font-size-small;
      font-weight: 600;
      text-align: center;

      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #6b7280; // Default gray color for icons
        margin: $spacing-sm;
        padding: $spacing-sm;
        border-radius: 8px;
        transition: $transition;
        // transition: background $transition;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .icon {
          transition: transform 0.2s ease;
          position: relative;
          display: inline-block;
          line-height: 1;

          .hero-icon {
            width: 24px;
            height: 24px;
            stroke: currentColor;
            transition: color 0.2s ease;
          }
        }

        .active-border {
          display: block;
          position: absolute;
          bottom: var(--ds-space-0, 0);
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 2px;
          margin: var(--ds-space-0, 0) auto;
          background-color: var(--ds-icon-selected, #0c66e4);
        }

        &.active {
          background: rgba(23, 114, 243, 0.1); // Active background color

          .icon .hero-icon {
            color: $color-selected;
            stroke: $color-selected;
          }
        }
      }
    }
  }
}

/* Media Query for Desktop View */
.side-nav {
  @include breakpoint-up(md) {
    display: flex;
    width: 200px;

    &.collapsed {
      width: 80px;
      visibility: visible;
      opacity: 1;

      .button--toggle {
        margin: $spacing-lg $spacing-xs;
        padding: 8px;
      }
    }
  }

  .hamburger-btn {
    display: none;
  }
}
// @import "../styles/vendors/floating-vue.scss";
</style>

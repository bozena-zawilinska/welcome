<template>
    <div class="side-nav__container">
        <!-- Hamburger Icon (Only visible on mobile) -->
        <button class="hamburger-btn" @click="toggleNav" v-if="isCollapsed">
            <i class="fas fa-bars"></i>
        </button>
        <nav 
            class="side-nav" 
            :class="{ collapsed: isCollapsed }"
            v-show="!isCollapsed || !isMobile"
        >
            <!-- <div class="logo" @click="toggleNav">
                <img src="@/assets/logo.png" alt="Portfolio Logo" />
                <i :class="isCollapsed ? 'fas fa-arrow-right' : 'fas fa-arrow-left'"></i>
            </div> -->


            <button class="button button--primary button--toggle" @click="toggleNav">
                <!-- <i :class="isCollapsed ? 'fas fa-arrow-left' : 'fas fa-arrow-right'" v-tooltip="isCollapsed ? '[ to expand' : '[ to collapse'">]</i> -->
                <span v-html="isCollapsed ? '&lt;&lt;' : 'Hide &gt;&gt;'" v-tooltip="isCollapsed ? 'Use [ to expand' : 'Use [ to hide'" />
            </button>
            <ul>
                <li 
                    v-for="(item, index) in menuItems" 
                    :key="index" 
                    class="nav-item" 
                    @mouseover="hoverItem = index"
                    @mouseleave="hoverItem = null" 
                    v-float="isCollapsed && hoverItem === index ? item.title : ''"
                    v-bind:title="isCollapsed && hoverItem === index ? item.title : ''" 
                    v-tooltip="isCollapsed && hoverItem === index ? item.title : ''"
                >
                    <a 
                        :href="item.link"
                    >
                        <span class="emoji">{{ item.emoji }}</span>
                        <span v-if="!isCollapsed" class="title">{{ item.title }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: true, // controls nav state
            isMobile: false,   // tracks if the device is mobile
            hoverItem: null,   // tracks hovered item
            menuItems: [
                { title: "Welcome", link: "/", emoji: "🏠" },
                { title: "About Me", link: "/about", emoji: "👤" },
                { title: "Portfolio", link: "/work", emoji: "🎨" },
                { title: "Get in Touch", link: "/contact", emoji: "✉️" },
                // { title: "Welcome 🌟", link: "/", emoji: "🏠" },
                // { title: "About Me 💡", link: "/about", emoji: "👤" },
                // { title: "Portfolio 🚀", link: "/work", emoji: "🎨" },
                // { title: "Get in Touch 📬", link: "/contact", emoji: "✉️" },
            ],
        };
    },
    methods: {
        handleKeyDown(event) {
            // Check if the key pressed is '['
            if (event.key === '[') {
                this.toggleNav();
            }
        },
        toggleNav() {
            this.isCollapsed = !this.isCollapsed;
        },
        updateIsMobile() {
            // Updates the isMobile property based on the screen width
            this.isMobile = window.innerWidth <= 768;
        },
    },
    mounted() {
        // Initial check for mobile devices
        this.updateIsMobile();
        // Listen for window resize to update the mobile state
        window.addEventListener("resize", this.updateIsMobile);
        // Listen for the '[' key to toggle the navigation
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        // Clean up the event listener
        window.removeEventListener("resize", this.updateIsMobile);
        // Remove the event listener when the component is destroyed
        window.removeEventListener('keydown', this.handleKeyDown);
    },
};
</script>
<style lang="scss" scoped>
.side-nav__container {
    background: white;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    position: fixed;
    height: 24px;
    padding: 16px 0;
    z-index: 1;
    @include breakpoint-up(md) {
        background: none;
        height: 0;
        padding: 0;
        width: 0;
    }
}
/* Hamburger Menu Button (Mobile Only) */
.hamburger-btn {
    display: none;
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 20;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #007bff;
    }

    @media (max-width: 768px) {
        display: block;
    }
}

/* Side Navigation */
.side-nav {
    background: white;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;

    opacity: 1;
    visibility: visible;

    &.collapsed {
        opacity: 0;
        visibility: hidden;
        transition: width 0.7s ease, opacity 0.7s ease, visibility 0.7s ease;
    }

    .button--toggle {
        display: inline-block;
        transition: all 0.3s ease;
        margin: $spacing-lg;
    }


    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        .nav-item {
            font-size: $font-size-small;
            font-weight: 600;
            // margin: $spacing-sm 0;
            text-align: center;

            a {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                // color: $white;
                // text-decoration: none;
                margin: $spacing-sm;
                padding: $spacing-sm;
                border-radius: 8px;
                transition: background $transition;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                .emoji {
                    margin-right: $spacing-xs;
                    transition: transform 0.2s ease;
                }
            }
        }
    }
}

/* Media Query for Desktop View */
@include breakpoint-up(md) {
    .side-nav {
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
@import "@/styles/vendors/floating-vue.scss";
</style>

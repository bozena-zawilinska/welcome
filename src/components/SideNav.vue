<template>
    <nav class="side-nav" :class="{ collapsed: isCollapsed }">
        <!-- <div class="logo" @click="toggleNav">
            <img src="@/assets/logo.png" alt="Portfolio Logo" />
             <i :class="isCollapsed ? 'fas fa-arrow-right' : 'fas fa-arrow-left'"></i>
        </div> -->


        <div class="is-collapsed" @click="toggleNav">
             <!-- <i :class="isCollapsed ? 'fas fa-arrow-left' : 'fas fa-arrow-right'" v-tooltip="isCollapsed ? '[ to expand' : '[ to collapse'">]</i> -->
              <span v-html="isCollapsed ? '<<' : '>>'" v-tooltip="isCollapsed ? '[ to expand' : '[ to collapse'" />
        </div>
        <ul>
            <li v-for="(item, index) in menuItems" :key="index" class="nav-item" @mouseover="hoverItem = index"
                @mouseleave="hoverItem = null" v-float="isCollapsed && hoverItem === index ? item.title : ''"
                v-bind:title="isCollapsed && hoverItem === index ? item.title : ''" v-tooltip="isCollapsed && hoverItem === index ? item.title : ''">
                <a :href="item.link">
                    <span class="emoji">{{ item.emoji }}</span>
                    <span v-if="!isCollapsed" class="title">{{ item.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: true, // controls nav state
            hoverItem: null,   // tracks hovered item
            menuItems: [
                { title: "Welcome 🌟", link: "/", emoji: "🏠" },
                { title: "About Me 💡", link: "/about", emoji: "👤" },
                { title: "Portfolio 🚀", link: "/work", emoji: "🎨" },
                { title: "Get in Touch 📬", link: "/contact", emoji: "✉️" },
            ],
        };
    },
    methods: {
        toggleNav() {
            this.isCollapsed = !this.isCollapsed;
        },
        handleKeyDown(event) {
            // Check if the key pressed is '['
            if (event.key === '[') {
                this.toggleNav();
            }
        },
    },
    mounted() {
        // Listen for the '[' key to toggle the navigation
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        // Remove the event listener when the component is destroyed
        window.removeEventListener('keydown', this.handleKeyDown);
    },
};
</script>
<style lang="scss" scoped>

/* Side Navigation */
.side-nav {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 200px;
    background: white;
    // border-left: 1px solid #553c9a50;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
    // box-shadow: -40px 40px 40px 60px rgba(0, 0, 0, 0.75);
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: $padding-base;
    // box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
    z-index: 10;

    &.collapsed {
        width: 60px;
    }

    .logo {
        margin-bottom: $spacing-lg;
        text-align: center;
        cursor: pointer;

        // img {
        //     max-width: 100%;
        //     height: auto;
        // }


        i {
            font-size: 24px; /* Adjust icon size */
            color: $dark;    /* Icon color */
            transition: transform 0.2s ease;

            &:hover {
                transform: rotate(180deg); /* Optional: adds rotation on hover */
            }
        }
    }

    .is-collapsed {
        font-size: 24px;
        transition: transform 0.2s ease;

        span {
            visibility: hidden;
        }
    }
    &:hover {
        .is-collapsed {
        font-size: 24px;
        transition: transform 0.2s ease;

            span {
                visibility: visible;
            }
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        .nav-item {
            margin: $spacing-sm 0;
            text-align: center;

            a {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                // color: $white;
                text-decoration: none;
                padding: $spacing-sm;
                border-radius: 8px;
                transition: background $transition;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                .emoji {
                    font-size: $font-large;
                    margin-right: $spacing-sm;
                    transition: transform 0.2s ease;
                }
                
                .title {
                    font-size: $font-base;
                    font-weight: 600;
                }
            }
        }
    }
}
@import "@/styles/vendors/floating-vue.scss";
</style>

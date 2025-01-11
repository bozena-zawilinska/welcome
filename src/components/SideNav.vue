<template>
    <nav class="side-nav" :class="{ collapsed: isCollapsed }">
        <div class="logo" @click="toggleNav">
            <img src="@/assets/logo.png" alt="Portfolio Logo" />
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
    background: $dark-gunmetal;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: $padding-base;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
    z-index: 10;

    &.collapsed {
        width: 60px;
    }

    .logo {
        margin-bottom: $spacing-lg;
        text-align: center;
        cursor: pointer;

        img {
            max-width: 100%;
            height: auto;
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
                color: $white;
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

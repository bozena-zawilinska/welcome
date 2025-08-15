// Composable to fix viewport height issues on mobile browsers (especially iOS)
import { onMounted, onUnmounted } from 'vue'

/**
 * useViewportHeight composable
 * Fixes the iOS 100vh issue by setting a CSS variable --vh to the actual viewport height
 * Usage: import and call this function in your App.vue's setup function
 */
export function useViewportHeight() {
  // Set the value of --vh to the actual viewport height
  const setViewportHeight = () => {
    // First get the viewport height
    const vh = window.innerHeight * 0.01
    // Then set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // Update on mount and resize
  onMounted(() => {
    setViewportHeight()
    window.addEventListener('resize', setViewportHeight)
  })

  // Clean up event listener
  onUnmounted(() => {
    window.removeEventListener('resize', setViewportHeight)
  })

  return {
    setViewportHeight,
  }
}

/**
 * Ensures proper overflow handling when opening modals
 * Prevents background scrolling while maintaining scroll position
 */
export function useScrollLock() {
  let scrollPosition = 0

  const lockScroll = () => {
    // Store current scroll position
    scrollPosition = window.pageYOffset

    // Add styles to lock scroll but keep position
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
  }

  const unlockScroll = () => {
    // Remove scroll lock styles
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('position')
    document.body.style.removeProperty('top')
    document.body.style.removeProperty('width')

    // Restore scroll position
    window.scrollTo(0, scrollPosition)
  }

  return {
    lockScroll,
    unlockScroll,
  }
}

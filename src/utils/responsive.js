/**
 * Utility functions for responsive media queries in JavaScript
 * These functions help check screen size in component logic
 */

// Screen size breakpoints (matching our SCSS)
const breakpoints = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1536,
}

/**
 * Check if the current viewport is above a specific breakpoint
 * @param {string} breakpoint - The breakpoint key (xs, sm, md, lg, xl, xxl)
 * @returns {boolean} - True if viewport width is greater than or equal to the breakpoint
 */
export function isBreakpointUp(breakpoint) {
  if (!breakpoints[breakpoint]) return false
  return window.innerWidth >= breakpoints[breakpoint]
}

/**
 * Check if the current viewport is below a specific breakpoint
 * @param {string} breakpoint - The breakpoint key (xs, sm, md, lg, xl, xxl)
 * @returns {boolean} - True if viewport width is less than the breakpoint
 */
export function isBreakpointDown(breakpoint) {
  if (!breakpoints[breakpoint]) return false
  return window.innerWidth < breakpoints[breakpoint]
}

/**
 * Check if the current viewport is between two breakpoints
 * @param {string} minBreakpoint - The minimum breakpoint key (xs, sm, md, lg, xl)
 * @param {string} maxBreakpoint - The maximum breakpoint key (sm, md, lg, xl, xxl)
 * @returns {boolean} - True if viewport width is between the two breakpoints
 */
export function isBreakpointBetween(minBreakpoint, maxBreakpoint) {
  if (!breakpoints[minBreakpoint] || !breakpoints[maxBreakpoint]) return false
  return (
    window.innerWidth >= breakpoints[minBreakpoint] &&
    window.innerWidth < breakpoints[maxBreakpoint]
  )
}

/**
 * Check if the device is in portrait orientation
 * @returns {boolean} - True if device is in portrait mode
 */
export function isPortrait() {
  return window.matchMedia('(orientation: portrait)').matches
}

/**
 * Check if the device is in landscape orientation
 * @returns {boolean} - True if device is in landscape mode
 */
export function isLandscape() {
  return window.matchMedia('(orientation: landscape)').matches
}

/**
 * Check if the device is a touch device
 * @returns {boolean} - True if the device supports touch
 */
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Check if the user prefers reduced motion
 * @returns {boolean} - True if the user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Creates a reactive wrapper to track screen size changes
 * Use in component setup() with Vue's ref and onMounted
 * @param {Object} options - Options for tracking
 * @param {string[]} options.breakpoints - Array of breakpoints to track
 * @param {boolean} options.trackOrientation - Whether to track orientation changes
 * @returns {Object} - Methods and setup for tracking screen size
 *
 * Example usage:
 *
 * setup() {
 *   const { isMobile, isTablet, isDesktop, setupScreenTracking } = useScreenSizeTracking({
 *     breakpoints: ['sm', 'md', 'lg']
 *   })
 *
 *   onMounted(() => {
 *     setupScreenTracking()
 *   })
 *
 *   return { isMobile, isTablet, isDesktop }
 * }
 */
export function useScreenSizeTracking(options = {}) {
  // Default options
  const { breakpoints = ['md', 'lg'], trackOrientation = false } = options

  // Create reactive states (to be used with Vue's ref)
  const states = {}

  // Setup tracking for each breakpoint
  breakpoints.forEach((bp) => {
    states[`is${bp.charAt(0).toUpperCase() + bp.slice(1)}`] = false
  })

  if (trackOrientation) {
    states.isPortrait = true
    states.isLandscape = false
  }

  // Function to update all states
  const updateStates = () => {
    breakpoints.forEach((bp) => {
      states[`is${bp.charAt(0).toUpperCase() + bp.slice(1)}`] =
        isBreakpointUp(bp)
    })

    if (trackOrientation) {
      states.isPortrait = isPortrait()
      states.isLandscape = isLandscape()
    }
  }

  // Setup function to be called on mount
  const setupScreenTracking = () => {
    updateStates()
    window.addEventListener('resize', updateStates)

    // Return cleanup function
    return () => {
      window.removeEventListener('resize', updateStates)
    }
  }

  return {
    ...states,
    setupScreenTracking,
  }
}

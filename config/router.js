module.exports = {
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  scrollBehavior: function (to, from, savedPosition) {
    // If the returned position is falsy or an empty object,
    // will retain current scroll position.
    let position = false

    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    // If one of the children has scrollToTop option set to true
    } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
      position = { x: 0, y: 0 }
    }

    // savedPosition is only available for popstate navigations (back button)
    if (savedPosition) {
      position = savedPosition
    }

    return new Promise(resolve => {
      // Wait for the out transition to complete (if necessary)
      window.$nuxt.$once('triggerScroll', () => {
        // Coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        if (to.hash && document.querySelector(to.hash)) {
          // Scroll to anchor by returning the selector
          position = { selector: to.hash }
        }

        resolve(position)
      })
    })
  }
}

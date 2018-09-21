export default {
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'A research project for server side rendering with Nuxt.js', hid: 'description' }
  ],
  titleTemplate: title => {
    return title
      ? `${title} | Nuxt Research`
      : 'Nuxt Research'
  }
}

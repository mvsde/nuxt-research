import api from '../api'

export default {
  interval: 100,
  async routes () {
    // Add repositories to static generation of dynamic routes
    const repositories = await api.get('/orgs/nuxt/repos')
      .then(response => {
        return response.data.map(repository => `/repositories/${repository.name}`)
      })
      .catch(error => {
        console.log(error.response)
      })

    return [
      ...repositories
    ]
  }
}

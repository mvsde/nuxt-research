import api from '@/api'

export const state = () => ({
  list: []
})

export const mutations = {
  set (state, repositories) {
    state.list = repositories
  }
}

export const actions = {
  async get ({ commit }) {
    await api.get('/orgs/nuxt/repos')
      .then(response => {
        commit('set', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

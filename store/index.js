export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('repositories/get')
  }
}

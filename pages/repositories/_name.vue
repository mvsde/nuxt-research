<template>
  <v-main>

    <nuxt-link to="/repositories">← Repository list</nuxt-link>

    <v-repository
      :name="repository.name"
      :url="repository.html_url"
      :description="repository.description"
      :stars="repository.stargazers_count"
      :issues="repository.open_issues"
      :forks="repository.forks"
    />

  </v-main>
</template>

<script>
import VMain from '@/components/VMain'
import VRepository from '@/components/VRepository'

export default {
  components: {
    VMain,
    VRepository
  },

  computed: {
    repository () {
      return this.$store.state.repositories.list.find(item => {
        return item.name === this.$route.params.name
      })
    }
  }
}
</script>

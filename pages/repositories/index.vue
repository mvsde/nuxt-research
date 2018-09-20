<template>
  <v-main>

    <nuxt-link to="/">← Home</nuxt-link>

    <h1>Repositories</h1>

    <v-repository
      v-for="repository in repositories"
      :key="repository.id"
      :description="repository.description"
      :name="repository.name"
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
    repositories () {
      return this.$store.state.repositories.list
    }
  }
}
</script>

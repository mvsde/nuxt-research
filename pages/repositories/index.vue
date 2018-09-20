<template>
  <v-main>

    <nuxt-link to="/">← Home</nuxt-link>

    <h1>Repositories</h1>

    <ul>
      <li
        v-for="repository in repositories"
        :key="repository.id"
      >
        <h2>
          <nuxt-link
            :to="{
              name: 'repositories-name',
              params: {
                name: repository.name
              }
            }"
          >{{ repository.name }}</nuxt-link>
        </h2>
        <p v-if="repository.description">{{ repository.description }}</p>
      </li>
    </ul>

  </v-main>
</template>

<script>
import VMain from '@/components/VMain'

export default {
  components: {
    VMain
  },

  computed: {
    repositories () {
      return this.$store.state.repositories.list
    }
  }
}
</script>

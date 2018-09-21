<template>
  <v-main>

    <nuxt-link to="/repositories">← Repository list</nuxt-link>

    <h1>
      {{ repository.name }}
      <a
        :href="repository.html_url"
        target="_blank"
      >↗</a>
    </h1>
    <p v-if="repository.description">{{ repository.description }}</p>

    <div v-if="repository.stargazers_count">
      <h2>Stars</h2>
      <p>{{ repository.stargazers_count }}</p>
    </div>

    <div v-if="repository.open_issues">
      <h2>Issues</h2>
      <p>{{ repository.open_issues }}</p>
    </div>

    <div v-if="repository.forks">
      <h2>Forks</h2>
      <p>{{ repository.forks }}</p>
    </div>

  </v-main>
</template>

<script>
import VMain from '@/components/VMain'

export default {
  head () {
    return {
      title: this.repository.name,
      meta: [
        { name: 'description', content: this.repository.description, hid: 'description' }
      ]
    }
  },

  validate ({ params }) {
    if (typeof params.name === 'string') {
      return true
    }

    return false
  },

  components: {
    VMain
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

<template>
  <main>

    <nuxt-link :to="{ name: 'repositories' }">← Back to all repositories</nuxt-link>

    <h1>{{ repository.name }}</h1>
    <p>{{ repository.description }}</p>

    <h2>URL</h2>
    <p><a
      :href="repository.html_url"
      target="_blank"
    >{{ repository.html_url }}</a></p>

    <h2>Stars</h2>
    <p>{{ repository.stargazers_count }}</p>

    <h2>Issues</h2>
    <p>{{ repository.open_issues }}</p>

    <h2>Forks</h2>
    <p>{{ repository.forks }}</p>

  </main>
</template>

<script>
export default {
  computed: {
    repository () {
      return this.$store.state.repositories.list.find(item => {
        return item.name === this.$route.params.name
      })
    }
  }
}
</script>

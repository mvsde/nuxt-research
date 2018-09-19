<template>
  <main>

    <nuxt-link :to="{ name: 'index' }">← Back to home</nuxt-link>

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
      </li>
    </ul>

  </main>
</template>

<script>
export default {
  computed: {
    repositories () {
      return this.$store.state.repositories.list
    }
  }
}
</script>

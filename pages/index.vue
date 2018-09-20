<template>
  <v-main>

    <h1>Nuxt Research</h1>

    <ul>
      <li>
        <nuxt-link to="/repositories">Repositories</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/members-client">Members (Client)</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/members-server">Members (Server)</nuxt-link>
      </li>
    </ul>

  </v-main>
</template>

<script>
import VMain from '@/components/VMain'

export default {
  components: {
    VMain
  }
}
</script>

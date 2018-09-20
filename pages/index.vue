<template>
  <v-main>

    <h1>Nuxt Research</h1>

    <ul>
      <li>
        <nuxt-link to="/repositories">Repositories</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/members">Members</nuxt-link>
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

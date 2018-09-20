<template>
  <v-card class="repository">

    <h2>
      <nuxt-link
        :to="{
          name: 'repositories-name',
          params: { name }
        }"
      >{{ name }}</nuxt-link>
    </h2>

    <p v-if="description">{{ description }}</p>

  </v-card>
</template>

<script>
import VCard from '@/components/VCard'

export default {
  components: {
    VCard
  },

  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.repository > :first-child {
  margin-top: 0;
}

.repository > :last-child {
  margin-bottom: 0;
}
</style>

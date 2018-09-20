<template>
  <v-card>

    <h1>
      {{ name }}
      <a
        :href="url"
        target="_blank"
      >↗</a>
    </h1>
    <p v-if="description">{{ description }}</p>

    <div v-if="stars">
      <h2>Stars</h2>
      <p>{{ stars }}</p>
    </div>

    <div v-if="issues">
      <h2>Issues</h2>
      <p>{{ issues }}</p>
    </div>

    <div v-if="forks">
      <h2>Forks</h2>
      <p>{{ forks }}</p>
    </div>

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
    url: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    stars: {
      type: Number,
      default: 0
    },
    issues: {
      type: Number,
      default: 0
    },
    forks: {
      type: Number,
      default: 0
    }
  }
}
</script>

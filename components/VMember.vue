<template>
  <v-card class="member">

    <h2 class="member__title">
      <a
        :href="url"
        target="_blank"
      >{{ name || login }}</a>
    </h2>

    <img
      v-if="avatar"
      class="member__avatar"
      height="120"
      :src="avatar"
      width="120"
    >

    <p v-if="bio">{{ bio }}</p>

    <div v-if="login">
      <h3>Username</h3>
      <p>{{ login }}</p>
    </div>

    <div v-if="location">
      <h3>Location</h3>
      <p>{{ location }}</p>
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
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    login: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.member__title {
  margin-top: 0;
}

.member__avatar {
  border-radius: 50%;
}
</style>

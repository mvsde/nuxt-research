<template>
  <v-main>

    <nuxt-link to="/">← Home</nuxt-link>

    <h1>Members (Server)</h1>

    <v-member
      v-for="member in members"
      :key="member.id"
      :avatar="member.avatar_url"
      :bio="member.bio"
      :location="member.location"
      :login="member.login"
      :name="member.name"
      :url="member.html_url"
    />

  </v-main>
</template>

<script>
import VMain from '@/components/VMain'
import VMember from '@/components/VMember'

import api from '@/api'

export default {
  head: {
    title: 'Members (Server)'
  },

  components: {
    VMain,
    VMember
  },

  async asyncData () {
    return api.get('/orgs/nuxt/members')
      .then(response => {
        const requests = []

        response.data.forEach(member => {
          requests.push(api.get(member.url))
        })

        return Promise.all(requests)
      })
      .then(members => {
        return {
          members: members.map(member => member.data)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>

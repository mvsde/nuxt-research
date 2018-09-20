<template>
  <v-main>

    <nuxt-link to="/">← Home</nuxt-link>

    <h1>Members</h1>

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
  components: {
    VMain,
    VMember
  },

  data () {
    return {
      members: []
    }
  },

  mounted () {
    this.$nextTick()
      .then(() => {
        this.$nuxt.$loading.start()
        return api.get('/orgs/nuxt/members')
      })
      .then(response => {
        const something = []

        response.data.forEach(member => {
          something.push(api.get(member.url))
        })

        return Promise.all(something)
      })
      .then(members => {
        this.members = members.map(member => member.data)
        this.$nuxt.$loading.finish()
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>

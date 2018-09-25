<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in branch" :key="item.commit.sha">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  asyncData ({ store, route }) {
    return store.dispatch('fetchBranch')
  },
  computed: {
    branch () {
      return this.$store.state.branch
    }
  }
}
</script>

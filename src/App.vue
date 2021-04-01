<template>
  <div id="app">
    <Header />
    <StatusBar v-if="login" />
    <div class="container">
      <router-view class="main"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import StatusBar from '@/components/StatusBar'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  components: { Header, StatusBar, Footer },
  computed: {
    ...mapGetters({ login: "getUserLogged" })
  }
}
</script>

<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.main {
  flex: 1 0 auto;
  margin: 128px 0px 50px 0px;
}

</style>
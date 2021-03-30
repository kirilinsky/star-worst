<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view class="main"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer }
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
}

</style>
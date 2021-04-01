<template>
  <div class="market">

    <Card :units="units"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card'

export default {
  components: { Card },
  computed: {
    ...mapGetters({ units: 'getUnits' })
  },
  created() {
    this.$store.dispatch('setUnits')
  }
}
</script>

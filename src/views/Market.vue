<template>
  <div class="market">

    <div class="unit" v-for="unit in units" :key="unit._id">
      <p>{{unit.name}}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters({ units: 'getUnits' })
  },
  created() {
    this.$store.dispatch('setUnits')
  }
}
</script>

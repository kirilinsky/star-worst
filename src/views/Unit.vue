<template>
  <div class="unit-page">
    Страница юнита хире {{baseUnit}}
  </div>
</template>

<script>
import { getUnit } from "@/services/api/connections"

export default {
  data: () => ({
    baseUnit: null
  }),
  created() {
    getUnit().then(x => { this.baseUnit = x.data })
  }
}
</script>
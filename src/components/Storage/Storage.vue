<template>
  <div class="storage">
    <h2>Все персонажи:</h2>
    <vs-card-group>
      <Item :unit="unit" v-for="unit in units" :key="unit.id" />
    </vs-card-group>
  </div>
</template>

<script>

import notificationsMixin from "@/mixins/notifications.mixin";
import Item from "@/components/Storage/Item";

export default {
  components: { Item },
  props: {
    units: {
      type: Array,
    },
  },
  mixins: [notificationsMixin]
};
</script>

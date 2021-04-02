<template>
  <div class="storage-profile">
    <h2>storage:</h2>
    <div v-for="unit in units" :key="unit.id" class="storage-profile-gallery">
      <Item :unit="unit" />
    </div>
  </div>
</template>

<script>
/* 
import { buyUnit } from '@/services/api/connections' */
import notificationsMixin from "@/mixins/notifications.mixin";
import Item from "@/components/Storage/Item";

export default {
  components: { Item },
  props: {
    units: {
      type: Array,
    },
  },
  mixins: [notificationsMixin],

  methods: {
    /*  tryToBuyUnit(id) {
      const token = localStorage.getItem('token')
      buyUnit(id, token)
        .then(res => {
          this.openNotification('bottom-right', 'rgb(70, 201, 58)', 'Персонаж приобретен, поздравляю!', res.data.message)
          this.$store.dispatch('setUserInfo')
        })
        .catch(err => this.openNotification('bottom-right', 'rgb(255, 71, 87)', 'Ошибка покупки!', err.response.data.message))
    } */
  },
};
</script>

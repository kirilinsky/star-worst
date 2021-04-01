<template>
  <div class="status-bar">
    <div class="status-bar-user">
      <span class="status-bar-user__name">Имя: {{ userInfo.name }}</span>
      <span class="status-bar-user__unit">Количество юнитов: {{ userInfo.storage ? userInfo.storage.length : 0 }}</span>
      <div class="status-bar-user__bill">
        <span>Битки: {{ userInfo.bitcoin }} ₿</span>
        <span>Кпм: {{ userInfo.capital }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ userInfo :'getUserStatus' })
  },
  created() {
    this.$store.dispatch('setUserInfo')
  }
}
</script>

<style lang="scss" scoped>
.status-bar {
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  padding: 20px 160px;
  border-bottom: 2px solid #1e2023;
}
</style>
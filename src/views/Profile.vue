<template>
  <div class="profile">
    <h1 class="title">Профиль: {{ userInfo.name }}</h1>
    <Storage :units="userInfo.storage" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Storage from "@/components/Storage/Storage";

export default {
  components: { Storage },
  computed: {
    ...mapGetters({ userInfo: "getUserStatus" }),
  },
  created() {
    this.$store.dispatch("setUserInfo");
  },
};
</script>

<template>
  <div class="about">
    <h1>Your Profile</h1>
    {{ userInfo.name }}
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

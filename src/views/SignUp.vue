<template>
  <div class="home">
    ыыы sign up here! ты черт {{ login }}
    <button @click="loginAction">войти</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods:{
    ...mapActions({loginAction: 'loginAction'})
  },
  computed: {
    ...mapGetters({ login: "getUserLogged" }),
  },
};
</script>

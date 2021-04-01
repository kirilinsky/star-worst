<template>
  <header class="header">
    <router-link to="/" class="header__logo">Star Worst</router-link>
    <nav class="header-nav">
      <router-link class="header-nav__link" to="/">Главная</router-link>
      <router-link class="header-nav__link" to="/market">Базар</router-link>
      <router-link v-if="login" class="header-nav__link" to="/profile">Профиль</router-link>
      <router-link v-else class="header-nav__link" to="/login">Присоединиться</router-link>
      <button v-if="login" @click="redirect" class="header-nav__link">Выйти</button>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({ loginAction: "loginAction" }),
    redirect() {
      this.loginAction();
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters({ login: "getUserLogged" }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  flex: 0 0 auto;
  &-nav__link {
    background: transparent;
    color: #fff;
    font: inherit;
    border: none;
    &.router-link-exact-active {
      color: rgb(26, 92, 255);
    }
  }
}
</style>

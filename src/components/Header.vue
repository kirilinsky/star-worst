<template>
  <header class="header">
    <router-link to="/" class="header__logo" tag="span">Star Worst</router-link>
    <nav class="header-nav">
      <router-link class="header-nav__link" to="/">Home</router-link>
      <router-link class="header-nav__link" to="/signup">Sign Up</router-link>
      <router-link class="header-nav__link" to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    flex: 0 0 auto;
    &-nav__link {
      &.router-link-exact-active {
        color: rgb(26, 92, 255);
      }
    }
  }
</style>

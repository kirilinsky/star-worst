<template>
  <div class="sign-up">
    <div class="sign-up-wrapper">
      <h1 class="title">Привет боец, давай уже заходи!</h1>
      <form class="form sign-up__form">
        <vs-input border placeholder="Логин" />
        <vs-input color="#7d33ff" border type="password" placeholder="Пароль" />

        <vs-button 
          class="button sign-up__button" 
          transparent 
          :active="active == 0" 
          @click="redirect"
        >
          Войти
        </vs-button>
        
      </form>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

export default {
  methods:{
    ...mapActions({ loginAction: 'loginAction' }),
    redirect() {
      this.loginAction();
      this.$router.push('/profile')
    }
  },
  computed: {
    ...mapGetters({ login: "getUserLogged", active: 'getActive' })
  },
};

</script>

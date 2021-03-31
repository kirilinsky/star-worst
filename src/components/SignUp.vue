<template>
  <div>
    <h1 class="title">Привет боец, давай уже заходи!</h1>
    <form class="form login-form">
      <vs-input border placeholder="Почта" v-model="email" />
      <vs-input color="#7d33ff" border type="password" placeholder="Пароль" v-model="pass" />

      <div class="login-form__buttons">
        <vs-button
          class="button login__button"
          transparent
          :active="active == 0"
          @click="redirect"
        >
          Войти
        </vs-button>
        <span class="login-form__account" @click="goToSignIn">У меня нет аккаунта</span>
      </div>

    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    email: '',
    pass: ''
  }),
  computed: {
    ...mapGetters({ active: 'getActive' })
  },
  methods:{
    ...mapActions({ loginAction: 'loginAction', registered: 'setRegistered' }),
    redirect() {
      this.loginAction();
      this.$router.push('/profile')
    },
    goToSignIn() {
      this.registered()
    }
  }
}
</script>
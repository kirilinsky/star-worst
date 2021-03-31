<template>
  <div>
    <h1 class="title">Ты еще не снами? Пфф, странный ты тип!</h1>
    <form class="form login__form">
      <vs-input border placeholder="Логин" />
      <vs-input color="#eeff21" border type="email" placeholder="Почта" />
      <vs-input color="#7d33ff" border type="password" placeholder="Пароль" />

      <vs-button 
        class="button login__button" 
        transparent 
        :active="active == 0" 
        @click="redirect"
      >
        Зарегистрироваться
      </vs-button>
    
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      active: 'getActive' 
    })
  },
  methods:{
    ...mapActions({ loginAction: 'loginAction' }),
    redirect() {
      this.loginAction();
      this.$router.push('/profile')
    }
  },
}
</script>
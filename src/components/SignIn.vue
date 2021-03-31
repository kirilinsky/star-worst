<template>
  <div>
    <h1 class="title">Ты еще не снами? Пфф, странный ты тип!</h1>
    <form class="form login__form" @submit.prevent="setNewUser">
      <vs-input border placeholder="Имя" v-model="name" />
      <vs-input color="#eeff21" border type="email" placeholder="Почта" v-model="email" />
      <vs-input color="#7d33ff" border type="password" placeholder="Пароль" v-model="pass" />

      <vs-button 
        class="button login__button" 
        transparent 
        :active="active == 0" 
      >
        Зарегистрироваться
      </vs-button>
    
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { tryToSignIn } from '@/services/api/connections'

export default {
  data: () => ({ 
    name: '',
    email: '',
    pass: ''
  }),
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
    },
    setNewUser() {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.pass
      }

      tryToSignIn(userData).then(response => console.log(response.data))
    }
  },
  created() {
    
  }
}
</script>
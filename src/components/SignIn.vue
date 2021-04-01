<template>
  <div>
    <h1 class="title">Ты еще не снами? Пфф, странный ты тип!</h1>
    <form class="form login-form" @submit.prevent="redirect">
      <vs-input border placeholder="Имя" v-model="name" />
      <vs-input color="#eeff21" border type="email" placeholder="Почта" v-model="email" />
      <vs-input color="#7d33ff" border type="password" placeholder="Пароль" v-model="pass" />

      <div class="login-form__buttons">
        <vs-button 
          class="button login__button" 
          transparent 
          :active="active == 0" 
        >
          Зарегистрироваться
        </vs-button>
        <span class="login-form__account" @click="goToSignUp">У меня уже есть аккаунт</span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { tryToSignIn } from '@/services/api/connections'
import notificationsMixin from '@/mixins/notifications.mixin'


export default {
  data: () => ({ 
    name: '',
    email: '',
    pass: ''
  }),
  mixins: [notificationsMixin],
  computed: {
    ...mapGetters({ active: 'getActive' })
  },
  methods: {
    ...mapActions({ loginAction: 'loginAction', registered: 'setRegistered' }),
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

      tryToSignIn(userData).then(response => {
        if (response.data.success) {
          this.openNotification('bottom-right', 'rgb(70, 201, 58)', 'Регистрация завершена!', 'Заходи скорее, тебя не хватает!')
        }
      }).catch(err => {
        this.openNotification('bottom-right', 'rgb(255, 71, 87)', 'Ошибка регистрации!', 'Ну и дела... Перепроверь все и давай снова!')
      })
    },
    goToSignUp() {
      this.registered()
    }
  }
}
</script>
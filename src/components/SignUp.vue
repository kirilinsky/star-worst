<template>
  <div>
    <h1 class="title">Привет боец, давай уже заходи!</h1>
    <form class="form login-form" @submit.prevent="login">
      <vs-input border placeholder="Почта" v-model="email" />
      <vs-input
        color="#7d33ff"
        border
        type="password"
        placeholder="Пароль"
        v-model="pass"
      />

      <div class="login-form__buttons">
        <vs-button
          class="button login__button"
          transparent
          :active="active == 0"
        >
          Войти
        </vs-button>
        <span class="login-form__account" @click="goToSignIn"
          >У меня нет аккаунта</span
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { tryToLogIn } from "@/services/api/connections";
import notificationsMixin from '@/mixins/notifications.mixin'

export default {
  data: () => ({
    email: "",
    pass: "",
  }),
  mixins: [notificationsMixin],
  computed: {
    ...mapGetters({ active: "getActive" }),
  },
  methods: {
    ...mapActions({ loginAction: "loginAction", registered: "setRegistered" }),
    redirect() {
      this.loginAction();
      this.$router.push("/profile");
    },
    goToSignIn() {
      this.registered();
    },
    login() {
      tryToLogIn({ email: this.email, password: this.pass })
        .then((res) => {
          if (res.data.token) {
            this.openNotification(
              "bottom-right",
              "rgb(222, 212, 21)",
              "Привет",
              "проходи"
            );
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("session", true);
            this.loginAction();
            this.$router.push("/profile");
          }
        })
        .catch((e) => {
          this.openNotification(
            "bottom-right",
            "rgb(255, 71, 87)",
            "Ошибка  !",
            e.response.data.message
          );
        });
    }
  },
};
</script>

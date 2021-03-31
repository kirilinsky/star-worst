<template>
  <div class="login">
    <div class="login-wrapper">
      <SignUp />
      <SignIn />
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

export default {
  components: { SignIn, SignUp },
  computed: {
    ...mapGetters({ login: "getUserLogged" })
  },
};

</script>

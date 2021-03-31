<template>
  <div class="login">
    <div class="login-wrapper">
      <SignIn v-if="!registered"/>
      <SignUp v-else />
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex"

import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

export default {
  components: { SignIn, SignUp },
  computed: {
    ...mapGetters({ login: "getUserLogged", registered: 'getUserRegistered' })
  },
};

</script>

<template>
  <div>
    <LoginForm @login="login"></LoginForm>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import LoginForm from "../components/login/LoginForm"

export default {
  components: { LoginForm },
  computed: {
    ...mapGetters({
      authorized: "auth/authorized",
    }),
  },
  methods: {
    ...mapActions({
      loginAction: "auth/LOGIN",
    }),
    async login(user) {
      await this.loginAction(user)
      if (this.authorized) this.$router.push({ path: "board" })
    },
  },
}
</script>

<style>
</style>
<template>
  <div class="login">
    <h1>로그인</h1>
    <form>
      <div>
        <input v-model="email" type="text" />
      </div>
      <div>
        <input v-model="password" type="password" />
      </div>
      <div>
        <button @click="submit">로그인</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async submit() {
      const user = {
        email: this.email,
        password: this.password,
      }
      this.$emit("login", user)
    },
  },
}
</script>

<style>
.login {
  width: 15rem;
  margin: 10rem auto;
}
/* .login form {
  width: 100%;
} */
.login form input,
.login form button {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  text-align: center;
}
</style>
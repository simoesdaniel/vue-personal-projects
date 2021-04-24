<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        <input type="email" name="email" ref="email" />
      </label>
      <label for="password">
        <input type="password" name="password" ref="password" />
      </label>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const userData = {
        mode: "LOGIN",
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      this.$store
        .dispatch("auth/authenticate", userData)
        .then((signup) => {
          console.log(signup);
          this.$store.dispatch("auth/login", { userData, signup: signup.data });
          this.$router.replace("/my-todos/" + signup.data.localId);
        })
        .catch((e) => {
          alert("UPS! Cannot Signup");
          console.log(e);
        });
    },
  },
};
</script>

<style></style>

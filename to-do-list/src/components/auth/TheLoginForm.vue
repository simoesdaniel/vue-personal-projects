<template>
  <div class="border rounded pb-4 mb-4 w-96 mx-auto">
    <h2 class="text-light-blue-500 font-bold py-4 text-lg">Sign in form</h2>
    <form @submit.prevent="login">
      <div class="grid grid-cols-2">
        <div>
          <label for="email"> Email </label>
        </div>
        <div>
          <input
            class="border border-border-gray-500 rounded-sm"
            type="email"
            name="email"
            ref="email"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 pt-2">
        <div>
          <label for="password"> Password </label>
        </div>
        <div>
          <input
            class="border border-border-gray-500 rounded-sm"
            type="password"
            name="password"
            ref="password"
          />
        </div>
      </div>
      <div class="mt-3">
        <button class="bg-light-blue-500 text-white px-5 py-2 rounded">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const userData = {
        mode: "LOGIN",
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      await this.$store
        .dispatch("auth/authenticate", userData)
        .then((signin) => {
          axios
            .get(
              "https://todo-sandbox-99320-default-rtdb.firebaseio.com/users.json"
            )
            .then((userProfiles) => {
              let user;
              const users = userProfiles.data;
              for (const key in users) {
                if (users[key].email === userData.email) {
                  user = users[key];
                  continue;
                }
              }

              if (user) {
                this.$store.dispatch("auth/login", {
                  userData: { name: user.fullName, email: user.email },
                  auth: signin.data,
                });
              } else {
                throw new Error("no matching user registered");
              }
            });
          this.$router.replace("/my-todos/");
        })
        .catch((e) => {
          alert("UPS! Cannot signin");
          console.log(e);
        });
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <form @submit.prevent="register">
      <label for="fullName">
        Your Full Name
        <input type="text" name="fullName" v-model="name"
      /></label>
      <label for="email">
        Your email
        <input type="email" name="email" v-model="email"
      /></label>
      <label for="password">
        Your password
        <input type="password" name="password" v-model="password" />
      </label>
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const register = async () => {
      let signUpResponse = null;
      const userData = {
        mode: "SIGNUP",
        name: name.value,
        email: email.value,
        password: password.value,
      };
      await store
        .dispatch("auth/authenticate", userData)
        .then((data) => (signUpResponse = data))
        .catch((e) => {
          alert("UPS! Cannot Signup");
          console.log(e);
        });
      await store
        .dispatch("auth/registerUser", {
          userData,
          auth: signUpResponse,
        })
        .then(() => {
          store.dispatch("auth/login", { userData, auth: signUpResponse.data });
          router.replace("/my-todos/" + signUpResponse.data.localId);
        })
        .catch((e) => console.error(e));
    };
    return { name, email, password, register };
  },
};
</script>

<style></style>

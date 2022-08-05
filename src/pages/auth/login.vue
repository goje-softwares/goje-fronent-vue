<template>
  <div>
    <div class="form-group">
      <text-input
          v-model="email"
          input-label="email"
      />
      <text-input
          v-model="password"
          input-label="password"
      />
      <submit-button @click="login"></submit-button>
    </div>
  </div>
</template>

<script>
import SubmitButton from "./../../components/form/submit-button.vue";
import TextInput from "./../../components/form/text-input.vue";
import {APIs, HTTP} from "../../plugins/http.js";
import store from "../../plugins/store.js";

export default {
  name: "login",
  components: {SubmitButton, TextInput},
  data() {
    return {
      email: '',
      password: ''
    }
  }, methods: {
    login() {

      let api = APIs.auth.login;
      api.data = {
        'email': this.$data.email,
        'password': this.$data.password
      }

      HTTP(api)
          .then(response => {
            if (response.status === 200) {
              store.setVal('auth.token', response.data.access_token)
              store.setVal('userLogged', true)
              this.$swal('ورود با موفقیت انجام شد.');

            }
          })
          .catch(e => {
            console.log(e)
          })
    }
  }

}
</script>

<style scoped>

</style>
<template>
  <div>
    <text-input
      v-model="name"
      input-label="name"
    />
    <text-input
      v-model="price"
      input-label="price"
    />
    <text-input
      v-model="description"
      input-label="description"
    />
    <submit-button @click="sendData"></submit-button>
  </div>
</template>

<script>
import TextInput from "../../components/form/text-input.vue";
import SubmitButton from "../../components/form/submit-button.vue";
import {APIs, HTTP} from "../../plugins/http.js";

export default {
  name: "Create",
  components: {
    SubmitButton,
    TextInput
  },
  data() {
    return {
      name: '',
      price: 0,
      description: ''
    }
  },methods:{
    sendData(){
      let api = APIs.product.create
      api.data = {
        name: this.name,
        price: this.price,
        description: this.description,
      }
      HTTP(api)
          .then(response => {
              this.$swal('ثبت محصول با موفقیت انجام شد.');
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
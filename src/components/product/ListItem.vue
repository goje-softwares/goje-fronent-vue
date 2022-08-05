<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>
      <button class="btn-delete" @click="deleteProduct">delete</button>
    </td>
  </tr>
</template>

<script>
import {APIs, HTTP} from "../../plugins/http.js";
import store from "../../plugins/store.js";

export default {
  name: "ListItem",
  props: ['product'],
  methods: {
    deleteProduct() {
      let api = APIs.product.delete
      console.log(this.product.id)
      api.url = api.url.replace('{id}', this.product.id)
      HTTP(api)
          .then(response => {
            console.log(response)
            this.$swal('حذف محصول شما با موفقیت انجام شد.');
          })
          .catch(e => {
            console.log(e)
          })
    }
  }

}
</script>

<style scoped>
td {
  padding: 5px 15px;
  border: 1px solid #ffffff;
}

.btn-delete {
  border: 1px solid #f61111;
  color: #ffffff;
  background: #f61111;
}

</style>
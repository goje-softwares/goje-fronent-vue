<template>
  <list>
    <ListHeader/>
    <list-item
        v-for="product in products"
        :product="product"
    />
  </list>
</template>

<script>
import List from '../components/product/List.vue'
import ListHeader from '../components/product/ListHeader.vue'
import ListItem from '../components/product/ListItem.vue'
import {APIs, HTTP} from "../plugins/http.js";

export default {
  name: "home",
  components: {
    List,
    ListHeader,
    ListItem
  },
  data() {
    return {
      products: []
    }
  }, created() {
    let api = APIs.product.list;
    HTTP({method: api.method, url: api.url})
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            this.products = response.data
          }
        }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style scoped>

</style>
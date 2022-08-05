<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
  </tr>
</template>

<script>
export default {
  name: "ListItem",
  props: ['product']
}
</script>

<style scoped>
td{
  padding: 5px 15px;
  border: 1px solid #ffffff;
}
</style>
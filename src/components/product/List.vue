<template>
  <div>
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "List",
}

</script>

<style scoped>
table, tr{
  border-collapse: collapse;
  border: 1px solid #ffffff;
}
</style>
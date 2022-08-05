<script>

export default {
  name: "text-input",

  props: ['inputLabel', 'modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <label>{{ inputLabel }}</label>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>


<style scoped>
label, input {
  display: block;
  color: #f9f9f9;
  padding: 8px 15px;
}
</style>
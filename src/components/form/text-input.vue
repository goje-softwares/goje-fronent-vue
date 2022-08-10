<script>

export default {
  name: "text-input",

  props: ['inputLabel', 'modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <div class="form-group">
    <label class="col-form-label">{{ inputLabel }}</label>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control"
    />
  </div>

</template>


<style scoped>

</style>
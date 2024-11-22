<script setup>
const value = defineModel({
  type: [String, Number, Object, Array],
  defualt: null,
});
defineProps({
  type: { type: String, default: null },
  props: { props: Object, default: null },
});
</script>

<template>
  <div class="input-wrap">
    <InputSelectButton
      v-if="type === 'select-button'"
      v-model="value"
      v-bind="props"
    />
    <InputDropdown
      v-else-if="type === 'dropdown'"
      v-model="value"
      v-bind="props"
    />
  </div>
</template>

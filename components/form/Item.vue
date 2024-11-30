<script setup>
const $emit = defineEmits(['input', 'change']);
const value = defineModel({
  type: String,
  required: true,
});
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  props: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="form-item">
    <div class="form-item__label">
      {{ label }}
    </div>
    <div class="form-item__input">
      <Input
        v-model="value"
        :type="type"
        :props="props.props"
        @input="$emit('input', $event)"
        @change="$emit('change', $event)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-item {
  padding: 5px 0;

  & + .form-item {
    margin-top: 10px;
  }

  &__label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }

  &__input {
  }
}
</style>

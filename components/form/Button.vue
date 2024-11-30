<script setup>
const props = defineProps({
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  },
  top: {
    type: [String, Number],
    default: null,
  },
  bottom: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const style = useStyleProps(props);
</script>

<template>
  <button class="button" :class="type" :style="style" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid $color-divider;
  font-size: 16px;
  background-color: #fff;
  transition: 0.3s;
  color: $color-text;
  cursor: pointer;

  &:hover {
    background-color: $color-light;
  }

  &.primary {
    background-color: $color-primary;
    color: #fff;
    border-color: #fff;
    
    &:hover {
      background-color: $color-dark-primary;
    }
  }

  &.accent {
    background-color: $color-accent;
    color: #fff;
    border-color: #fff;
  }

  &[disabled] {
    background-color: $color-divider;
    cursor: not-allowed;

    &:hover {
      background-color: $color-divider;
    }
  }
}
</style>

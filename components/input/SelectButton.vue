<script setup>
const $emit = defineEmits(['input', 'change']);
const value = defineModel({
  type: [String, Number],
  required: true,
});

const props = defineProps({
  generator: {
    type: Array,
    default: () => [],
  },
});

function handleClick(item) {
  value.value = item.value;
  $emit('input', item.value);
  $emit('change', item.value);
}
</script>

<template>
  <div class="select-button">
    <buttton
      v-for="(item, i) in generator"
      :key="i"
      type="button"
      class="select-button__item"
      aria-role="button"
      :class="{ active: item.value === value }"
      @click="handleClick(item)"
    >
      <div class="radio-icon"></div>
      {{ item.name }}
    </buttton>
  </div>
</template>

<style lang="scss" scoped>
.select-button {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &__item {
    height: 45px;
    position: relative;
    padding-left: 30px;
    padding-right: 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid $color-divider;
    color: $color-text;
    white-space: nowrap;
    border-radius: 2px;
    display: flex;
    align-items: center;
    transition: 0.35s;
    cursor: pointer;

    .radio-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid $color-secondary;
      background-color: #fff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: 0.35s;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 7px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.35s;
      }
    }

    &.active {
      background-color: $color-primary;
      color: #fff;
      border-color: #fff;
      .radio-icon {
        border-color: #fff;

        &::before {
          background-color: $color-primary;
        }
      }
    }
  }
}
</style>

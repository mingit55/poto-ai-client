<script setup>
const active = ref(false);
const value = defineModel({
  type: [String, Number],
});
const props = defineProps({
  generator: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '선택',
  },
});
const showText = computed(
  () =>
    props.generator.find((item) => item.value === value.value)?.name ||
    props.placeholder,
);

function handleClickItem(item) {
  value.value = item.value;
  active.value = false;
}
</script>

<template>
  <div
    class="dropdown-wrap"
    :class="{ active }"
    v-click-outside="() => (active = false)"
    @click="active = true"
  >
    <div class="dropdown-text">{{ showText }}</div>
    <div class="icon">
      <span v-if="active"><fa icon="chevron-up" /></span>
      <span v-else><fa icon="chevron-down" /></span>
    </div>
    <div class="dropdown-list">
      <div
        v-for="(item, i) in generator"
        :key="i"
        class="dropdown-list__item"
        @click.stop="handleClickItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-wrap {
  height: 45px;
  border: 1px solid $color-divider;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  .dropdown-text {
    padding-left: 10px;
    padding-right: 40px;
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    color: $color-text;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .dropdown-list {
    position: absolute;
    left: -1px;
    width: calc(100% + 2px);
    top: 100%;
    z-index: 100;
    border: 1px solid $color-divider;
    max-height: 150px;
    overflow: auto;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;

    &__item {
      height: 45px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 10px;

      & + .dropdown-list__item {
        border-top: 1px solid $color-divider;
      }
    }
  }

  &.active {
    .dropdown-list {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>

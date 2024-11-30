<script setup>
const loadingStack = ref(0);

function handleLoadingStart() {
  loadingStack.value++;
}
function handleLoadingStop() {
  loadingStack.value--;
}

onBeforeMount(() => {
  useEventBus('loadingStart').on(handleLoadingStart);
  useEventBus('loadingStop').on(handleLoadingStop);
});

onBeforeUnmount(() => {
  useEventBus('loadingStart').off(handleLoadingStart);
  useEventBus('loadingStop').off(handleLoadingStop);
});
</script>

<template>
  <div v-if="loadingStack > 0" class="loading-container">
    <div class="loading-wrap">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:list';

.loading-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .loading-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 5px;

    > div {
      width: 15px;
      height: 15px;
      border-radius: 4px;
      background-color: $color-primary;
      animation: loadingAnime 2.5s infinite;

      $colors: (#006796, #006ea1, #0096dc, #4fc7ff);
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation-delay: ($i - 1) * 0.2s;
          background-color: list.nth($colors, $i);
        }
      }

      @keyframes loadingAnime {
        0% {
          transform: translateY(0) rotate(-180deg) scale(0);
        }
        30% {
          transform: translateY(0) rotate(-80deg) scale(0.8);
        }
        50% {
          transform: translateY(-30px) rotate(0deg) scale(1);
        }
        70% {
          transform: translateY(0) rotate(80deg) scale(0.8);
        }
        100% {
          transform: translateY(0) rotate(180deg) scale(0);
        }
      }
    }
  }
}
</style>

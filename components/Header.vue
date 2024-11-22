<template>
  <header class="header">
    <button type="button" class="btn-menu">
      <fa icon="bars" />
    </button>
    <CommonLogo class="logo" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 50px;
  position: relative;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-menu {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 14px;
    color: $color-text;
    cursor: pointer;
  }
}
</style>

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
  border-bottom: 1px solid #333;
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
    color: #333;
    cursor: pointer;
  }
}
</style>
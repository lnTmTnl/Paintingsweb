<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<style>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    box-shadow: 10px 10px 10 rgba(100, 100, 100, 2);
  }
</style>
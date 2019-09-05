<template>
  <!-- Vue-managed site layout -->
  <div id="vue-app">
    <router-link to="/">Home</router-link>
    <router-link to="/hello">Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  /* Application default font */
  #vue-app {
    font-family: 'devicons';
  }
</style>
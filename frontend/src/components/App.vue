<template>
  <!-- Vue-managed page layout -->
  <div id="vue-app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  /* Application default font */
  #vue-app {
    font-family: 'devicons';
  }
</style>
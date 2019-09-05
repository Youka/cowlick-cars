<template>
  <!-- Vue-managed site layout -->
  <v-app>
    <v-card>
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
    </v-card>
    <router-view></router-view>
  </v-app>
</template>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'devicons';
  }
</style>
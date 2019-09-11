<template>
  <form>
    {{message}}
    <input type="button" value="Increment counter" v-on:click="increment" />
    {{count}}
    <img src="../../assets/images/ayaya.png" width=100 />
  </form>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";
  import {mapGetters, mapMutations} from "vuex";

  // Extend vue instance of component
  export default Vue.extend({
    // Component data
    data: () => ({
      message: "Hello world! \ue6a8"
    }),
    // Map shared data store into component
    computed: mapGetters([
      "count"
    ]),
    methods: mapMutations([
      "increment"
    ])
  });
</script>
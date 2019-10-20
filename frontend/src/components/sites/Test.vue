<template>
    <v-container fluid>
        <clc-playground />
    </v-container>
</template>

<script lang="ts">
    import Playground from "../tiles/Playground.vue";

    export default {
        components: {
            "clc-playground": Playground
        }
    };
</script>
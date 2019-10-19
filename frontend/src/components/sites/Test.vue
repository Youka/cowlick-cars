<template>
    <v-container fluid>
        <clc-login />
    </v-container>
</template>

<script lang="ts">
    import Login from "../tiles/Login.vue";

    export default {
        components: {
            "clc-login": Login
        }
    };
</script>
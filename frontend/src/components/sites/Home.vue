<template>
    <v-container fluid>
        <v-row>
            <v-col lg="6" sm="12">
                <clc-hello />
            </v-col>
            <v-col lg="6" sm="12">
                <clc-login />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Hello from "../tiles/Hello.vue";
    import Login from "../tiles/Login.vue";

    export default {
        components: {
            "clc-hello": Hello,
            "clc-login": Login
        }
    };
</script>
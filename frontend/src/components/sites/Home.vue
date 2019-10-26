<template>
    <v-container fluid>
        <v-row dense>
            <v-col xl="6" lg="6" md="12" sm="12" xs="12">
                <clc-hello />
            </v-col>
            <v-col xl="6" lg="6" md="12" sm="12" xs="12">
                <clc-hello />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Hello from "../tiles/Hello.vue";

    export default {
        components: {
            "clc-hello": Hello
        }
    };
</script>
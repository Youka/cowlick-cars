<template>
    <v-container fluid>
        <v-row>
            <v-col xl="4" lg="4" md="12" sm="12" xs="12">
                <clc-playground />
            </v-col>
            <v-col xl="8" lg="8" md="12" sm="12" xs="12">
                <clc-data-sandbox />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Playground from "../tiles/Playground.vue";
    import DataSandbox from "../tiles/DataSandbox.vue";

    export default {
        components: {
            "clc-playground": Playground,
            "clc-data-sandbox": DataSandbox
        }
    };
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col lg="4" sm="12">
                <clc-playground />
            </v-col>
            <v-col lg="8" sm="12">
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
<template>
    <v-container fluid>
        <v-row dense>
            <v-col xl="4" lg="4" md="12" sm="12" xs="12">
                <clc-demo-counter />
                <clc-demo-todos class="mt-2" />
                <clc-demo-component name="Mustermann" @foo="print('foo')" class="mt-2">
                    Max
                </clc-demo-component>
            </v-col>
            <v-col xl="8" lg="8" md="12" sm="12" xs="12">
                <clc-data-sandbox />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import DemoCounter from "../tiles/DemoCounter.vue";
    import DemoTodos from "../tiles/DemoTodos.vue";
    import DemoComponent from "../tiles/DemoComponent.vue";
    import DataSandbox from "../tiles/DataSandbox.vue";

    export default {
        methods: {
            print: (msg: string) => {
                console.info(msg);
            }
        },
        components: {
            "clc-demo-counter": DemoCounter,
            "clc-demo-todos": DemoTodos,
            "clc-demo-component": DemoComponent,
            "clc-data-sandbox": DataSandbox
        }
    };
</script>
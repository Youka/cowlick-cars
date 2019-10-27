<template>
    <v-card>
        <!-- Tab headers -->
        <v-tabs v-model="activeTab">
            <v-tab><v-icon left>mdi-table</v-icon>{{$t("groupedTable.title")}}</v-tab>
            <v-tab><v-icon left>mdi-chart-bar</v-icon>{{$t("lineChart.title")}}</v-tab>
        </v-tabs>
        <!-- Tab contents -->
        <v-tabs-items v-model="activeTab">
            <v-tab-item class="pa-3">
                <clc-groupedtable />
            </v-tab-item>
            <v-tab-item class="pa-3">
                <clc-linechart />
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script lang="ts">
    import GroupedTable from "../widgets/GroupedTable.vue";
    import LineChart from "../widgets/LineChart.vue";

    export default {
        data: () => ({
            activeTab: null
        }),
        components: {
            "clc-groupedtable": GroupedTable,
            "clc-linechart": LineChart
        }
    };
</script>
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
                <clc-groupedtable :data="tableData" />
            </v-tab-item>
            <v-tab-item class="pa-3">
                <clc-linechart :data="chartData" />
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script lang="ts">
    import GroupedTable from "../widgets/GroupedTable.vue";
    import LineChart from "../widgets/LineChart.vue";

    export default {
        data: () => ({
            activeTab: null,
            tableData: [
                {
                    category: "Food",
                    product: "Banana",
                    price: 0.40
                },
                {
                    category: "Food",
                    product: "Apple",
                    price: 0.50
                },
                {
                    category: "Food",
                    product: "Nut",
                    price: 0.05
                },
                {
                    category: "Food",
                    product: "Water bottle",
                    price: 0.80
                },
                {
                    category: "Food",
                    product: "Smoothie",
                    price: 2.30
                },
                {
                    category: "Entertainment",
                    product: "Video game",
                    price: 59.99
                },
                {
                    category: "Vehicles",
                    product: "Boat",
                    price: 32_757
                }
            ],
            chartData: [
                {
                    date: new Date("2015-01-01T21:00:00"),
                    value: 0
                },
                {
                    date: new Date("2016-01-01T00:00:00"),
                    value: 64
                },
                {
                    date: new Date("2017-01-01T10:00:00"),
                    value: 135
                },
                {
                    date: new Date("2018-01-01T14:00:00"),
                    value: 96
                },
                {
                    date: new Date("2019-01-01T17:00:00"),
                    value: 147
                }
            ]
        }),
        components: {
            "clc-groupedtable": GroupedTable,
            "clc-linechart": LineChart
        }
    };
</script>
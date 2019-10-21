<template>
    <v-tabs>
        <!-- Table -->
        <v-tab>{{$t("dataSandbox.products.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <!-- Search -->
            <v-text-field
                v-model="table.search"
                :label="$t('dataSandbox.products.search')"
                prepend-icon="mdi-table-search"
                filled rounded dense hide-details />
            <!-- Data -->
            <v-data-table
                :search="table.search"
                :headers="table.headers"
                :items="table.data"
                :group-by="table.groupBy"
                :items-per-page="table.pageItems"
                :no-data-text="$t('dataSandbox.products.noData')"
                dense>
                <template v-slot:item.price="{ value }">
                    {{
                        value.toLocaleString(undefined, {
                            style: "currency",
                            currency: "EUR",
                            currencyDisplay: "symbol",
                            useGrouping: true,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })
                    }}
                </template>
            </v-data-table>
        </v-tab-item>
        <!-- Chart -->
        <v-tab>{{$t("dataSandbox.temperatures.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-sparkline
                :labels="chart.labels"
                :value="chart.values"
                :gradient="chart.gradients"
                line-width="2"
                label-size="4"
                auto-draw
                />
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                table: {
                    // Settings
                    search: "",
                    pageItems: 5,
                    groupBy: "category",
                    // Content
                    headers: [
                        {
                            text: "Product",
                            value: "product",
                            align: "start"
                        },
                        {
                            text: "Price",
                            value: "price",
                            align: "end"
                        }
                    ],
                    data: [
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
                    ]
                },
                chart: {
                    labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    values: [
                        20,
                        17,
                        19,
                        29,
                        31,
                        15,
                        10
                    ],
                    gradients: [
                        "red",
                        "blue"
                    ]
                }
            };
        }
    };
</script>
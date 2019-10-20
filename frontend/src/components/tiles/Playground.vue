<template>
    <v-tabs>
        <!-- Counter -->
        <v-tab>{{$t("playground.counter.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-text-field v-model="count" :label="$t('playground.counter.title')" readonly outlined></v-text-field>
            <v-btn @click="count++">{{$t("playground.counter.incrementCounter")}}</v-btn>
        </v-tab-item>
        <!-- Table -->
        <v-tab>{{$t("playground.products.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <!-- Search -->
            <v-text-field
                v-model="table.search"
                :label="$t('playground.products.search')"
                prepend-icon="mdi-table-search"
                filled rounded dense hide-details />
            <!-- Data -->
            <v-data-table
                :search="table.search"
                :headers="table.headers"
                :items="table.data"
                :group-by="table.groupBy"
                :items-per-page="table.pageItems"
                :no-data-text="$t('playground.products.noData')"
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
    </v-tabs>
</template>

<script lang="ts">
    // Imports
    import Vue from "vue";
    import authService from "../../services/auth-service";

    // Extend vue instance of component
    export default Vue.extend({
        data() {
            return {
                count: 0,
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
                }
            };
        }
    });
</script>
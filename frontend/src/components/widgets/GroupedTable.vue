<template>
    <v-card>
        <!-- Search -->
        <v-text-field
            v-model="search"
            :label="$t('groupedTable.search')"
            prepend-inner-icon="mdi-table-search"
            filled rounded dense hide-details />
        <!-- Data -->
        <v-data-table
            :search="search"
            :headers="headers"
            :items="data"
            :group-by="groupBy"
            :items-per-page="pageItems"
            :no-data-text="$t('groupedTable.noData')"
            dense>
            <!-- Custom data column format -->
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
            <!-- Custom group header -->
            <template v-slot:group.header="{ headers, group, toggle }">
                <td :colspan="headers.length">
                    <v-icon @click="groupToggled[group] = !toggle()">mdi-{{groupToggled[group] ? "plus" : "minus"}}</v-icon>
                    {{group}}
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
    export default {
        data: () => ({
            // Settings
            search: "",
            pageItems: 5,
            groupBy: "category",
            // State
            groupToggled: {},
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
        })
    };
</script>
<template>
    <canvas ref="chartCanvas"></canvas>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Chart } from "chart.js";

    export default Vue.extend({
        mounted() {
            const ctx = (this.$refs.chartCanvas as HTMLCanvasElement).getContext("2d");
            if (ctx) {
                const chart = new Chart(
                    ctx,
                    {
                        type: "line",
                        data: {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [
                                {
                                    label: "My First dataset",
                                    backgroundColor: "rgb(255, 99, 132)",
                                    borderColor: "rgb(255, 99, 132)",
                                    data: [0, 10, 5, 2, 20, 30, 45]
                                }
                            ]
                        },
                        options: {
                        }
                    }
                );
            }
        }
    });
</script>
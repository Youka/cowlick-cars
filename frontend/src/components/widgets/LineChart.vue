<template>
    <div ref="chartParent"></div>
</template>

<script lang="ts">
    import Vue from "vue";
    import * as d3 from "d3";

    export default Vue.extend({
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        mounted() {
            this.render();
        },
        watch: {
            data() {
                this.render();
            }
        },
        methods: {
            render() {
                // Define sizes & margins
                const rootSize = {
                    width: 460,
                    height: 400
                };
                const margin = {
                    top: 10,
                    right: 30,
                    bottom: 30,
                    left: 60
                };
                const size = {
                    width: rootSize.width - margin.left - margin.right,
                    height: rootSize.height - margin.top - margin.bottom
                };
                // Data to render
                const dataRows = this.data as [{date: Date, value: number}];

                // Get chart parent from template (& clear last fill)
                const parent = this.$refs.chartParent as HTMLElement;
                while (parent.firstChild) {
                    parent.firstChild.remove();
                }
                // Construct SVG root
                const svg = d3.select(parent)
                    .append("svg")
                        .attr("width", rootSize.width)
                        .attr("height", rootSize.height)
                    .append("g")
                        .attr("transform", `translate(${margin.left}, ${margin.top})`);

                // Add X axis --> it is a date format
                const x = d3.scaleTime()
                    .domain(d3.extent(dataRows, (row) => row.date) as [Date, Date])
                    .range([ 0, size.width ]);
                svg.append("g")
                    .attr("transform", "translate(0," + size.height + ")")
                    .call(d3.axisBottom(x));

                // Add Y axis
                const y = d3.scaleLinear()
                    .domain([0, d3.max(dataRows, (row) => row.value) || 0])
                    .range([ size.height, 0 ]);
                svg.append("g")
                    .call(d3.axisLeft(y));

                // Add the line
                svg.append("path")
                    .datum(dataRows)
                    .attr("fill", "none")
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line<typeof dataRows[0]>()
                        .x((row) => x(row.date))
                        .y((row) => y(row.value))
                    );
            }
        }
    });
</script>
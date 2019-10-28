<template>
    <div ref="chartParent"></div>
</template>

<script lang="ts">
    import Vue from "vue";
    import * as d3 from "d3";

    export default Vue.extend({
        mounted() {
            // Get chart parent from template
            const parent = this.$refs.chartParent as HTMLElement;
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
            // Construct SVG root
            const svg = d3.select(parent)
                .append("svg")
                    .attr("width", rootSize.width)
                    .attr("height", rootSize.height)
                .append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);
            // Load & use data
            d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv")
            .then((rawRows: d3.DSVRowArray<string>) => {
                // Reformat data
                const timeParser = d3.timeParse("%Y-%m-%d");
                const dataRows = rawRows.map((rawRow) => ({
                    date: (rawRow.date && timeParser(rawRow.date)) || new Date(0),
                    value: parseFloat(rawRow.value || "")
                }));

                // Add X axis --> it is a date format
                const x = d3.scaleTime()
                    .domain(d3.extent(dataRows, (d) => d.date) as Date[])
                    .range([ 0, size.width ]);
                svg.append("g")
                    .attr("transform", "translate(0," + size.height + ")")
                    .call(d3.axisBottom(x));

                // Add Y axis
                const y = d3.scaleLinear()
                    .domain([0, d3.max(dataRows, (d) => +d.value) || 0])
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
                        .x((d) => x(d.date))
                        .y((d: any) => y(d.value))
                    );
            });
        }
    });
</script>
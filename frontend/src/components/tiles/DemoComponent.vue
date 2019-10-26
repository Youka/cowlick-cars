<template>
    <v-card>
        <v-card-title>{{$t("demo.component.title")}}</v-card-title>
        <v-card-text @mouseenter="$emit('foo')">
            <slot /> - {{name}}
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    export default {
        props: [
            "name"
        ],
        mounted() {
            console.info("DemoComponent mounted!");
        },
        beforeDestroy() {
            console.info("DemoComponent destroying...");
        }
    };
</script>
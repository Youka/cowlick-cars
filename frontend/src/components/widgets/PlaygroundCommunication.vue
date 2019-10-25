<template>
    <div @mouseenter="$emit('foo')">
        <slot /> - {{name}}
    </div>
</template>

<script lang="ts">
    export default {
        props: [
            "name"
        ],
        mounted() {
            console.info("PlaygroundCommunication mounted!");
        },
        beforeDestroy() {
            console.info("PlaygroundCommunication destroying...");
        }
    };
</script>
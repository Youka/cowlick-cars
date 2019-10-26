<template>
    <v-card>
        <v-card-title>{{$t("demo.counter.title")}}</v-card-title>
        <v-card-text>
            <input type="text" readonly :placeholder="$t('demo.counter.title')" v-model="count" />
            <hr />
            <button type="button" @click="count++">{{$t('demo.counter.incrementCounter')}}</button>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    export default {
        data: () => ({
            count: 0
        })
    };
</script>

<style lang="scss" scoped>
    .v-card {
        input[type="text"] {
            background-color: black;
        }
        button[type="button"] {
            font-weight: bold;
            border: 0.5em groove gray;
        }
    }
</style>
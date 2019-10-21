<template>
    <v-tabs>
        <!-- Counter -->
        <v-tab>{{$t("playground.counter.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-text-field v-model="count" :label="$t('playground.counter.title')" readonly outlined></v-text-field>
            <v-btn @click="count++">{{$t("playground.counter.incrementCounter")}}</v-btn>
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                count: 0,
            };
        }
    };
</script>
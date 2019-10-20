<template>
    <v-tabs>
        <v-tab>{{$t("playground.counter")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-text-field v-model="count" :label="$t('playground.counter')" readonly outlined></v-text-field>
            <v-btn @click="count++">{{$t("playground.incrementCounter")}}</v-btn>
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
    // Imports
    import authService from "../../services/auth-service";

    // Extend vue instance of component
    export default {
        data: () => ({
            count: 0
        })
    };
</script>
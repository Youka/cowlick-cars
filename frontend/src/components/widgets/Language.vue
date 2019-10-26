<template>
    <div class="select-wrapper">
        <v-select
            v-model="language"
            :items="Object.keys($i18n.messages)"
            :label="$t('nav.language')"
            prepend-inner-icon="mdi-web-box"
            hide-details dense outlined />
    </div>
</template>

<script lang="ts">
    // Imports
    import Vue from "vue";
    import { mapFields } from "vuex-map-fields";

    // Extend vue instance of component
    export default Vue.extend({
        computed: mapFields([
            "language"
        ]),
        watch: {
            language(newLanguage) {
                this.$i18n.locale = newLanguage;
            }
        },
        mounted() {
            // Initialize i18n from shared state
            this.$i18n.locale = this.$store.state.language;
        }
    });
</script>

<style lang="scss" scoped>
    div.select-wrapper {
        width: 7em;
    }
</style>
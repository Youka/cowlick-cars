<template>
    <!-- Vue application root -->
    <v-app>
        <!-- Side navigation -->
        <v-navigation-drawer app v-model="navigationVisible">
            <v-list nav>
                <v-list-item to="/">{{$t("nav.home")}}</v-list-item>
                <v-list-item to="/sales">{{$t("nav.sales")}}</v-list-item>
                <v-list-item to="/service">{{$t("nav.service")}}</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- Top navigation -->
        <v-app-bar app fixed elevate-on-scroll>
            <v-app-bar-nav-icon @click="navigationVisible = !navigationVisible" />
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer />
            <clc-login class="mr-3" />
            <clc-language />
        </v-app-bar>
        <!-- Main content -->
        <v-content>
            <router-view></router-view>
        </v-content>
        <!-- Footer -->
        <v-footer app>
            <v-chip color="info"><v-icon left>mdi-information</v-icon>Work in progress</v-chip>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    // Imports
    import { mapFields } from "vuex-map-fields";
    import Login from "./widgets/Login.vue";
    import Language from "./widgets/Language.vue";

    // Extend vue instance of component
    export default {
        data: () => ({
            // Copy title from html document
            title: document.title,
        }),
        computed: mapFields([
            "navigationVisible"
        ]),
        components: {
            "clc-login": Login,
            "clc-language": Language
        }
    };
</script>

<style lang="scss">
    /* Application default font */
    #app {
        font-family: 'Open Sans';
    }
</style>
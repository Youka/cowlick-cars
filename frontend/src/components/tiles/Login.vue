<template>
    <v-tabs>
        <v-tab>{{$t("test.session")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-btn @click="login">{{$t("test.login")}}<v-icon right>mdi-login</v-icon></v-btn>
            <v-btn @click="logout">{{$t("test.logout")}}<v-icon right>mdi-logout</v-icon></v-btn>
            <v-btn @click="info">{{$t("test.info")}}<v-icon right>mdi-information</v-icon></v-btn>
        </v-tab-item>
        <v-tab>{{$t("test.counter")}}</v-tab>
        <v-tab-item class="pa-3">
            <v-text-field v-model="count" :label="$t('test.counter')" readonly outlined></v-text-field>
            <v-btn @click="count++">{{$t("test.incrementCounter")}}</v-btn>
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
        }),
        methods: {
            // Service requests
            login() {
                authService.login("admin", "admin")
                .then((success) =>
                    alert("Login: " + success)
                );
            },
            logout() {
                authService.logout()
                .then(() =>
                    alert("Logout!")
                );
            },
            info() {
                authService.info()
                .then((response) =>
                    alert("Status: " + response.status + "\nData: " + JSON.stringify(response.data))
                );
            }
        }
    };
</script>
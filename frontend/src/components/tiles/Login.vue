<template>
    <v-card>
        <v-card-title>{{$t("login.title")}}</v-card-title>
        <v-card-text>
            <v-btn @click="login">{{$t("login.login")}}<v-icon right>mdi-login</v-icon></v-btn>
            <v-btn @click="logout">{{$t("login.logout")}}<v-icon right>mdi-logout</v-icon></v-btn>
            <v-btn @click="info">{{$t("login.info")}}<v-icon right>mdi-information</v-icon></v-btn>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    // Imports
    import authService from "../../services/auth-service";

    // Extend vue instance of component
    export default {
        methods: {
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
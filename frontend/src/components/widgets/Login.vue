<template>
    <v-card>
        <!-- Menu -->
        <v-menu bottom left offset-y transition="slide-y-transition">
            <!-- Open button -->
            <template v-slot:activator="{ on }">
                <v-btn v-if="session.info" color="success" class="font-weight-bold" v-on="on">
                    {{session.info.username}}
                    <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
                <v-btn v-else color="warning" class="font-italic d-block" v-on="on">
                    {{$t("login.guest")}}
                    <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <!-- Menu list -->
            <v-list dense>
                <!-- Login/logout -->
                <v-list-item v-if="!session.info" @click="form.showDialog = true">
                    <v-list-item-content>
                        {{$t("login.login")}}
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-login</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item v-if="session.info" @click="logout">
                    <v-list-item-content>
                        {{$t("login.logout")}}
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <!-- User information -->
                <v-list-item v-if="session.info" @click="session.showDialog = true">
                    <v-list-item-content>
                        {{$t("login.info")}}
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- Login form -->
        <v-dialog width="300" v-model="form.showDialog">
            <v-card light>
                <!-- Title -->
                <v-card-title>
                    <span class="font-weight-bold">{{$t("login.login")}}</span>
                    <v-spacer />
                    <v-icon @click="form.showDialog = false">mdi-close</v-icon>
                </v-card-title>
                <!-- Input -->
                <v-card-text>
                    <v-snackbar color="error" :timeout="3000" v-model="form.error">
                        <v-icon>mdi-alert</v-icon>{{$t("login.login")}}<v-icon>mdi-alert</v-icon>
                    </v-snackbar>
                    <v-text-field
                        v-model="form.username"
                        :label="$t('login.username')"
                        prepend-inner-icon="mdi-account-question"
                        dense counter maxlength="24"
                        :rules="[
                            (value) => value.charAt(0) === '$' ? $t('login.rules.dollarBeginning') : true
                        ]"
                        @keypress.enter="login" />
                    <v-text-field
                        v-model="form.password"
                        :label="$t('login.password')"
                        prepend-inner-icon="mdi-account-key"
                        dense counter maxlength="128"
                        :type="form.showPassword ? 'text' : 'password'"
                        :append-icon="form.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append="form.showPassword = !form.showPassword"
                        @keypress.enter="login" />
                </v-card-text>
                <!-- Submit -->
                <v-card-actions>
                    <v-btn color="info" class="mx-auto" @click="login">
                        {{$t("login.login")}}
                        <v-icon right>mdi-login</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- Information overlay -->
        <v-dialog width="300" v-model="session.showDialog">
            <v-card light>
                <!-- Title -->
                <v-card-title>
                    <span class="font-weight-bold">{{$t("login.info")}}</span>
                    <v-spacer />
                    <v-icon @click="session.showDialog = false">mdi-close</v-icon>
                </v-card-title>
                <!-- Text -->
                <v-card-text v-if="session.info">
                    <v-text-field :label="$t('login.username')" :value="session.info.username" readonly dense />
                    <v-text-field :label="$t('login.firstName')" :value="session.info.firstName" readonly dense />
                    <v-text-field :label="$t('login.lastName')" :value="session.info.lastName" readonly dense />
                    <v-text-field :label="$t('login.email')" :value="session.info.email" readonly dense />
                    <v-text-field :label="$t('login.roles')" :value="session.info.roles" readonly dense />
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script lang="ts">
    import Vue from "vue";
    import authService from "../../services/auth-service";

    export default Vue.extend({
        // Component state
        data: () => ({
            session: {
                updateInterval: undefined as (undefined | number),
                info: undefined as (undefined | object),
                showDialog: false
            },
            form: {
                username: "",
                password: "",
                showPassword: false,
                showDialog: false,
                error: false
            }
        }),
        // Login methods
        methods: {
            login() {
                authService.login(this.form.username, this.form.password)
                .then((success) => {
                    this.update();
                    this.form.username = this.form.password = "";
                    if (success) {
                        this.form.showDialog = false;
                    } else {
                        this.form.error = true;
                    }
                });
            },
            logout() {
                authService.logout()
                .then(this.update);
            },
            update() {
                authService.info()
                .then((response) => {
                    this.session.info = response.data;
                });
            }
        },
        // Update session by intervals
        mounted() {
            this.update();
            this.session.updateInterval = setInterval(this.update, 60 * 1000);
        },
        beforeDestroy() {
            clearInterval(this.session.updateInterval);
        }
    });
</script>
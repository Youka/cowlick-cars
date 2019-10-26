<template>
    <v-card>
        <v-card-title>{{$t("demo.todos.title")}}</v-card-title>
        <v-card-text>
            <ul v-if="$i18n.locale == 'en'">
                <li v-for="(todo, index) in todos" :key="todo">
                    {{todo}} ({{index}})
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    export default {
        data: () => ({
            todos: [
                "Wake up",
                "Work",
                "Sleep"
            ]
        })
    };
</script>

<style lang="scss" scoped>
    .v-card {
        ul > li {
            list-style-type: lower-greek;
        }
    }
</style>
<template>
    <v-tabs>
        <!-- Counter -->
        <v-tab>{{$t("playground.counter.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <input type="text" readonly :placeholder="$t('playground.counter.title')" v-model="count" />
            <hr />
            <button type="button" @click="count++">{{$t('playground.counter.incrementCounter')}}</button>
        </v-tab-item>
        <!-- List -->
        <v-tab>{{$t("playground.todos.title")}}</v-tab>
        <v-tab-item class="pa-3">
            <ul v-if="$i18n.locale == 'en'">
                <li v-for="(todo, index) in todos" :key="todo">
                    {{todo}} ({{index}})
                </li>
            </ul>
        </v-tab-item>
        <!-- Component communication -->
        <v-tab>{{$t("playground.communication")}}</v-tab>
        <v-tab-item>
            <clc-communication name="Mustermann" @foo="print('foo')">
                Max
            </clc-communication>
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
    import PlaygroundCommunication from "../widgets/PlaygroundCommunication.vue";

    export default {
        data() {
            return {
                count: 0,
                todos: [
                    "Wake up",
                    "Work",
                    "Sleep"
                ]
            };
        },
        methods: {
            print: (msg: string) => {
                console.info(msg);
            }
        },
        components: {
            "clc-communication": PlaygroundCommunication
        }
    };
</script>

<style lang="scss" scoped>
    .v-tabs {
        input[type="text"] {
            background-color: black;
        }
        button[type="button"] {
            font-weight: bold;
            border: 0.5em groove gray;
        }
        ul > li {
            list-style-type: lower-greek;
        }
    }
</style>
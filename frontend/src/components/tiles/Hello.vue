<template>
    <v-card>
        <v-card-title>{{$t("hello.message")}}</v-card-title>
        <v-card-text>
            {{$t(message)}}
            <v-divider></v-divider>
            <v-img :src="require('../../assets/images/ayaya.png')" width=100 />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    export default {
        data: () => ({
            message: "hello.hello"
        })
    };
</script>
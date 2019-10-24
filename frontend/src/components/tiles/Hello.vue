<template>
    <v-card>
        <v-card-title>{{$t("hello.title")}}</v-card-title>
        <v-card-text>
            <v-img :src="require('../../assets/images/hello.jpeg')" width="315">
                <span class="black--text">{{$t("hello.message")}}</span>
                <template v-slot:placeholder>
                    <v-progress-circular indeterminate />
                </template>
            </v-img>
        </v-card-text>
    </v-card>
</template>
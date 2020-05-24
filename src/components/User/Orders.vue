<template>
    <v-container>
        <v-layout row style="margin-top: 65px;">
            <v-flex xs12 sm6 offset-sm3>
                <v-list
                    subheader
                    two-line
                    flat
                >
                    <h1 class="text--secondary mb-3">Orders</h1>
                    <v-list-item-group
                        v-model="settings"
                        multiple
                        avatar
                        v-for="order in orders"
                        :key="order.id"
                    >
                        <v-list-item>
                            <template>
                                <v-list-item-action>
                                    <v-checkbox
                                            color="success"
                                        :input-value="order.done"
                                        @change="markDone(order)"
                                    ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{ order.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-btn
                                    class=""
                                    :to="'/ad/' + order.adId"
                                >Open</v-btn>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                orders: [
                    {
                        id: 'fds3',
                        name: 'Lili',
                        phone: '4-444-44-44',
                        adId: '123',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone (order) {
                order.done = true
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container>
        <v-layout row style="margin-top: 65px;">
            <v-flex class="text-center pt-5" v-if="loading">
                <v-progress-circular
                        indeterminate
                        :size="100"
                        :width="4"
                        color="purple"
                ></v-progress-circular>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length">
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
                        :key="order.adId"
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
            <v-flex class="text--secondary" v-else>
                <h1>You have no orders</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            orders () {
                return this.$store.getters.orders
            }
        },
        methods: {
            markDone (order) {
                this.$store.dispatch('markOrderDone', order.id)
                    .then(() => {
                        order.done = true
                    })
                    .catch(() => {})
            }
        },
        created () {
            this.$store.dispatch('fetchOrders')
        }
    }
</script>

<style scoped>

</style>
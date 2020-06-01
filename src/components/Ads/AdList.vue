<template>
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-(sm)(3)>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                    class="elevation-10 mb-5"
                    v-for="ad in myAds"
                    :key="ad.id"
                >
                    <v-layout >
                        <v-flex xs3>
                            <v-img
                                height="160px"
                                :src="ad.imageSrc"
                            ></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ ad.title }}</h2>
                                <p>{{ ad.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    class="info"
                                    :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-container v-else-if="!loading && myAds.length === 0">
            <v-layout row>
                <v-flex class="text-center">
                    <h1 class="text--secondary mb-3">You have no ads</h1>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-else>
        <v-layout row>
            <v-flex class="text-center">
                <v-progress-circular
                        indeterminate
                        :size="100"
                        :width="4"
                        color="purple"
                ></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
    </v-container>
</template>

<script>
    export default {
        computed: {
            myAds() {
                return this.$store.getters.myAds
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container v-if="!loading" fluid>
        <v-layout>
            <v-carousel>
                <v-carousel-item
                        v-for="(ad) in ads"
                        :key="ad.id"
                        :src="ad.imageSrc"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                >
                    <div class="carusel-link">
                        <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
        <v-layout>
            <v-flex
                    class="mt-7"
                    row wrap
            >
                <v-card
                        class="mx-auto mb-3"
                        max-width="300"
                        v-for="ad of ads"
                        :key="ad.id"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="ad.imageSrc"
                    >
                        <v-card-title>{{ ad.title }}</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pb-0">{{ ad.description }}</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>
                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                text
                                :to="'/ad/' + ad.id"
                        >Open</v-btn>
                        <v-btn
                                raised
                        >Buy</v-btn>
                    </v-card-actions>
                </v-card>
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
</template>

<script>
    export default {
        computed: {
            promoAds () {
                return this.$store.getters.promoAds
            },
            ads () {
                return this.$store.getters.ads
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>
    .carusel-link {position: absolute; bottom: 50px; left: 50%; background: #00000021; transform: translate(-50%, 0); padding: 5px 15px; border-radius: 5px 5px 0 0;}
</style>
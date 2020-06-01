<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
               <v-card v-if="!loading">
                   <v-img
                       height="300px"
                       :src="ad.imageSrc"
                   ></v-img>
                   <v-card-text>
                       <h1 class="text--primary">{{ ad.title }}</h1>
                       <p>{{ ad.description }}</p>
                   </v-card-text>
                   <v-card-actions>
                       <v-spacer></v-spacer>
                       <add-edit-ad-modal :ad="ad" v-if="isQwver"></add-edit-ad-modal>
                       <v-btn class="success">Buy</v-btn>
                   </v-card-actions>
               </v-card>
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import EditAdModal from "./EditAdModal";

    export default {
        props: ['id'],
        computed: {
            ad () {
                const id = this.id;
                return this.$store.getters.adById(id)
            },
            loading () {
                return this.$store.getters.loading
            },
            isQwver () {
                return this.ad.ownerId === this.$store.getters.user.id
            }
        },
        components: {
            addEditAdModal: EditAdModal
        }
    }
</script>

<style scoped>

</style>
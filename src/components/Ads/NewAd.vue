<template>
    <v-container>
        <v-layout row style="margin-top: 65px;">
            <v-flex xs12 sm6 offset-(sm)(3)>
                <h1 class="text--secondary md3">Create new ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        validation
                >
                    <v-text-field
                            color="blue-grey lighten-3"
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            :rules="[v => !!v || 'title is required']"
                    />
                    <v-textarea
                            color="blue-grey lighten-3"
                            id="password"
                            label="Ad description"
                            name="description"
                            type="password"
                            v-model="description"
                            :rules="[v => !!v || 'description is required']"
                    />
                </v-form>
                <v-layout mb-3>
                    <v-btn class="warning">Upload <v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
                </v-layout>
                <v-layout>
                    <img src="" height="100" alt="">
                </v-layout>
                <v-layout>
                    <v-switch
                        :label="'Add to promo?'"
                        v-model="promo"
                    ></v-switch>
                </v-layout>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!valid"
                        class="success"
                        @click="createAd"
                    >Create ad</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },
        methods: {
            createAd () {
                if (this.$refs.form.validate()){
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    };
                    this.$store.dispatch('crateAd', ad)
                }
            }
        }
    }
    
</script>

<style scoped>

</style>
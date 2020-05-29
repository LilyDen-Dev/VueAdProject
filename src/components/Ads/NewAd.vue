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
                    <v-btn @click="triggerUpload" class="warning">Upload <v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
                    <input
                            ref="fileInput"
                            type="file"
                            style="display: none;"
                            accept="image/*"
                            @change="onFileChange"
                    >
                </v-layout>
                <v-layout>
                    <img :src="imageSrc" height="100" alt="" v-if="imageSrc">
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
                        :loading="loading"
                        :disabled="!valid || !image || loading"
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
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            createAd () {
                if (this.$refs.form.validate() && this.image){
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    };
                    this.$store.dispatch('createAd', ad).then(() => {
                            this.$router.push('/list')
                        }).catch(() => {})
                }
            },
            triggerUpload () {
                this.$refs.fileInput.click();
            },
            onFileChange (event) {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = e => {
                    this.imageSrc = reader.result;
                    console.log(e);
                };
                reader.readAsDataURL(file);
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>
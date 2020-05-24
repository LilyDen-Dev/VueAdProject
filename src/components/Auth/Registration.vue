<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="blue-grey darken-2"
                            dark
                            flat
                    >
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                ref="form"
                                v-model="valid"
                                validation
                                lazy-validation
                        >
                            <v-text-field
                                    color="blue-grey lighten-3"
                                    label="Email"
                                    name="email"
                                    prepend-icon="mdi-email"
                                    type="text"
                                    v-model="email"
                                    :rules="emailRules"
                            />
                            <v-text-field
                                    color="blue-grey lighten-3"
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :counter="6"
                                    :rules="passwordRules"
                            />
                            <v-text-field
                                    color="blue-grey lighten-3"
                                    id="confirm-password"
                                    label="Confirm password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="confirmPassword"
                                    :counter="6"
                                    :rules="confirmPasswordRules"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                                :disabled="!valid || loading"
                                color="blue-grey lighten-3"
                                @click="onSubmit"
                                :loading="loading"
                        >Create account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length > 5) || 'Password must be more than 5 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || 'Password should match',
                ]
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            onSubmit () {
                if(this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    };
                    this.$store.dispatch('registerUser', user).then(() => {
                        this.$router.push('/')
                    }).catch(() => {})
                }
            }
        }
    }
</script>

<style scoped>

</style>
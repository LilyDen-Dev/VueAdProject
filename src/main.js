import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import Vuetify from "vuetify"
import BuyModalComponent from "@/components/Shared/BuyModal"
import * as fb from "firebase"
import 'vuetify/dist/vuetify.min.css'
import vuetify from '@/plugins/vuetify'


Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.component('app-buy-modal', BuyModalComponent);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    router: routes,
    store: store,
    render: h => h(App),
    created () {
        fb.initializeApp({
            apiKey: "AIzaSyDgxqVM4s6YPrxfsGOK3WRAb8cqaFtox_8",
            authDomain: "itc-ads-cae43.firebaseapp.com",
            databaseURL: "https://itc-ads-cae43.firebaseio.com",
            projectId: "itc-ads-cae43",
            storageBucket: "itc-ads-cae43.appspot.com",
            messagingSenderId: "401531121512",
            appId: "1:401531121512:web:4591c53b1316fc1bacb0dd"
        });
        fb.auth().onAuthStateChanged(user => {
            if (user){
                this.$store.dispatch('autoLoginUser', user)
            }
        });

        this.$store.dispatch('fetchAds')
    }
}).$mount('#app')


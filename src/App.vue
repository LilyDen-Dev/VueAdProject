<template>
  <v-app id="inspire">
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="link" color="primary">
          <v-list-item
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.url"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
                  @click="onLogout"
                  v-if="isUserLoggedIn"
          >
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
            app
            color="blue-grey darken-2"
            dark
    >
      <v-app-bar-nav-icon
              @click="drawer = !drawer"
              class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
              v-for="link in links"
              :key="link.text"
              :to="link.url"
              class="hidden-sm-and-down"
              color="blue-grey darken-2"
              depressed
      >
        <v-icon left>{{link.icon}}</v-icon> {{link.text}}
      </v-btn>
      <v-btn
              @click="onLogout"
              class="hidden-sm-and-down"
              color="blue-grey darken-2"
              depressed
              v-if="isUserLoggedIn"
      >
        <v-icon left>mdi-exit-to-app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
          class="fill-height"
          fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-snackbar
            text
            v-if="error"
            :multi-line="true"
            :value="true"
            :timeout="5000"
            @input="closeError"
            color="error"
    >
      {{error}}
      <v-btn
              @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      link: 1,
    }),
    computed: {
      error () {
        return this.$store.getters.error
      },
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
        if (this.isUserLoggedIn) {
          return [
            { text: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
            { text: 'New ad', icon: 'mdi-bookmark-plus', url: '/new'},
            { text: 'My ads', icon: 'mdi-format-list-bulleted-square', url: '/list'},
          ]
        }
        return [
          { text: 'Login', icon: 'mdi-account-circle', url: '/login'},
          { text: 'Registration', icon: 'mdi-face', url: '/registration'},
        ]
      }
    },
    methods: {
      closeError () {
         this.$store.dispatch('clearError')
      },
      onLogout () {
        this.$store.dispatch('logoutUser');
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
    .pointer {cursor: pointer;}
</style>

<template>
  <div>
    <v-toolbar class="teal lighten-2" dark color="primary">
      <v-toolbar-side-icon
        @click.native.stop="sideNav=!sideNav"
        class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="button">Filmbase</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down">
        <v-btn
          v-for="btn in menuItems"
          flat
          :key="btn.title"
          router
          :to="btn.link">
          <v-icon left>{{ btn.icon }}</v-icon>
          {{ btn.title }}</v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav" temporary>
      <v-list>
        <v-list-tile
          v-for="btn in menuItems"
          :key="btn.title"
          router-link
          router
          :to="btn.link">
          <v-list-tile-action>
            <v-icon>
              {{ btn.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ btn.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        sideNav: false,
      }
    },
    computed: {
      ...mapGetters([
        'getUser'
      ]),
      menuItems() {
        let menuItems = [
          { icon: 'videocam', title: 'Movies', link: '/movies'},
          { icon: 'cached', title: 'generator', link: '/generator'},
          { icon: 'person', title: 'login', link: '/login'},
          { icon: 'person_add', title: 'signup', link: '/signup'},

        ]
        if(this.userIsAuthenticated) {
          menuItems = [
            { icon: 'videocam', title: 'Movies', link: '/movies'},
            { icon: 'cached', title: 'Generator', link: '/generator'},
            { icon: 'supervisor_account', title: 'New Movie', link: '/newmovie'},
            { icon: 'supervisor_account', title: 'New Category', link: '/newcategory'},
            { icon: 'supervisor_account', title: 'logout', link: '/logout'},

          ]
        }
        return menuItems;
      },
      userIsAuthenticated() {
        return this.getUser !== null && this.getUser !== undefined;
      }
    }
  }
</script>
<style>
  .navigation-drawer {
    position: absolute;
  }
</style>

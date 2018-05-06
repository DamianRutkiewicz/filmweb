// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store'
import * as firebase from 'firebase'
import VueLodash from 'vue-lodash'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(FBSignInButton)

Vue.use(VueLodash)

Vue.use(Vuetify, {
  theme: {
    primary: '#1565C0',
    secondary: '#00BCD4',
    accent: '#9c27b0',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  FBSignInButton,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
    apiKey: "AIzaSyCKmD637M9oPpolp0qROLdy2Lhl1DVdKRk",
    authDomain: "filmbase-5f437.firebaseapp.com",
    databaseURL: "https://filmbase-5f437.firebaseio.com",
    projectId: "filmbase-5f437",
    storageBucket: "gs://filmbase-5f437.appspot.com",
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignInAction', user);
      }
    })

    this.$store.dispatch('loadCategoriesAction');
    this.$store.dispatch('loadMoviesAction');

  },
})

// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{your-app-id}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{latest-api-version}'
//     });
//
//     FB.AppEvents.logPageView();
//
//   };
//
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>

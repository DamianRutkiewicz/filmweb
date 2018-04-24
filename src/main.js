// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store'
import * as firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    console.log("before firebase initialize: ",firebase)
    firebase.initializeApp({
    apiKey: "AIzaSyCKmD637M9oPpolp0qROLdy2Lhl1DVdKRk",
    authDomain: "filmbase-5f437.firebaseapp.com",
    databaseURL: "https://filmbase-5f437.firebaseio.com",
    projectId: "filmbase-5f437",
    storageBucket: "filmbase-5f437.appspot.com",
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

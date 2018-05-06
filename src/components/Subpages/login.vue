<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2 class="primary--text">Login</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">
                      Sign In
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-btn @click="signUserInFacebookAction">Login with Facebook</v-btn>
                  <!-- <fb-signin-button
                    :params="fbSignInParams"
                    @success="onSignInSuccess"
                    @error="onSignInError">
                    Sign in with Facebook
                  </fb-signin-button> -->
                  <!-- <my-component class="button"
                    appId="160567311288930"
                    @login="getUserData"
                    @logout="onLogout"
                    @get-initial-status="getUserData">
                  </my-component> -->
                  <!-- <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div> -->
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
// import FBSignInButton from 'vue-facebook-signin-button'
import facebookLogin from 'facebook-login-vuejs';

Vue.component('my-component', {
    components: {
        facebookLogin
    }
});

  export default {
    data() {
      return {
        email: '',
        password: '',
        fbSignInParams: {
          scope: 'email,user_likes',
          return_scopes: true
        }
      }
    },
    computed: {
      ...mapGetters([
        'getUser'
      ]),
    },
    watch: {
      getUser(value) {
        if( value !== null && value !== undefined) {
          this.$router.push('/');
        }
      }
    },
    methods: {
      ...mapActions([
        'signUserInAction',
        'signUserInFacebookAction'
      ]),
      onSignInSuccess (response) {
        FBSignInButton.api('/login', dude => {
          console.log(`Good to see you, ${dude.name}.`)
        })
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      },
      onSignin() {
        //vuex
        // console.log("signup: ",{ email: this.email, password: this.password, confpassword: this.confpassword})
        const ob = {
          email: this.email,
          password: this.password
        }
        this.signUserInAction(ob);
      },
      getUserData() {
        console.log("getUserData");
      },
      onLogout() {
        console.log("onLogout")
      }
    }
  }
</script>

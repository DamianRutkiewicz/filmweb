<template>
  <v-container>
    <!-- <div class="text-xs-center">
      <v-btn color="primary" @click="alert = !alert">Toggle</v-btn>
    </div> -->
    <v-alert
      type="success"
      :value="alert"
      transition="scale-transition"
    >
      {{ error }}
    </v-alert>

    <v-layout row>
      <v-flex xs12>
        <h2 class="primary--text">Sign Up</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
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
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confpassword"
                      v-model="confpassword"
                      type="password"
                      :rules="[comparePasswords]"
                      >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">
                      Sign Up
                    </v-btn>
                  </v-flex>
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

  export default {
    data() {
      return {
        email: '',
        password: '',
        confpassword: '',
        error: '',
        showError: false,
      }
    },
    computed: {
      ...mapGetters([
        'getUser',
        'isError'
      ]),
      comparePasswords() {
        return this.password !== this.confpassword? 'Passwords do not match': true;
      },
      alert() {
        if(this.isError) {
          this.showError = true;
          this.error = this.isError.message;
          return true;
        } else {
          this.showError = false;
          return false;
        }

      }
      // user() {
      //   return get
      // }
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
        'signUpAction'
      ]),
      onSignup() {
        //vuex
        // console.log("signup: ",{ email: this.email, password: this.password, confpassword: this.confpassword})
        const ob = {
          email: this.email,
          password: this.password
        }
        this.signUpAction(ob);
      }
    }
  }
</script>

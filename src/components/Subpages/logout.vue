<template></template>
<script>
import * as firebase from 'firebase'
import { mapActions } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    methods: {
      ...mapActions([
        'logoutUserAction'
      ])
    },
    mounted() {
      firebase.auth().signOut().then(user => {
        this.logoutUserAction();
        this.$router.push("/");
      }).catch(error => {
        console.log("error: ",error);
      })
    }
  }
</script>

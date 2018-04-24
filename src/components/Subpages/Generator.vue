<template>
  <div>
    <v-container grid-list-xl id="dropdown-example">
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <p>Categories</p>
          <v-select
            :items="getCategories"
            overflow
            label="Select"
            target="#dropdown-example"
          ></v-select>
        </v-flex>
        <!-- <v-flex xs12 sm4>
          <p>Segmented</p>
          <v-select
            :items="dropdown_icon"
            label="Select"
            segmented
            target="#dropdown-example"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <p>Editable</p>
          <v-select
            :items="dropdown_edit"
            label="Select"
            editable
            item-value="text"
          ></v-select>
        </v-flex> -->
      </v-layout>
      <v-layout row class="text-xs-center">
        <v-btn fab dark large color="purple" class="random-btn">
          <v-icon dark>thumb_up</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'getCategories'
      ]),
    }
  }

</script>

<style>
  .random-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

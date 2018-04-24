<template>
  <v-container justify-space-around="true">
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="movie in getMovies" :key="movie.title">
        <movie-element :movie="movie"></movie-element>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MovieElement from './movieElement'
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    components: {
      MovieElement
    },
    computed: {
      ...mapGetters([
        'getMovies'
      ])
    }
  }
</script>

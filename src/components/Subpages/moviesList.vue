<template>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4 v-for="movie in getMovies" :key="movie.title">
          <movie-element :movie="movie">

          </movie-element>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieElement from './movieElement'

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
    },
    mounted() {
      console.log("movies list: ",this.getMovies);
    }
  }
</script>

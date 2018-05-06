<template>
  <v-container justify-space-around="true">
    <v-layout row>
      <h1>Recommended</h1>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="movie in Movies" :key="movie.title">
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
      ]),
      Movies() {
        console.log("movies: ",this.getMovies);
        let ob= {};
        // filter(v => v.isRecomended == true)
        // return this.getMovies.map(v => {
        //   console.log("element: ", v)
        // });
        for( let key in this.getMovies) {
          console.log("this.getMovies: ",this.getMovies[key].isRecomended);
          if(this.getMovies[key].isRecomended) {
            ob[key] = this.getMovies[key];
          }
        }
        console.log("recomended movies: ",ob);
        return ob;
      }
    }
  }
</script>

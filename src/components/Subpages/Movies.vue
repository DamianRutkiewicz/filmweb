<template>
  <div>

    <v-container>
      <v-layout>
        <v-toolbar>
          <v-btn flat v-for="cat in getCategories" @click="filterMovies(cat.title)" :key="cat.title">{{ cat.text }}</v-btn>
        </v-toolbar>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 mg6 lg4 v-for="movie in Movies" :key="movie.title">
          <movie-element :movie="movie"></movie-element>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MovieElement from './movieElement'
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        selectedCategory: '',
        movies: [],
      }
    },
    computed: {
      ...mapGetters([
        'getMovies',
        'getCategories'
      ]),
      Movies() {
        if(this.selectedCategory !== '' && this.selectedCategory !== undefined) {
          // for(let n in this.getMovies) {
          //
          //   if(this.getMovies[n].category === this.selectedCategory) {
          //     this.movies.push(this.getMovies[n]);
          //   }
          // }
          this.movies = [];

          for(let key in this.getMovies) {
            if(this.selectedCategory === this.getMovies[key].category) {
              this.movies.push(this.getMovies[key]);
            }
          }

          return this.movies;
        } else {
          return this.getMovies;
        }

      }
    },
    components: {
      MovieElement
    },
    methods: {
      filterMovies(cat) {
        // console.log()
        this.selectedCategory = cat;
      }
    },
  }
</script>

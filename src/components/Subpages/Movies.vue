<template>
  <div>

    <v-container>
      <v-layout>
        <v-toolbar>
          <div class="text-xs-center hidden-lg-and-up">
            <v-menu offset-y>
              <v-btn dark slot="activator">Category</v-btn>
              <v-list>
                <v-list-tile @click="filterMovies('wszystkie')">Wszystkie</v-list-tile>
                <v-list-tile v-for="item in getCategories" :key="item.title" @click="filterMovies(item.title)">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
          <v-btn class="hidden-md-and-down" flat @click="filterMovies('wszystkie')">Wszystkie</v-btn>
          <v-btn class="hidden-md-and-down" flat v-for="cat in getCategories" @click="filterMovies(cat.title)" :key="cat.title">{{ cat.text }}</v-btn>
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
        if(this.selectedCategory === 'wszystkie') {
          return this.getMovies;
        }
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

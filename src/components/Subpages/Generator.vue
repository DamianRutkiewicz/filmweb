<template>
  <div>
    <v-container grid-list-xl id="dropdown-example">
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <p>Categories</p>
          <v-select
            :items="categories"
            overflow
            label="Select"
            target="#dropdown-example"
            v-model="selectedCategory"
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
        <v-btn fab dark large color="accent" class="random-btn" @click="randomMovie">
          <v-icon dark>thumb_up</v-icon>
        </v-btn>
      </v-layout>

      <transition name="fade" mode="out-in">
        <v-layout v-if="selectedMovie !== ''">
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-media :src="selectedMovie.imageUrl" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ selectedMovie.title }}</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </transition>


<!-- when error -> nothing random -->
      <transition>
        <v-layout v-if="error !== null">
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-title class="text-xs-center">
                <h3 class="text-center">{{ error }}</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </transition>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        selectedCategory:'',
        selectedMovie: '',
        error: null,
        lastMovie: null,
      }
    },
    computed: {
      ...mapGetters([
        'getCategories',
        'getMovies'
      ]),
      // filteredMovies() {
      //   // return this.getMovies.filter( v => v.title)
      //   if(this.selectedCategory.text !== '' && this.selectedCategory.text !== undefined && this.selectedCategory.text !== null) {
      //     return this.getMovies.filter(v => v.category === this.selectedCategory.text);
      //   } else {
      //     console.log("zwracam calosc: ",this.getMovies)
      //     return this.getMovies;
      //   }
      //
      // },
      categories() {
        let categories = [];
        for(let cat in this.getCategories) {
          categories.push(this.getCategories[cat]);
        }

        return categories;
      },
      movies() {
        let movies = [];

        for(let key in this.getMovies) {
          if(this.selectedCategory.text !== '' && this.selectedCategory.text !== undefined && this.selectedCategory.text !== null) {
            if(this.selectedCategory === this.getMovies[key]) {
              movies.push(this.getMovies[key]);
            }
            return this.getMovies.filter(v => v.category === this.selectedCategory.text);
          } else {
            movies.push(this.getMovies[key]);
          }
        }

        return movies;
      }
    },
    watch: {
      selectedCategory(val) {
        console.log("selectedCategory: ",val.text)
      }
    },
    methods: {
      randomMovie() {
        this.erorr = null;
        this.selectedMovie = '';
        console.log("this.filteredMovies")
        if(this.movies.length > 0) {
          let randMovie = _.random(this.movies.length - 1);
          this.selectedMovie = this.movies[randMovie];
          if(this.selectedMovie === this.lastMovie) {
            this.randomMovie();
            return;
          }
          this.lastMovie = this.selectedMovie;
          console.log("Wylosowany film to : ", this.movies[randMovie].title);
        } else {
          console.log("nie znaleziono filmu");
          this.error = 'Unfortunately, the movie was not found';
        }

      }
    }
  }

</script>

<style>
  .random-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-center {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1.5s;
  }
  .fade-leave {
    /* opacity: 1; */
  }
  .fade-leave-active {
    transition: opacity 1.5s;
    opacity: 0;
  }
  .btn--floating.btn--large .icon {
    line-height: 72px;
  }
</style>

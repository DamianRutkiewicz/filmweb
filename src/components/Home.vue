<template>
  <div>
    <!-- <v-container> -->
      <!-- <v-layout row wrap>
        <v-flex xs12 sm12 class="text-xs-center text-sm-center">
          <v-btn large router to="/" class="info">
            Explore
          </v-btn>
        </v-flex>
      </v-layout> -->
      <v-layout row wrap>
        <v-flex xs12>
          <div class="load-bar" v-if="isSliderLoading">
            <v-progress-circular indeterminate :size="70" :width="7" color="purple"></v-progress-circular>
          </div>
          <v-carousel>
            <v-carousel-item
              v-for="(movie,i) in getMovies"
              :src="movie.imageUrl"
              :key="movie.id">
              <div class="title">
                {{ movie.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

      <recomended></recomended>

  </div>

</template>

<script>
// import MoviesList from './Subpages/moviesList'
import Recomended from './Subpages/Recomended'
import { mapGetters } from 'vuex'

export default {

  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Recomended
  },
  computed: {
    ...mapGetters([
      'getMovies',
      'isSliderLoading'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
  }
  .flex {
    position: relative;
  }
  .load-bar {
    z-index: 99999999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>

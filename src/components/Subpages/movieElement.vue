<template>
  <!-- <div style="margin: 6px;" @click="onLoadMovie">
    <v-card color="secondary" class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="headline">
                {{ movie.title }}
              </div>
              <div>{{ movie.description }}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="movie.imageUrl"
              height="125px"
              contain
            >
            </v-card-media>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div> -->
  <v-layout class="lay-element">
    <v-flex xs12 style="margin: 6px;" @click="onLoadMovie">
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          :src="movie.imageUrl"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ movie.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span>{{ movie.title }}</span><br>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: ['movie'],
    methods: {
      onLoadMovie() {
        console.log("go to movie")
        this.$router.push('/movie/'+this.movie.id);
      }
    }
  }
</script>

<style scoped>
  .lay-element {
    cursor: pointer;
  }
</style>

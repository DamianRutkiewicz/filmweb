<template>
  <div style="margin: 6px;" @click="onLoadMovie">
    <v-card color="cyan darken-2" class="white--text">
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
  </div>
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

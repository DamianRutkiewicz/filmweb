<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2 class="primary--text">Create new Movie</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMovie">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required>

              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="imageUrl"
                v-model="imageUrl"
                required>

              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 offset-sm3>
              <img :src="imageUrl"/>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                v-model="desc"
                multi-line
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-select
                label="Category"
                v-model="categorySelected"
                :items="getCategories"
                :rules="[v => !!v || 'Item is required']"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-btn @click="clearForm">Clear</v-btn>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


  export default {
    data() {
      return {
        select: '',
        categorySelected: '',
        imageUrl: '',
        title: '',
        desc: '',
        // cat: [
        //   { text: 'Cat 1', test: ''},
        //   { text: 'Cat 2', test: ''},
        //   { text: 'Cat 3', test: ''},
        //   { text: 'Cat 4', test: ''},
        // ]
      }
    },
    computed: {
      ...mapGetters([
        'getCategories'
      ]),
      formIsValid() {
        return this.title !== '' &&
        this.imageUrl !== '' &&
        this.categorySelected !== '';
      },
    },
    methods: {
      ...mapActions([
        'createMovieAction',
        'createCategory'
      ]),
      onCreateMovie() {
        const movie = {
          title: this.title,
          imageUrl: this.imageUrl,
          description: this.desc,
          categorySelected: this.categorySelected.title,
          date: new Date()
        }
        console.log(movie);
        this.createMovieAction(movie);
        this.clearForm();
      },
      clearForm() {
        this.title = '';
        this.imageUrl = '';
        this.desc = '';
        this.categorySelected = ''
      }
    },
  }
</script>

<style scoped>
  img {
    max-width: 300px;
  }
</style>

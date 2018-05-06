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
          <!-- <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-checkbox
                label="If you wanna upload image just Click !"
                v-model="imageUpload"
              >
              </v-checkbox>
            </v-flex>
          </v-layout> -->
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
          <!-- <v-layout row  v-else>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised color="primary" @click="onPickFile">Upload Image</v-btn>
              <input type="file"
                ref="imageFile"
                accept="image/*"
                placeholder="image upload"
                style="display: none"
                @change="onFilePicked"
                required/>
            </v-flex>
          </v-layout> -->
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
                :items="categories"
                :rules="[v => !!v || 'Item is required']"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-checkbox
                label="Add to recomended ?"
                v-model="isRecomended"
                :rules="[v => !!v || 'You must agree to continue!']"
              ></v-checkbox>
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
        isRecomended: '',
        imageUpload: '',
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
      categories() {
        let categories = [];
        for(let cat in this.getCategories) {
          categories.push(this.getCategories[cat]);
        }
        return categories;
      }
    },
    methods: {
      ...mapActions([
        'createMovieAction',
        'createCategory'
      ]),
      onPickFile() {
        this.$refs.imageFile.click();
      },
      onCreateMovie() {
        const movie = {
          title: this.title,
          imageUrl: this.imageUrl,
          image: this.image,
          description: this.desc,
          category: this.categorySelected.title,
          isRecomended: this.isRecomended,
          date: new Date().toISOString(),
          image: null
        }
        this.createMovieAction(movie);
        this.clearForm();
      },
      clearForm() {
        this.title = '';
        this.imageUrl = '';
        this.desc = '';
        this.categorySelected = ''
      },
      onFilePicked(event) {
        const files = event.target.files;
        let filename = files[0].name;
        console.log("files: ",files);
        if (filename.lastIndexOf(".") <= 0) {
          return alert('Please add valid file');
        }
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0]);
        this.image = files[0]
      }
    },
  }
</script>

<style scoped>
  img {
    max-width: 300px;
  }
</style>

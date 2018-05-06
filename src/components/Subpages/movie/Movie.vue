<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card>
            <v-card-title>
              <h2 class="primary--text">{{ movieTitle }}</h2>
            </v-card-title>
            <v-card-media
            :src="movieImage"
            height="330px">
            </v-card-media>
            <v-card-text>
              <div class="info--test">{{ movieDate }}</div>
              <div>
                {{ movieDescription }}
              </div>
            </v-card-text>
            <v-card-actions v-if="getUser">
              <v-spacer></v-spacer>
              <v-btn flat class="primary" @click="dialog = true">
                Change
              </v-btn>
              <v-btn flat @click="removeMovie">
                Remove
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-dialog v-model="dialog" max-width="500px">
          <form @submit.prevent="onEditMovie">
              <v-card>
                <v-card-title>
                  Edytuj {{ movieTitle }}
                </v-card-title>
                <v-layout row>
                  <v-flex xs10 offset-xs1>
                    <v-text-field
                      name="title"
                      label="Title"
                      id="title"
                      v-model="movieTitle"
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
                  <v-flex xs10 offset-xs1>
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
                </v-layout>
                <v-layout row>
                  <v-flex xs6 offset-sm3>
                    <img :src="imageUrl"/>
                  </v-flex>
                </v-layout> -->
                <v-layout row>
                  <v-flex xs10 offset-xs1>
                    <v-text-field
                      name="description"
                      label="Description"
                      v-model="movieDescription"
                      multi-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs10 offset-xs1>
                    <v-select
                      label="Category"
                      v-model="categorySelected"
                      :items="category"
                      :rules="[v => !!v || 'Item is required']"
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs10 offset-xs1>
                    <v-checkbox
                      label="Add to recomended ?"
                      v-model="isRecomended"
                      :rules="[v => !!v || 'You must agree to continue!']"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs10 offset-xs1>
                    <v-btn @click="clearForm">Clear</v-btn>
                    <v-btn
                      class="primary"
                      :disabled="!formIsValid"
                      type="submit">Edit</v-btn>
                  </v-flex>
                </v-layout>
                <!-- <v-card-text>
                  <v-btn color="primary" dark @click.stop="dialog = !dialog">Open Dialog 3</v-btn>
                  <v-select
                    :items="select"
                    label="A Select List"
                    item-value="text"
                  ></v-select>
                </v-card-text> -->
                <v-card-actions>
                  <v-btn color="primary" flat @click.stop="acceptChanges">Close</v-btn>
                </v-card-actions>
              </v-card>
            </form>
          </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        dialog: false,
        title: '',
        imageUrl: '',
        description: '',
        categorySelected: '',
        isRecomended: false,
      }
    },
    computed: {
      ...mapGetters([
        'getMovies',
        'getUser',
        'getCategories'
      ]),
      formIsValid() {
        return this.title !== '' &&
        this.imageUrl !== '' &&
        this.categorySelected !== '';
      },
      getId() {
        return window.location.pathname.split('/')[3];
      },
      movie() {
        let movie = null;

        for(let key in this.getMovies) {
          console.log("dostaje z getId: ",this.getId);
          if(this.getId === this.getMovies[key].id) {
            movie = this.getMovies[key];
            console.log("Movie, zanalazlem ten film: ",movie);
            return movie;
          }
        }

        return movie;
      },
      movieTitle: {
        get() {
          console.log("get title", this.movie);
          const title =  this.movie.title || 'title';
          this.title = title;
           return title;
        },
        set(val) {
          this.title = val;
        }

      },
      movieImage: {
        get() {
          const image = this.movie.imageUrl || 'url';
          this.imageUrl = image;
          return image;
        },
        set(val) {
          this.imageUrl = val;
        }

      },
      movieDescription: {
        get() {
          const desc = this.movie.description || 'description';
          this.description = desc;
          return desc;
        },
        set(val) {
          this.description = val;
        }

      },
      movieDate() {
        const date = new Date(this.movie.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return `${year}/${month}/${day}`
      },
      category: {
        get() {
          const cat = this.movie.category || '';
          this.categorySelected = cat;

          let category = [];
          const categories = this.getCategories;
          for(let ob in categories) {
            category.push(categories[ob])
          }

          return category;
        },
        set(val) {
          this.categorySelected = val;
        }

      }
    },
    methods: {
      ...mapActions([
        'editMovieAction',
        'removeMovieAction'
      ]),
      acceptChanges() {
        this.dialog = false;
      },
      onEditMovie() {
        const movie = {
          title: this.title,
          imageUrl: this.imageUrl,
          image: this.image,
          description: this.description,
          category: this.categorySelected.title,
          isRecomended: this.isRecomended,
          date: new Date().toISOString(),
          image: null
        }
        const id = this.getId;
        this.editMovieAction({ob: movie,id: id });
        this.clearForm();
      },
      removeMovie() {
        this.removeMovieAction(this.getId)
          .then(() => {
            this.$router.push('/');
          })
      },
      clearForm() {
        this.title = '';
        this.imageUrl = '';
        this.desc = '';
        this.categorySelected = ''
      },
    }
  }
</script>

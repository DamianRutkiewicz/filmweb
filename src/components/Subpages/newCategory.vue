<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2 class="primary--text">Create new Category</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateCategory">
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
                name="description"
                label="Description"
                v-model="desc"
                multi-line
              ></v-text-field>
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
import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        title: '',
        desc: '',
      }
    },
    computed: {
      formIsValid() {
        return this.title !== '';
      }
    },
    methods: {
      ...mapActions([
        'createCategoryAction'
      ]),
      onCreateCategory() {
        const category = {
          title: this.title.toUpperCase(),
          desc: this.desc,
          text: this.title,
          items: []
        }

        this.createCategoryAction(category);
        this.clearForm();
      },
      clearForm() {
        this.title = '';
        this.desc = '';
      }
    }
  }
</script>

<style scoped>

</style>

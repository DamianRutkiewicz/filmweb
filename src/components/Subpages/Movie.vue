<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card>
            <v-card-title>
              <h2 class="primary--text">My Movie</h2>
            </v-card-title>
            <v-card-media
            src=""
            height="330px">
            </v-card-media>
            <v-card-text>
              <div class="info--test">17th July 2017</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non tincidunt erat. Suspendisse commodo ipsum ac ligula pretium ullamcorper. Proin maximus, nibh ac egestas posuere, diam est rutrum eros, ut porta tortor purus vitae lacus. Morbi molestie arcu in nisi accumsan, ac consequat nisi pretium. Curabitur fringilla dapibus mi ut congue. Cras consequat sem magna, ac venenatis ipsum consequat sed. Aenean semper lorem sit amet iaculis gravida. Vestibulum pharetra pulvinar diam ac pellentesque. Integer tempor eros nec tellus rutrum feugiat. Praesent sollicitudin, est non aliquet lacinia, nulla sem commodo nisl, non dictum mi elit vitae diam. Suspendisse tristique tempus justo, consequat vestibulum dolor pellentesque vel. Aliquam erat volutpat. Vivamus gravida porttitor augue, tincidunt mollis ipsum. </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="primary">
                Change
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

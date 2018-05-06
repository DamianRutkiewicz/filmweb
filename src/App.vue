<template>
  <v-app>
    <img class="bg-image" src="http://www.familyandmedia.eu/wp-content/uploads/2018/03/cinema-Familyandmedia-900x444.jpg"/>
    <app-header></app-header>
    <main id="main">
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
}
</script>

<style>
main#main {
  height: calc(100vh - 64px);
  /* background: url('./assets/triangular_@2X.png'); */
  /* background: url('./assets/dark_embroidery.png'); */
  /* background: url('./assets/light_grey.png'); */
  /* background: url('./assets/notebook.png'); */
  /* background: url('./assets/organic-tiles.png'); */
  /* background: url('./assets/seigaiha.png'); */
  /* background: url('./assets/stonehaven.png'); */
  /* background: url('./assets/subtle_white_mini_waves.png'); */
  /* background: url('@/../../assets/swirl_pattern.png'); */
  /* background: url('./assets/triangular_@2X.png'); */
}
/* img {
  position: fixed;
  height: 100vh;
  min-width: 100vw;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-image {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
}
</style>

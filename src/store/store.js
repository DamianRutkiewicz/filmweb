import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';
console.log("before import firebase")
import * as firebase from 'firebase';

Vue.use(Vuex);

// console.log("store: ",firebase);

export const store = new Vuex.Store({
  state: {
    moviesList: [],
    categories: [],
    user: null,
    sliderIsLoading: true,
    movieIsLoading: false,
    // error: null
  },
  mutations,
  actions,
  getters,
})

// export const increment = state => {
//     state.counter++
// }
import Vue from 'vue'

export const createMovieMutation = (state, movie) => {
  console.log("from Mutation: ",movie)
  state.moviesList.push(movie);
}

export const setUserMutation = (state, object) => {
  state.user = object;
}

export const setLoadedMovies = (state, ob) => {
  state.isSliderLoading = false;
  state.moviesList = ob;
}

export const setLoadedCategories = (state, ob) => {
  state.categories = ob;
}

export const logoutUserMutation = (state) => {
  state.user = null;
}

export const setErrorMutation = (state, error) => {
  state.error = error;
}

export const changeLoading = (state, val) => {
  // Vue.set('isLoading', false);
  state.isLoading = false;
}

export const updateMovieMutation = (state,{ob, id}) => {
  let tab = [];
  for(let movie in state.moviesList) {
    tab.push(state.moviesList[movie])
  }
  console.log("takie id odebralem : ",id);
  const movie = tab.find(movie => {
    console.log("movie.id: ",movie.id," ob.id:",id);
    return movie.id === id;
  })
  console.log("movie: ",movie);
  // console.log("ob.title: ",ob.title, " movie:",movie, " ",movie.title," ",movie.id);
  if(ob.title) {
    console.log("title: ",movie.title)
    movie.title = ob.title;
  }
  console.log("takie jest description: ",ob.description);
  if(ob.description) {
    console.log("zmieniam description:",ob.description)
    movie.description = ob.description;
  }
  if(ob.imageUrl) {
    movie.imageUrl = ob.imageUrl;
  }
  if(ob.category) {
    movie.category = ob.category;
  }
  movie.isRecomended = ob.isRecomended;
}

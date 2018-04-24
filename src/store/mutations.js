// export const increment = state => {
//     state.counter++
// }
export const createMovieMutation = (state, object) => {
  console.log("from Mutation: ",object)
  state.moviesList.push(object);
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

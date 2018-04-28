// export const doubleCounter = state => state.counter * 2
//   export const stringCounter = state => state.counter + ' of Clicks'
//   export const value = state => state.value
export const getMovies = state => state.moviesList;
export const getUser = state => state.user;
export const getCategories = state => state.categories;
export const isSliderLoading = state => state.isSliderLoading;
export const isMovieLoading = state => state.isMovieLoading;
export const isError = state => state.error;

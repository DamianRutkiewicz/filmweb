// export const increment = ({ commit }) => {
//     commit('increment')
//   }
import * as firebase from 'firebase'

export const createMovieAction = ({commit}, object) => {

  const movie = {
    title: object.title,
    imageUrl: object.imageUrl,
    description: object.description,
    category: object.categorySelected,
    date: object.date
  }
  firebase.database().ref('movies').push(movie)
    .then(
      data => {
        console.log("Udalo sie dodac film : ",data);
        commit('createMovieMutation', movie);
      }
    ).catch(error => {
      console.log("Nie udalo sie dodac filmu");
    })
  //Zapisanie w firebase

}

export const signUpAction = ({commit},object) => {
  firebase.auth().createUserWithEmailAndPassword(object.email, object.password)
    .then(
      user => {
        const newUser = {
          id: user.uid,
          registeredMovies: []
        }

        commit('setUserMutation', newUser);
      }
    ).catch(
      error => {
        console.log("ERROR : ",error)
      }
    );

}

export const signUserInAction = ({commit}, ob) => {
  firebase.auth().signInWithEmailAndPassword(ob.email,ob.password)
    .then(
      user => {
        const newUser = {
          id: user.uid,
          registeredMovies: user.registeredMovies
        }
        commit('setUserMutation', newUser);
      }
    ).catch( error => console.log("error: ",error));
}

export const loadMoviesAction = ({ commit }) => {
  firebase.database().ref('movies').once('value')
    .then(
      data => {
        const movies = [];
        const ob = data.val();
        for(let key in ob) {
          movies.push(ob[key]);
        }

        commit('setLoadedMovies', movies);
      }
    )
    .catch(error => {
      console.log("error: ",error);
    })
}

export const loadCategoriesAction = ({ commit }) => {
  firebase.database().ref('categories').once('value')
    .then(
      data => {
        const categories = [];
        const ob = data.val();
        for(let key in ob) {
          categories.push(ob[key]);
        }
        commit('setLoadedCategories', categories);
      }
    )
    .catch(error => {
      console.log("error: ",error);
    })
}

export const logoutUserAction = ({ commit }) => {
  commit('logoutUserMutation');
}

export const createCategoryAction = ({ commit }, ob) => {

  firebase.database().ref('categories').push(ob)
    .then(
      data => {
        console.log("Udalo sie dodac kategorie : ");
      }
    ).catch(error => {
      console.log("Nie udalo sie dodac kategorii");
    })
}

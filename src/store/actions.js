// export const increment = ({ commit }) => {
//     commit('increment')
//   }
import * as firebase from 'firebase'

export const createMovieAction = ({commit}, mov) => {
console.log("Akcja mov: ",mov)
  // const movie = {
  //   title: mov.title,
  //   imageUrl: mov.imageUrl,
  //   description: mov.description,
  //   category: mov.categorySelected,
  //   isRecomended: mov.isRecomended,
  //   date: mov.date
  // }

  firebase.database().ref('movies').push(mov)
    .then(
      (data) => {
        // console.log("Udalo sie dodac film : ",data, " movie:",movie);
        const key = data.key;

        const movie = {
          title: mov.title,
          imageUrl: mov.imageUrl,
          description: mov.description,
          category: mov.categorySelected,
          isRecomended: mov.isRecomended,
          date: mov.date,
          key: key
        }


        console.log("data when i add movie: ", key);
        commit('createMovieMutation',movie);
      }
    ).catch(error => {
      console.log("Nie udalo sie dodac filmu:", error);
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
          movies.push({
            ...ob[key],
            id: key
          });
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

export const autoSignInAction = ({ commit }, user) => {
  commit('setUserMutation', { id: user.uid, registeredMovies: []});
}

import { mapGetters } from 'vuex'
import { store } from '../store/store'

export default (to, from , next) => {
  console.log("to jest przy logowaniu z mapGetters: ",store.state.user)
  if (store.state.user) {
    console.log("jestes zalogowany kurwiu: ", mapGetters.getUser)
    next();
  } else {
    console.log("nie jestes zalogowany ")
    next('/login')
  }
}

import { mapGetters } from 'vuex'

export default (to, from , next) => {
  if (mapGetters.getUser) {
    next();
  } else {
    next('/login')
  }
}

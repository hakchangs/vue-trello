export default {
  authorized(state) {
    return !!state.token
  },
}

export default {
  SET_TOKEN(state, token) {
    state.token = token
  },
  RESET_TOKEN(state) {
    state.token = null
  },
}

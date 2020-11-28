export default {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_ITEM(state, board) {
    state.item = board
  },
  RESET_ITEM(state) {
    state.item = null
  },
}

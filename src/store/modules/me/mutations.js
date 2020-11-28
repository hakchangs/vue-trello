export default {
  SET_ME(state, { id, email, name, createdAt, updatedAt }) {
    state.id = id
    state.email = email
    state.name = name
    state.createdAt = createdAt
    state.updatedAt = updatedAt
  },
  RESET_ME(state) {
    state.id = null
    state.email = null
    state.name = null
    state.createdAt = null
    state.updatedAt = null
  },
}

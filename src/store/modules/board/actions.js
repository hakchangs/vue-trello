import boardApi from "../../../api/boards"

export default {
  async FETCH_LIST({ commit, rootState }) {
    const token = rootState.auth.token
    const { data } = await boardApi.list(token)
    commit("SET_LIST", data.list)
  },
  async FETCH_ITEM({ commit, rootState }, id) {
    const token = rootState.auth.token
    const { data } = await boardApi.retrieve(id, token)
    commit("SET_ITEM", data.item)
  },
  async ADD_ITEM({ commit, rootState }, newBoard) {
    const token = rootState.auth.token
    const { data } = await boardApi.create(newBoard, token)
    commit("SET_ITEM", data.item)
  },
  async MODIFY_ITEM({ commit, rootState }, { id, change }) {
    const token = rootState.auth.token
    const { data } = await boardApi.update(id, change, token)
    commit("SET_ITEM", data.item)
  },
  async REMOVE_ITEM({ dispatch, commit, rootState }, id) {
    const token = rootState.auth.token
    await boardApi.delete(id, token)
    commit("RESET_ITEM")
    await dispatch("FETCH_LIST")
  },
}

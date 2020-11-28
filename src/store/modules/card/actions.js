import cardApi from "../../../api/cards"

export default {
  async ADD_ITEM({ commit, rootState }, newItem) {
    const token = rootState.auth.token
    const item = await cardApi.create(newItem, token)
    commit("SET_ITEM", item)
  },
  async FETCH_ITEM({ commit, rootState }, id) {
    const token = rootState.auth.token
    const item = await cardApi.retrieve(id, token)
    commit("SET_ITEM", item)
  },
  async MODIFY_ITEM({ commit, rootState }, { id, change }) {
    const token = rootState.auth.token
    const item = await cardApi.update(id, change, token)
    commit("SET_ITEM", item)
  },
  async REMOVE_ITEM({ commit, rootState }, id) {
    const token = rootState.auth.token
    await cardApi.delete(id, token)
    commit("RESET_ITEM")
  },
}

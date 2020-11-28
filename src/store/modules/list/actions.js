import listApi from "../../../api/lists"

export default {
  async ADD_ITEM({ commit, rootState }, newItem) {
    const token = rootState.auth.token
    const { data } = await listApi.create(newItem, token)
    commit("SET_ITEM", data.item)
  },
  async MODIFY_ITEM({ commit, rootState }, { id, change }) {
    const token = rootState.auth.token
    const { data } = await listApi.update(id, change, token)
    commit("SET_ITEM", data.item)
  },
  async REMOVE_ITEM({ commit, rootState }, id) {
    const token = rootState.auth.token
    await listApi.delete(id, token)
    commit("RESET_ITEM")
  },
}

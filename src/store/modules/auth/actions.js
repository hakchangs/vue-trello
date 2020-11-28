import authApi from "../../../api/auth"

export default {
  async LOGIN({ commit }, user) {
    const { data } = await authApi.login(user)
    const { accessToken } = data
    commit("SET_TOKEN", accessToken)
    commit("me/SET_ME", data.user, { root: true })
  },
}

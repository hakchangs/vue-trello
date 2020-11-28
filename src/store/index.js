import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import auth from "./modules/auth"
import me from "./modules/me"
import board from "./modules/board"
import list from "./modules/list"
import card from "./modules/card"

export default new Vuex.Store({
  modules: {
    auth,
    me,
    board,
    list,
    card,
  },
})

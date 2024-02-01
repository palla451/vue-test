import { createStore } from 'vuex'
import authLogin from "@/store/modules/authLogin";
import userLogged from "@/store/modules/userLogged";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authLogin,
    logged: userLogged
  }
})

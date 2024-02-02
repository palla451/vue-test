import { createStore } from 'vuex'
import authLogin from "@/store/modules/authLogin";
import userAuth from "@/store/modules/userAuth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authLogin,
    logged: userAuth
  }
})

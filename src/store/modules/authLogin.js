import axios from "axios";
import router from "@/router";

const state = {
    user: null,
    token: undefined,
    userLogged:false
};

const getters = {
    getUser: state => state.user,
    getToken: state => state.token,
    getUserLogged: state => state.userLogged
};

const  mutations = {
    setUser: (state,user) =>{ state.user = user },
    setToken: (state,token) => { state.token = token },
    setUserLogged: (state,value) => { state.userLogged = value}
};

const actions = {
    async login({commit}, credentials){
        const response = await axios.post('login',credentials);
        console.log(response.data);
        commit('setUser',response.data.user);
        commit('setToken',response.data.toke);
        commit('setUserLogged',true);
        localStorage.setItem('token',response.data.token);
        router.push('/')
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
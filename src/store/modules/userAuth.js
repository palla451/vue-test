import axios from "axios";

const state = {
    userIsLogged: null
};

const getters ={
    getUserIsLogged: state => state.userIsLogged
};

const mutations = {
    setUserIsLogged: (state,userIsLogged) => { state.userIsLogged = userIsLogged }
};

const actions = {
    async logged({commit}) {
            try {
                const response = await axios.get('logged');
                console.log(response.data.user);
                commit('setUserIsLogged',response.data.user);
            }catch (e){
                console.log(e.message);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
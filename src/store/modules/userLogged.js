import axios from "axios";

const state = {
    user: null
};

const getters ={
    getUserLogged: state => state.user
};

const mutation = {
    setUser: (state,value) => { state.user = value }
};

const actions = {
    async logged({commit}) {
            try {
                const response = await axios.get('logged');
                console.log(response.data.user);
                commit('setUser',response.data.user);
            }catch (e){
                console.log(e.message);
        }
    }
}

export default {
    state,
    getters,
    mutation,
    actions
}
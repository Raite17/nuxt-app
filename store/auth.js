export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null;
    }
}

export const actions = {
    async login({ commit, dispatch }, formData) {
        const token = await new Promise(resole => {
            setTimeout(() => resole('mock-token'), 2000)
        });
        dispatch('setToken', token);
    },
    setToken({ commit }, token) {
        commit('setToken', token);
    },
    logout({ commit }) {
        commit('clearToken');
    }
}


export const getters = {
    isAuth: state => Boolean(state.token)
}
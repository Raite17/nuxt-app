export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
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
    }
}


export const getters = {
    isAuth: state => Boolean(state.token)
}
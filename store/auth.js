export const state = () => ({
    token: true
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
        try {
            const { token } = await this.$axios.$post('api/auth/admin/login', formData);
            dispatch('setToken', token);
        } catch (e) {
            commit('setError', e, { root: true });
            throw e;
        }
    },

    async createUser({ commit }, formData) {
        try {
            await this.$axios.$post('/api/auth/admin/create', formData)
        } catch (e) {
            commit('setError', e, { root: true });
            throw e;
        }
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

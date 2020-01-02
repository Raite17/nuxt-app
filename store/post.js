import { create } from "domain"

const posts = [
    { title: 'Post1', date: new Date(), views: 22, comments: [1, 2], _id: Math.random() },
    { title: 'Post2', date: new Date(), views: 22, comments: [1, 2], _id: Math.random() }
]

export const actions = {
    async fetchAdmin({}) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 1000)
        })
    },

    async create({ commit }, { title, text }) {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('text', text);
            formData.append('image', image, image.name);
        } catch (e) {
            commit('setError', e, { root: true });
            throw e;
        }
    },

    async remove({}, id) {

    },

    async update({}, { id, text }) {

    },

    async fetchAdminById({}, id) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id = id));
            }, 1000)
        })
    }
}
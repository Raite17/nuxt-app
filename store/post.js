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

    async create({}, { title, text }) {

        return await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000)
        })
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
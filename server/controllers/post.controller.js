const Post = require('../models/post.model');
const consola = require('consola');

class PostController {

    constructor() {}

    async create(req, res) {

        const post = new Post({
            title: req.body.title,
            text: req.body.text,
            imageUrl: `/${req.file.filename}`
        });

        try {
            await post.save();
            res.status(201).json(post);
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Create post error: ${e.toString()}`);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find().sort({ date: -1 });
            res.json(posts);
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Get all posts error: ${e.toString()}`);
        }
    }

    async getById(req, res) {
        try {
            await Post.findById(req.params.id).populate('comments').exec((error, post) => {
                res.json(post);
            });
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Get post by id error: ${e.toString()}`);
        }
    }


    async update(req, res) {
        const $set = {
            text: req.body.text
        };
        try {
            const post = await Post.findOneAndUpdate({
                _id: req.params.id,
            }, { $set }, { new: true });
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Update post error: ${e.toString()}`);
        }
    }

    async remove(req, res) {
        try {
            await Post.deleteOne({ _id: req.params.id });
            res.json({ message: 'Пост успешно удален!' });
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Update post error: ${e.toString()}`);
        }
    }

    async addView(req, res) {
        const $set = {
            views: ++req.body.views
        }
        try {
            await Post.findOneAndUpdate({ _id: req.params.id }, { $set });
            res.status(204).json();
        } catch (e) {
            res.status(500).json(e);
            consola.error(`Update post error: ${e.toString()}`);
        }
    }

}

module.exports = new PostController();

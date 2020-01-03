const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const keys = require('../keys');

module.exports.login = async(req, res) => {
    const candidate = await User.findOne({ login: req.body.login });

    if (candidate) {
        const checkPassword = bcrypt.compareSync(req.body.password, candidate.password);

        if (checkPassword) {

            const token = jwt.sign({
                login: candidate.login,
                userId: candidate._id
            }, keys.JWT, { expiresIn: 60 * 60 });

            res.json({ token });

        } else {
            res.status(404).json({ message: 'Логин или пароль не верны!' });
        }

    } else {
        res.status(404).json({ message: 'Пользователь не найден!' });
    }
}


module.exports.createUser = async(req, res) => {
    console.log(req.body);
    const candidate = await User.findOne({ login: req.body.login });

    if (candidate) {
        res.status(409).json({ message: 'Такой Логин уже занят!' });
    } else {
        const salt = bcrypt.genSaltSync(10);

        const user = new User({
            login: req.body.login,
            password: bcrypt.hashSync(req.body.password, salt)
        });

        await user.save();
        res.status(201).json(user);
    }
}

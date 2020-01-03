const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const consola = require('consola');
const passportStrategy = require('./middleware/passport.strategy');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');
const app = express();
const keys = require('./keys');

mongoose.connect(keys.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => consola.success('MongoDB connected'))
    .catch(error => consola.error(`MongoDB connection error: ${error.toString()}`));

app.use(passport.initialize());
passport.use(passportStrategy);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


module.exports = app;

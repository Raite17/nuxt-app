const passport = require('passport');
const { Router } = require('express');
const router = Router();
const controller = require('../controllers/post.controller');
const upload = require('../middleware/upload');

// api/post/admin

// Admin
router.post(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
    controller.create
)

router.get(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    controller.getAll
)

router.get(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    controller.getById
)

router.put(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    controller.update
)


router.delete(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    controller.remove
)


// Base
// api/post
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.addView);

module.exports = router;

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const storesRouter = require('./stores.js');
const commentsRouter = require('./comments.js');
const dishesRouter = require('./dishes.js');
const shoppingCartsRouter = require('./shoppingCarts.js');
const categoriesRouter = require('./categories.js');
const favoritesRouter = require('./favorites.js');
const { restoreUser } = require("../../utils/auth.js");


// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/stores', storesRouter);

router.use('/comments', commentsRouter);

router.use('/dishes', dishesRouter);

router.use('/shoppingCarts', shoppingCartsRouter);

router.use('/categories', categoriesRouter);

router.use('/favorites', favoritesRouter);



router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
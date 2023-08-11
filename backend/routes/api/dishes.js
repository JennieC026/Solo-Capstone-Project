const express = require('express');

const {Store, Comment, User, Dish} = require('../../db/models');
const e = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    const dishes = await Dish.findAll({
        include: [
            {
                model: Store,
            },
        ],
    });
    return res.json(dishes);
});


module.exports = router;
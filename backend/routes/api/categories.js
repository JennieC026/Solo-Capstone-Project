const express = require('express');

const {Store, Comment, User,StoreCategory} = require('../../db/models');
const e = require('express');

const router = express.Router();


//get categories
router.get('/', async (req, res) => {
    const categories = await StoreCategory.findAll();
    return res.json(categories);

});

module.exports = router;
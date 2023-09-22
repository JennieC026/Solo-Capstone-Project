const express = require('express');

const {Store, Comment, User, Dish,Favorite} = require('../../db/models');
const e = require('express');

const router = express.Router();

//create favorite stores by user id
router.post('/', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const storeId = req.body.storeId;
    const store = await Store.findByPk(parseInt(storeId), {
        include: [
            {
                model: Favorite,
                as: 'Favorites',
            }
        ]
    });
    if(!store){
        return res.status(404).json({
            message:"Store couldn't be found"
        })
    }
    const existingFavorite = await Favorite.findOne({
        where: {
            userId: user.id,
            storeId: storeId ,
        }
    });
    if(existingFavorite){
        return res.status(500).json({
            message:"User already has a favorite for this store"
        })
    }
    const newFavorite = await Favorite.create({
        userId: user.id,
        storeId: storeId ,
    });
    
    return res.json(newFavorite);
    
});

//delete favorite stores by user id
router.delete('/:storeId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const storeId = req.params.storeId;
    const favorite = await Favorite.findOne({
        where: {
            userId: user.id,
            storeId: storeId ,
        }
    });
    if(!favorite){
        return res.status(404).json({
            message:"Favorite couldn't be found"
        })
    }
    if(favorite.userId !== user.id){
        return res.status(401).json({
            message:"Authentication required"})
    }
    await favorite.destroy();
    return res.json({
        message:"Favorite deleted successfully"
    });
    
});

module.exports = router;
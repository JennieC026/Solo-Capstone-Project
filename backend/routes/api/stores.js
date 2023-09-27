const express = require('express');

const {Store, Comment, User,StoreCategory,Dish,Favorite,Promotion} = require('../../db/models');
const Sequelize = require('sequelize');
const {findBiggestCategory} = require('../../utils/categoryTools');

const router = express.Router();

//find store dishes
router.get('/:storeId/dishes', async (req, res) => {
    const dishes = await Dish.findAll({
        where:{
            storeId : req.params.storeId

        },
        include: [
            {
                model: Store,
            },
            {
                model:Promotion,
            }
        ],
    });
    const modifiedDishes = dishes.map(dish=>{
        const dishObj = dish.toJSON();
        const numericPrice = parseFloat(dishObj.price);
        dishObj.price = numericPrice.toFixed(2);
        return dishObj;
    });
    console.log(modifiedDishes);
    return res.json(modifiedDishes);
});

//get all stores
router.get('/', async (req, res) => {
    const stores = await Store.findAll({
        attributes: ['id', 'name', 'address','categoryId','costLevel','deliveryFee','coverUrl','bannerUrl','createdAt','updatedAt',
        
    ],
        include: [
            {
                model: Comment,
                include: [User],
            },
            {
                model:StoreCategory,
                include:[StoreCategory]
            },
        ],
    });
    if(req.user){
        const modifiedStores = [];
        for (const store of stores) {
            let storeObj = store.toJSON();
            let totalStars = 0;
            
            for(let comment of store.Comments){
                totalStars += comment.starRating;
            }
            
            storeObj.avgStarRating = storeObj.Comments.length > 0 ? totalStars / storeObj.Comments.length : 0;
            storeObj.avgStarRating = storeObj.avgStarRating.toFixed(1);
            storeObj.category = findBiggestCategory(storeObj.StoreCategory);
            delete storeObj.StoreCategory;
            
            const existFav = await Favorite.findOne({
                where:{
                    userId:req.user.id,
                    storeId:storeObj.id
                }
            });
            
            storeObj.isFavorite = !!existFav;
            
            modifiedStores.push(storeObj);
        }
        return res.json(modifiedStores);

    }else{
        const modifiedStores = [];
        for (const store of stores) {
            let storeObj = store.toJSON();
            let totalStars = 0;
            
            for(let comment of store.Comments){
                totalStars += comment.starRating;
            }
            
            storeObj.avgStarRating = storeObj.Comments.length > 0 ? totalStars / storeObj.Comments.length : 0;
            storeObj.avgStarRating = storeObj.avgStarRating.toFixed(1);
            storeObj.category = findBiggestCategory(storeObj.StoreCategory);
            delete storeObj.StoreCategory;
            
                  
            modifiedStores.push(storeObj);
            
        }
        return res.json(modifiedStores);
    }
    

    

    
});



//get single store
router.get('/:storeId', async (req, res) => {
    const store = await Store.findByPk(parseInt(req.params.storeId), {
        attributes: ['id', 'name', 'address','categoryId','costLevel','deliveryFee','coverUrl','bannerUrl','createdAt','updatedAt',
    ],
        include: [
            {
                model: Comment,
                include: [User],
            },
            {
                model:StoreCategory,
                include:[StoreCategory]
            }
        ],
    });
    if(!store){
        return res.status(404).json({
            message:"Store couldn't be found"
        })
    }
    const modifiedStore = store.toJSON();
    let totalStars = 0;
    for(let comment of store.Comments){
        totalStars += comment.starRating;
    }
    modifiedStore.avgStarRating = modifiedStore.Comments.length > 0 ? totalStars / modifiedStore.Comments.length : 0;
    modifiedStore.avgStarRating = modifiedStore.avgStarRating.toFixed(1);
    modifiedStore.category = findBiggestCategory(modifiedStore.StoreCategory);
    delete storeObj.StoreCategory;
    res.json(modifiedStore);
});


//create comments by store id
router.post('/:storeId/comments', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const store = await Store.findByPk(parseInt(req.params.storeId), {
        include: [
            {
                model: Comment,
                as: 'Comments',
            }
        ]
    });
    if(!store){
        return res.status(404).json({
            message:"Store couldn't be found"
        })
    }
    const existingComment = await Comment.findOne({
        where: {
            userId: user.id,
            storeId: req.params.storeId,
        }
    });
    if(existingComment){
        return res.status(500).json({
            message:"User already has a comment for this store"
        })
    }
    const {content,starRating} = req.body;

    const newComment = await Comment.create({
        userId: user.id,
        storeId: req.params.storeId,
        content,
        starRating
    });
    return res.json(newComment);
    
});

//get favorite stores by user id
router.get('/favorite', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const favorites = await Favorite.findAll({
        where:{
            userId : user.id

        },
        include: [
            {
                model: Store,
            },
        ],
    });
    const favStores = favorites.map(favorite=>favorite.Store)

    return res.json(favStores);
});

module.exports = router;
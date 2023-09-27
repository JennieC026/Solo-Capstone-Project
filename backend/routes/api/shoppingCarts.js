const express = require('express');

const {Store, Comment, User,StoreCategory,Dish,ShoppingCart,ShoppingCartDish} = require('../../db/models');
const Sequelize = require('sequelize');

const router = express.Router();

//checkouts an order
router.put('/:shoppingCartId/checkout', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetShoppingCart = await ShoppingCart.findByPk(parseInt(req.params.shoppingCartId),{
        include: [{
            model: ShoppingCartDish,
            include: [Dish],
        },
    ],
    });
    if(!targetShoppingCart){
        return res.status(404).json({
            message:"Order couldn't be found"
        })
    }
    if(targetShoppingCart.userId !== user.id){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    if(targetShoppingCart.status !== 'open'){
        return res.status(403).json({
            message:"Can't checkout a closed order"
        })
    }
    targetShoppingCart.status = 'closed';
    await targetShoppingCart.save();
    const modifiedShoppingCart = targetShoppingCart.toJSON();
    modifiedShoppingCart.total = 0;
    modifiedShoppingCart.dishAmount = 0;
    for(let shoppingCartDish of modifiedShoppingCart.ShoppingCartDishes){
        modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
        modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
    }
    modifiedShoppingCart.total = (modifiedShoppingCart.total).toFixed(2)
    return res.json(modifiedShoppingCart);
});

//get all orders
router.get('/', async (req, res) => {
    const shoppingCarts = await ShoppingCart.findAll({
        attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt',
        
    ],
    where:{
        userId:req.user.id,
    },
        include: [
            {
                model: ShoppingCartDish,
                include: [Dish],
            },
            {
                model: Store,
                
            }
        ],
    });
    const modifiedShoppingCarts = shoppingCarts.map(shoppingCart => {
        let shoppingCartObj = shoppingCart.toJSON();
        shoppingCartObj.total = 0;
        shoppingCartObj.dishAmount = 0;
        for(let shoppingCartDish of shoppingCart.ShoppingCartDishes){
            shoppingCartObj.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
            shoppingCartObj.dishAmount += shoppingCartDish.quantity;
        }
        shoppingCartObj.total = (shoppingCartObj.total).toFixed(2)
       
        return shoppingCartObj;
    })

    return res.json(modifiedShoppingCarts);
});


router.put('/:shoppingCartId/shoppingCartDish/:shoppingCartDishId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetShoppingCart = await ShoppingCart.findByPk(parseInt(req.params.shoppingCartId));
    if(!targetShoppingCart){
        return res.status(404).json({
            message:"Order couldn't be found"
        })
    }
    if(targetShoppingCart.userId !== user.id){
  
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    if(targetShoppingCart.status !== 'open'){
        return res.status(403).json({
            message:"Can't add or edit dishes to a closed order"
        })
    }
    const {quantity} = req.body;

 
    const existingShoppingCartDish = await ShoppingCartDish.findOne({
        where:{
            shoppingCartId:req.params.shoppingCartId,
            id:req.params.shoppingCartDishId
        }
    });

  
    existingShoppingCartDish.quantity = quantity;
        await existingShoppingCartDish.save();
        const newShoppingCart = await ShoppingCart.findByPk(targetShoppingCart.id,{
            attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt'],
            include: [{
                model: ShoppingCartDish,
                include: [Dish],
            },
        ],
    })
        const modifiedShoppingCart = newShoppingCart.toJSON();
        modifiedShoppingCart.total = 0;
        modifiedShoppingCart.dishAmount = 0;
        for(let shoppingCartDish of newShoppingCart.ShoppingCartDishes){
            modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
            modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
        }
        modifiedShoppingCart.total = (modifiedShoppingCart.total).toFixed(2)
        return res.json(modifiedShoppingCart);
});

//add or edit dishes to an order
router.post('/:shoppingCartId/shoppingCartDish/:dishId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetShoppingCart = await ShoppingCart.findByPk(parseInt(req.params.shoppingCartId));
    if(!targetShoppingCart){
        return res.status(404).json({
            message:"Order couldn't be found"
        })
    }
    if(targetShoppingCart.userId !== user.id){
     
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    if(targetShoppingCart.status !== 'open'){
        return res.status(403).json({
            message:"Can't add or edit dishes to a closed order"
        })
    }
    const {quantity} = req.body;
    
    const existingShoppingCartDish = await ShoppingCartDish.findOne({
        where:{
            shoppingCartId:targetShoppingCart.id,
            dishId:req.params.dishId
        }
    });
    if(existingShoppingCartDish){
  
        existingShoppingCartDish.quantity = Number(existingShoppingCartDish.quantity) + Number(quantity);
        await existingShoppingCartDish.save();
        const newShoppingCart = await ShoppingCart.findByPk(targetShoppingCart.id,{
            attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt'],
            include: [{
                model: ShoppingCartDish,
                include: [Dish],
            },
        ],
    })
        const modifiedShoppingCart = newShoppingCart.toJSON();
        modifiedShoppingCart.total = 0;
        modifiedShoppingCart.dishAmount = 0;
        for(let shoppingCartDish of newShoppingCart.ShoppingCartDishes){
            modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
            modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
        }
        

        return res.json(modifiedShoppingCart);
    }else{
        const shoppingCartDish = await ShoppingCartDish.create({
            shoppingCartId:targetShoppingCart.id,
            dishId:req.params.dishId,
            quantity
        });
        const newShoppingCart = await ShoppingCart.findByPk(targetShoppingCart.id,{
            attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt'],
            include: [{
                model: ShoppingCartDish,
                include: [Dish],
            },
        ],
    });
    const modifiedShoppingCart = newShoppingCart.toJSON();
    modifiedShoppingCart.total = 0;
    modifiedShoppingCart.dishAmount = 0;
    for(let shoppingCartDish of newShoppingCart.ShoppingCartDishes){
        modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
        modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
    }
    modifiedShoppingCart.total = (modifiedShoppingCart.total).toFixed(2)

        return res.json(modifiedShoppingCart);
    }

    

    

});

//create a new order
router.post('/new', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }

    const {storeId,dishId,quantity} = req.body;
    const shoppingCart = await ShoppingCart.create({
        userId:user.id,
        storeId
    });
    const shoppingCartDish = await ShoppingCartDish.create({
        shoppingCartId:shoppingCart.id,
        dishId,
        quantity
    });
    const newShoppingCart = await ShoppingCart.findByPk(shoppingCart.id,{
        attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt'],
        include: [{
            model: ShoppingCartDish,
            include: [Dish],
        },
    ],
});
const modifiedShoppingCart = newShoppingCart.toJSON();
modifiedShoppingCart.total = 0;
modifiedShoppingCart.dishAmount = 0;
for(let shoppingCartDish of newShoppingCart.ShoppingCartDishes){
    modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
    modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
}
modifiedShoppingCart.total = (modifiedShoppingCart.total).toFixed(2)
    return res.json(modifiedShoppingCart);

});




//delete a dish from an order
router.delete('/:shoppingCartId/shoppingCartDish/:shoppingCartDishId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetShoppingCart = await ShoppingCart.findByPk(parseInt(req.params.shoppingCartId),{
        include: [{
            model: ShoppingCartDish,
            include: [Dish],
        },
    ],
    });

    if(!targetShoppingCart){
        return res.status(404).json({
            message:"Order couldn't be found"
        })
    }
    if(targetShoppingCart.userId !== user.id){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    if(targetShoppingCart.status !== 'open'){
        return res.status(403).json({
            message:"Can't add or edit dishes to a closed order"
        })
    }
    const existingShoppingCartDish = await ShoppingCartDish.findOne({
        where:{
            id:req.params.shoppingCartDishId
        }
    });

    if(!existingShoppingCartDish){
        return res.status(404).json({
            message:"The dish in this order couldn't be found"
        })
    }
    
    await existingShoppingCartDish.destroy();
    const newShoppingCart = await ShoppingCart.findByPk(targetShoppingCart.id,{
        include: [{
            model: ShoppingCartDish,
            include: [Dish],
        },
    ],
});
    if(!newShoppingCart.ShoppingCartDishes||newShoppingCart.ShoppingCartDishes?.length === 0){

        await targetShoppingCart.destroy();
        return res.json({message:"Order deleted"})
    } else{
        const newShoppingCart = await ShoppingCart.findByPk(targetShoppingCart.id,{
            attributes: ['id', 'userId', 'storeId','status','createdAt','updatedAt'],
            include: [{
                model: ShoppingCartDish,
                include: [Dish],
            },
        ],
    });
    const modifiedShoppingCart = newShoppingCart.toJSON();
    modifiedShoppingCart.total = 0;
    modifiedShoppingCart.dishAmount = 0;
    for(let shoppingCartDish of newShoppingCart.ShoppingCartDishes){
        modifiedShoppingCart.total += shoppingCartDish.Dish.price * shoppingCartDish.quantity;
        modifiedShoppingCart.dishAmount += shoppingCartDish.quantity;
    }
    modifiedShoppingCart.total = (modifiedShoppingCart.total).toFixed(2)
    
            return res.json(modifiedShoppingCart);

    }
   
});

//delete an order
router.delete('/:shoppingCartId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetShoppingCart = await ShoppingCart.findByPk(parseInt(req.params.shoppingCartId),{
        include: [{
            model: ShoppingCartDish,
            include: [Dish],
        },
    ],
    });
    if(!targetShoppingCart){
        return res.status(404).json({
            message:"Order couldn't be found"
        })
    }
    if(targetShoppingCart.userId !== user.id){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    if(targetShoppingCart.status !== 'open'){
        return res.status(403).json({
            message:"Can't delete a closed order"
        })
    }
    await targetShoppingCart.destroy();
    return res.json({message:"Order deleted"});
});




module.exports = router;
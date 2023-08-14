const express = require('express');

const {Store, Comment, User} = require('../../db/models');
const e = require('express');

const router = express.Router();


//get current user's comments
router.get('/currentUser', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const comments = await Comment.findAll({
        where: {
            userId: req.user.id,
        },
        include: [Store, User],
    });
    return res.json(comments);

});

//edit a comment
router.put('/:commentId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    const targetComment = await Comment.findByPk(parseInt(req.params.commentId));
    if(!targetComment){
        return res.status(404).json({
            message:"Comment couldn't be found"
        })
    }
    if(targetComment.userId !== user.id){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    const {content,starRating} = req.body;
    if(content)targetComment.set({content});
    if(starRating)targetComment.set({starRating});
    await targetComment.save();
    return res.json(targetComment);
});

//delete a comment
router.delete('/:commentId', async (req, res) => {
    const {user} = req;
    if(!user){
        return res.status(401).json({
            message:"Authentication required"})
    }
    console.log(req.params.commentId)
    const targetComment = await Comment.findByPk(parseInt(req.params.commentId));
    if(!targetComment){
        return res.status(404).json({
            message:"Comment couldn't be found"
        })
    }
    if(targetComment.userId !== user.id){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    await targetComment.destroy();
    return res.json({message:"successfully deleted"})
});

module.exports = router;

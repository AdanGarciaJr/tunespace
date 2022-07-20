const express = require('express')
const router = express.Router()
const { Post } = require('../models/')
const bodyParser = require('body-parser')
const ApiError = require('../error/ApiError')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}))

router.get('/', async (req, res) => {
    const posts = await Post.findAll()
    res.json(posts)
})

router.post('/', async(req,res, next) => {
    console.log(req.body)
    try {
        const post = await Post.create(req.body)

        res.json(post)
        
        throw new Error("Hello Error!")
    } catch (error) { // manually catching
        next(error) // passing to default middleware error handler
    }
    // const post = await Post.create(req.body)
    
    // if(req.headers.accept.indexOf('/json') > -1){
    //     res.json(post)

    // }
})

router.get('/:id',async (req,res) => {
    const post = await Post.findByPk(req.params.id)
    res.json(post) 
})

router.post('/:id',async (req,res) => {
    const { id } = req.params
    const post = await Post.update(req.body, {
        where: { ...req.params }
        })
    res.json(post)
})

router.get('/:id/delete', async (req,res) => {
    const { id } = req.params
    const deleted = await Post.destroy({
        where: { id }
    })
    res.json({'success': deleted})
    
})


module.exports = router
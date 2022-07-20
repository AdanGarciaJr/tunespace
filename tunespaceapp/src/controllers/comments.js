const express = require('express')
const router = express.Router()
const { Comment } = require('../models/')
const bodyParser = require('body-parser')
const ApiError = require('../error/ApiError')

router.use(bodyParser.urlencoded({ extended: false}))

router.get('/', async (req, res) => {
    const comments = await Comment.findAll()
    res.json(comments)
})

router.post('/', async(req,res, next) => {
    console.log(req.body)
    if(req.body === undefined){
        next(ApiError.badRequest('Something Went Wrong'))
        return;
    }
    const comment = await Comment.create(req.body)
    if(req.headers.accept.indexOf('/json') > -1){
        res.json(comment)

    }
})

router.get('/:id',async (req,res) => {
    const comment = await Comment.findByPk(req.params.id)
    res.json(comment) 
})

router.post('/:id',async (req,res) => {
    const { id } = req.params
    const comment = await Comment.update(req.body, {
        where: { ...req.params }
        })
    res.json(comment)
})

router.get('/:id/delete', async (req,res) => {
    const { id } = req.params
    const deleted = await Comment.destroy({
        where: { id }
    })
    res.json({'success': deleted})
    
})


module.exports = router
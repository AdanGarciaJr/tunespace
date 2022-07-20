const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const { User } = require('../models/')
const ApiError = require('../error/ApiError')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}))

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.post('/', async(req,res, next) => {
    
    console.log(req.body)
    try{
    const user = await User.create(req.body)
    console.log(req.body)
    // if(req.headers.accept.indexOf('/json') > -1){
    res.json(user)}catch(error){
        next(error)
    }
    // }
})

router.get('/:id',async (req,res) => {
    const quest = await User.findByPk(req.params.id)
    res.json(quest) 
})

router.post('/:id',async (req,res, next) => {
    try{
    const { id } = req.params
    const quest = await User.update(req.body, {
        where: { ...req.params }
        })
    res.json(quest)}
    catch(error){
        next(error)
    }
})

router.get('/:id/delete', async (req,res) => {
    const deleted = await User.destroy({
        where: { ...req.params }
    })
    res.json({'success': deleted})
    
})


module.exports = router
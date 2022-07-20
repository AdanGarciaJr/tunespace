const express = require('express')
const router = express.Router()
const { Group } = require('../models/')
const bodyParser = require('body-parser')
const ApiError = require('../error/ApiError')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}))

router.get('/', async (req, res) => {
    const groups = await Group.findAll()
    res.json(groups)
})

router.post('/', async(req,res, next) => {
    console.log(req.body)
    if(req.body === undefined){
        next(ApiError.badRequest('Something Went Wrong'))
        return;
    }
    const group = await Group.create(req.body)
    res.json(group)
})

router.get('/:id',async (req,res) => {
    const group = await Group.findByPk(req.params.id)
    res.json(group) 
})

router.post('/:id',async (req,res) => {
    const { id } = req.params
    const group = await Group.update(req.body, {
        where: { ...req.params }
        })
    res.json(group)
})

router.get('/:id/delete', async (req,res) => {
    const { id } = req.params
    const deleted = await Group.destroy({
        where: { id }
    })
    res.json({'success': deleted})
    
})


module.exports = router
const model = require('../models/posts')
const express = require('express') 
const router = express.Router()

router
    .get('/', (req,res,next) => {
        
        model.getAll().then((data) => {
            res.send(data)
        }).catch(next)
    })

    .get('/:id', (req,res,next) => {
        const { id } = req.params;
        model.get(id).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .post('/', (req,res,next) =>{
        const newPost = req.body
        model.create(newPost).then((data) => {
            res.status(201).send(data)
        }).catch(next)
    })

    .patch('/:id', (req,res,next) => {
        const newValues = req.body
        const {id} = req.params
        model.update(id, newValues).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .delete('/:id', (req, res, next) => {
        const {id} = req.params
        model.remove(id).then((data) => {
            res.send(data)
        }).catch(next)
    })

    .post('/seed', (req,res,next) => {
        model.seed().then((data) => {
            res.send(data)
        }).catch(next)
    })
module.exports = router
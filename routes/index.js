const express = require('express')
const router = express.Router();
const { User, Album } = require('../models')
const bcrypt = require('bcrypt')
const userRoutes = require('./user')
const bandRoutes = require('./band')
const jwt = require('jsonwebtoken')
const secret = 'Hello'

router.use('/user', userRoutes)
router.use('/band', bandRoutes)

router.get("/me", (req, res) => {
    try{
        const token = req.cookies.token;
        const payload = jwt.verify(token, secret);
        res.send(payload);
    }
    catch(error){
        res.status(401).send(error)
    }
});

router.post('/login', async (req,res,next)=>{
    try{
        const{password,email,name,lastName, _id} = await User.findOne({"email":req.body.email})
        const match = await bcrypt.compare(req.body.password, password);
        const payload = {email, name, lastName, id: _id}
        if(match){
            const token = jwt.singn(payload, secret)
            res.cookie('token',token)
            res.status(200).send(payload)
        }
        else{
            res.status(401).send({message:'Wrong email or password'})
        }
    }
    catch(error){
        res.status(401).send({message:'User does not exist'})
    }
})

router.post('/logout', async (req,res,next)=>{
    try{
        res.clearCookie('token')
        res.sendStatus(204)
    }
    catch(error){
        res.sendStatus(500)
    }
})




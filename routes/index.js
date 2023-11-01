const express = require('express')
const router = express.Router();
const { User, Album } = require('../models')
const bcrypt = require('bcrypt')
const userRoutes = require('./user')
const bandRoutes = require('./band')

router.use('/user', userRoutes)
router.use('/band', bandRoutes)

module.exports = router

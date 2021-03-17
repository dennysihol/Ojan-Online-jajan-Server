const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const productRouter = require('./product')
const {authenticate} = require('../middlewares/auth')

router.use(userRouter)
router.use(authenticate)
router.use('/products', productRouter)




module.exports = router
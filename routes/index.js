const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const productRouter = require('./product')
const cartRouter = require('./cart')


router.use(userRouter)
router.use('/products', productRouter)
router.use('/carts', cartRouter)




module.exports = router
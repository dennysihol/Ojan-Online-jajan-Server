const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()
const userRouter = require('./user')

router.use(userRouter)
router.use(errorHandler)



module.exports = router
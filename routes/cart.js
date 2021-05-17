const express = require('express')
const CartController = require('../controllers/cartController')
const { authenticate, authorizeUser } = require('../middlewares/auth')
const router = express.Router()

router.use(authenticate)
router.post('/:ProductId', CartController.addToCart)
router.get('/:UserId', authorizeUser, CartController.showCart)
router.patch('/:id', authorizeUser, CartController.patchCart)
router.delete('/:id', authorizeUser, CartController.deleteCart)

module.exports = router
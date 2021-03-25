const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const {authenticate, authorizeAdmin} = require('../middlewares/auth')

router.get('', ProductController.showProducts)
router.use(authenticate)
router.post('', authorizeAdmin, ProductController.addProduct)
router.get('/:id', authorizeAdmin, ProductController.getProduct)
router.put('/:id', authorizeAdmin, ProductController.putProduct)
router.delete('/:id', authorizeAdmin, ProductController.deleteProduct)

router.post('/carts/:ProductId', authorizeAdmin, ProductController.addToCart)


module.exports = router

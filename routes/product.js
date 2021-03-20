const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const {authorize} = require('../middlewares/auth')

router.post('', authorize, ProductController.addProduct)
router.get('', ProductController.showProducts)
router.get('/:id', authorize, ProductController.getProduct)
router.put('/:id', authorize, ProductController.putProduct)
router.delete('/:id', authorize, ProductController.deleteProduct)


module.exports = router

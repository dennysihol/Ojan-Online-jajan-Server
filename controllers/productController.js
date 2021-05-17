const { Product, Cart, User } = require('../models/index')

class ProductController {
    
    static addProduct(req, res, next) {
        const body = req.body
        const newProduct = {
            name: body.name,
            category: body.category,
            stock: +body.stock,
            price: +body.price,
            image: body.image
        }

        Product.create(newProduct)
            .then((product) => {
                res.status(201).json({product, message: "New Product Added"})
            })
            .catch((err) => {
                next({
                    code: 401,
                    message: "Not Authorized"
                })
            })
    }

    static showProducts(req, res, next) {
        Product.findAll()
            .then((product) => {
                res.status(200).json({product})
            })
            .catch((err) => {
                next(err)
            })
    }

    static getProduct(req, res, next) {
        const id = req.params.id
        Product.findOne({
            where: {
                id: +id
            }
        })
            .then((product) => {
                if(product){
                    res.status(200).json({product})
                } else {
                    next({
                        code: 404,
                        message: "Product not Found"
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    static putProduct(req, res, next) {
        const id = req.params.id
        const body = req.body
        const editedProduct = {
            name: body.name,
            category: body.category,
            stock: +body.stock,
            price: +body.price,
            image: body.image
        }

        Product.update(editedProduct, {
            where: {
                id: +id
            }
        })
            .then((product) => {
                if(product){
                    res.status(200).json({product})
                } else {
                    next({
                        code: 404,
                        message: "Product not Found"
                    })
                }
            })
            .catch((err) => {
                next(err)
            })

    }

    static deleteProduct(req, res, next) {
        const id = req.params.id
        Product.destroy({
            where: {
                id: +id
            }
        })
            .then((product) => {
                if(product){
                    res.status(200).json({message: "Product has been deleted"})
                } else {
                    next({
                        code: 404,
                        message: "Product not Found"
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }





}

module.exports = ProductController

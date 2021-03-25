const {User, Product, Cart} = require('../models')

class CartController {

    static addToCart(req, res, next) {
        const newCart = {
            ProductId: req.params.ProductId,
            UserId: req.user.id,
            total: req.body.total
        }

        Cart.create(newCart)
            .then((cart) => {
                res.status(201).json(cart)
            })
            .catch((err) => {
                res.status(400).json({message: err.message})
            })

    }

    static showCart(req, res, next) {
        Cart.findAll({
            where: {
                UserId : req.params.UserId
            },
            include: Product
        })
            .then((data) => {
                console.log(data);
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(404).json({message: err.message})
            })
    }

    static patchCart(req, res, next) {
        const id = req.params.id
        const updatedCart = {
            total: req.body.total
        }
        Cart.update(updatedCart, {
            where: {
                id: +id
            }
        })
            .then((cart) => {
                res.status(200).json({cart, message: 'Update cart success'})
            })
            .catch((err) => {
                next(err)
            })
    }

    static deleteCart(req, res, next) {
        const id = req.params.id
        Cart.destroy({
            where: {
                id: +id
            }
        })
            .then((cart) => {
                res.status(200).json({cart, message: 'Delete cart success'})
            })
            .catch((err) => {
                next(err)
            })
    }

}

module.exports = CartController
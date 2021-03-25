const{User, Product, Cart} = require('../models/index')
const {verifyToken} = require('./jwt')

const authenticate = (req, res , next) => {

    let {id, email} = verifyToken(req.headers.access_token)    

    User.findOne(
        {
            where: {
                email
            }
        }
    )
        .then((user) => {
            req.user = {id: user.id, email: user.email}
            next()

        })
        .catch((err) => {
            next({
                code: 401,
                message: "Unauthenticated"
            })
        })
}

const authorizeAdmin = (req, res, next) => {

    User.findOne(
        {
            where: {
                role: 'admin'
            }
        }
    )
        .then((user) => {
            if(user) {
                next()
            } else {
                next({
                    code: 401,
                    message: "Unauthorized"
                })
            }
        })
        .catch((err) => {
            next({
                code: 401,
                message: "Unauthorized"
            })
        })    

}

const authorizeUser = (req, res, next) => {
    let id = req.user.id
    Cart.findAll(
        {
            where: {
                UserId: +id
            }
        }
    )
        .then((cart) => {
            if(cart) {
                next()
            } else {
                next({
                    code: 401,
                    message: "Unauthorized"
                })
            }
        })
        .catch((err) => {
            next({
                code: 401,
                message: "Unauthorized"
            })
        })    

}

module.exports = {authenticate, authorizeAdmin, authorizeUser}

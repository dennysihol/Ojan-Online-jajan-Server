const{User, Product} = require('../models/index')
const {verifyToken} = require('./jwt')

const authenticate = (req, res , next) => {

    let {email} = verifyToken(req.headers.access_token)    

    User.findOne(
        {
            where: {
                email
            }
        }
    )
        .then((user) => {
            req.user = {email: user.email}
            next()

        })
        .catch((err) => {
            next({
                code: 401,
                message: "Unauthenticated"
            })
        })
}

const authorize = (req, res, next) => {

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

module.exports = {authenticate, authorize}

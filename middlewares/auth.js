const{User, Product} = require('../models/index')
const {verifyToken} = require('./jwt')

const authenticate = (req, res , next) => {

    let {email, role} = verifyToken(req.headers.access_token)    
    User.findOne(
        {
            where: {
                email, role
            }
        }
    )
        .then((user) => {
            req.user = {email: user.email, role: user.role}
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
            next()
        })
        .catch((err) => {
            next({
                code: 401,
                message: "Unauthorized"
            })
        })    

}

module.exports = {authenticate, authorize}

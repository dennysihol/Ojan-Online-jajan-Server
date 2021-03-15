const {User} = require('../models/index')
const {compare} = require('../middlewares/password')
const { generateToken } = require('../middlewares/jwt')

class UserController {

    static login(req, res, next){
        const email = req.body.email
        const password = req.body.password

        User.findOne({
            where: {
                email: email
            }
        })
            .then((user) => {
                if(user) {
                    let compared = compare(password, user.password)
                    if(compared) {
                        let payload = {
                            email: user.email,
                            roel: user.role
                        }

                        res.status(200).json({...payload, access_token: generateToken(payload)})
                    } else {
                        res.status(401).json({message: 'Email or Password Invalid'})
                    }
                } else {
                    res.status(401).json({message: 'Email or Password Invalid'})
                }
            })
            .catch((err) => {
                res.status(401).json({message: 'Email or Password Invalid'})
            })

    }

}

module.exports = UserController
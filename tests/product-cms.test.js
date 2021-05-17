const request = require('supertest')
const app = require('../app.js')
const { generateToken } = require('../middlewares/jwt')

var access_token_admin
let access_token_customer

beforeAll(function() {
    access_token_admin = generateToken({id: 1, email: 'admin@mail.com'}, process.env.SECRET_KEY)
})

describe('POST /products', function() {
    it('test post products should return response with status code 201', function(done) {

        const body = {
            name: "Kue Cincin",
            category: "Wet Cake",
            stock: 20,
            price: 10000,
            image: "https://img-global.cpcdn.com/recipes/6da6b37350e6d64c/1200x630cq70/photo.jpg",
        }

        request(app)
            .post('/products')
            .set('access_token', access_token_admin)
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(201)
                expect(typeof res.body).toEqual('object')
                expect(res.body).toHaveProperty('message', "New Product Added");
            })
            .catch(err => {
                done(err)
            })
    })

})
const request = require('supertest')
const app = require('../app.js')

describe('POST /login', function() {
    it('test login should return response with status code 200', function(done) {

        const body = {
            email: "admin@mail.com",
            password: "123456"
        }

        request(app)
            .post('/login')
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body).toHaveProperty('access_token', expect.any(String));
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('test error login should return response with status code 401', function(done) {

        const body = {
            email: "blabla@mail.com",
            password: ""
        }

        request(app)
            .post('/login')
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(401);
                expect(res.body).toHaveProperty('message', "Invalid Email or Password");
                done()
            })
            .catch(err => {
                done(err)
            })
    })

})
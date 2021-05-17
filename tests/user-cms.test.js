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
                expect(res.statusCode).toEqual(200)
                expect(typeof res.body).toEqual('object')
                expect(res.body).toHaveProperty('access_token')
                expect(typeof res.body.access_token).toEqual('string')
                expect(res.body).toHaveProperty('id')
                expect(typeof res.body.id).toEqual('number')
                expect(res.body).toHaveProperty('role')
                expect(typeof res.body.role).toEqual('string')
                expect(res.body).toHaveProperty('email', body.email)
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('test error login wrong password should return response with status code 401', function(done) {

        const body = {
            email: "admin@mail.com",
            password: "654321"
        }

        request(app)
            .post('/login')
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(401);
                expect(typeof res.body).toEqual('object')
                expect(res.body).toHaveProperty('message', "Invalid Email or Password");
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('test error login no email in db should return response with status code 401', function(done) {

        const body = {
            email: "adim@mail.com",
            password: "123456"
        }

        request(app)
            .post('/login')
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(401);
                expect(typeof res.body).toEqual('object')
                expect(res.body).toHaveProperty('message', "Invalid Email or Password");
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('test error login empty email and password should return response with status code 401', function(done) {

        const body = {
            email: "",
            password: ""
        }

        request(app)
            .post('/login')
            .send(body)
            .then(res => {
                expect(res.statusCode).toEqual(401);
                expect(typeof res.body).toEqual('object')
                expect(res.body).toHaveProperty('message', "Invalid Email or Password");
                done()
            })
            .catch(err => {
                done(err)
            })
    })

})
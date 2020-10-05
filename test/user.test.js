const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')


const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '123456y7'
}

const userTwo = {
    name: 'Mikefail',
    email: 'mikefail@example.com',
    password: '123456y7'
}


beforeEach(async()=> {
    await User.deleteMany()
    await new User(userOne).save()
})

afterEach(()=> {
    console.log('after each')
})

test('should sign up a new user', async ()=> {
    await request(app).post('/users').send({
        name: 'Andrew',
        email: 'guivipom23@gmail.com',
        password: '123456y7'
    }).expect(201)
})

test('should log in a new user', async ()=> {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should NOT log in a new user', async ()=> {
    await request(app).post('/users/login').send({
        email: userTwo.email,
        password: userTwo.password
    }).expect(400)
})
// Controller

const express = require('express')
const bodyParser = require('body-parser')
const {verrifyAToken} = require('../Middleware/AuthenticateUser')
const routes = express.Router()
const {users, products, bookAuthor} = require('../model')

// ================User's Router=================
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

// ================Product's Router=================
routes.post('/addproduct', bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
})

routes.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})

routes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req, res)
})

routes.put('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})
routes.patch('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})

routes.delete('/product/:id', (req, res)=>{
    products.deleteProduct(req, res)
})


module.exports = {
    express,
    routes,
    verrifyAToken
}
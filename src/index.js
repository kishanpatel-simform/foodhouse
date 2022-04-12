const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, 'templates/views/customers')
const partialsPath = path.join(__dirname, 'templates/partials/customers')
console.log(__dirname)
console.log(publicDirectory)
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.render('index', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        // res.send("Hello")
})
app.get('/cart', (req, res) => {
    res.render('cart', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        // res.send("Hello")
})
app.get('/mealprovider', (req, res) => {
    res.render('mealprovider', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        //  res.send("Hello")
})
app.get('/register', (req, res) => {
    res.render('register', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        //  res.send("Hello")
})
app.get('/login', (req, res) => {
    res.render('login', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        //  res.send("Hello")
})


app.listen(port, () => {
    console.log("Server Started")
})
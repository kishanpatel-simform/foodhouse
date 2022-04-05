const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, 'templates/views/admin')
const partialsPath = path.join(__dirname, 'templates/partials/admin')
console.log(__dirname)
console.log(publicDirectory)
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectory))

app.get('/admin', (req, res) => {
    res.render('index', {
            title: 'This is Admin Page',
            name: 'Kishan Patel'
        })
        // res.send("Hello")
})

app.listen(port, () => {
    console.log("Server Started")
})
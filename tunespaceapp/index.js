const { request, response } = require('express')
const express = require('express')
const app = express()
const { User } = require('./src/models')
const { Group } = require('./src/models')
const userCtrl = require('./src/controllers/users')
const groupCtrl = require('./src/controllers/groups')
const commentCtrl = require('./src/controllers/comments')
const postCtrl = require('./src/controllers/posts')
const bodyParser = require('body-parser')
const session = require('express-session')
const apiErrorHandler = require('./src/error/api-error-handler')
app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}))

app.set(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname + '/src/views')
app.set('view engine', 'twig')

app.use(express.static('public'))
// //GET / http/1.1

app.get('/',(request, response, next) => { 
    console.log(request.session.access_token)
    response.render('home/home')})
//     //response.send('Home Page!')
// })
// app.get('/', async (request, response) => {
//     const quest = await Question.findByPk()
//     response.render('home/home', {quest})
//     //response.send('Home Page!')
// })

app.use('/users', userCtrl)
app.use('/groups', groupCtrl)
app.use('/comments', commentCtrl)
app.use('/posts', postCtrl)
app.use(apiErrorHandler)




app.listen(3001)
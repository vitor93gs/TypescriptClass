import express from 'express'
import routes from './routes'
import UserController from './controllers/UserController'

const app = express()

app.use(routes)

app.listen(3333)

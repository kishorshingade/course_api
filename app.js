const express = require('express')
const app = express()
const morgan = require('morgan')
require('./db_conn')
const CourseRoute = require('./routes/Course')
const UsersRoute = require('./routes/Users.js')
const cors = require('cors')

//middlewears
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/courses',CourseRoute)
app.use('/users',UsersRoute)

module.exports = app
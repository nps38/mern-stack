require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
//creates express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests at port # only after connected to DB
        app.listen(process.env.PORT, () => {
            console.log("connected to DB and listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//create schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true})

//model applies schema to model
module.exports = mongoose.model('Workouts', workoutSchema)
const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'GET single workout'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try {
        //create new workout
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: 'POST new workout'})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE workout'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE workout'})
})

module.exports = router
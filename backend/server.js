const express = require('express')

//creates express app
const app = express()

//listen for requests (certain port #)
app.listen(4000, () => {
    console.log("listening on port 4000")
})
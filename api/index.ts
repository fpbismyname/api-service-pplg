const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.get("/", (req:any, res:any)=>{
    res.json({
        message: "Hello, World!"
    })
})

module.exports = app
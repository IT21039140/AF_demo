require('dotenv').config()

const express = require('express')
const mongoose=require('mongoose')
const mealRout=require('./routes/meal')
const cors = require('cors');
const bodyParser = require('body-parser');
const Meal=require('./models/mealPlaneModels')


//express app
const app= express();

//midleware

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log(req.path,res.method)
    next()
})

//routes
app.use('/api/meal', mealRout)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(process.env.PORT, ()=>{
            console .log('listening on port ',process.env.PORT)
        })        
    })
    .catch((error)=>{
        console.log(error)
    })



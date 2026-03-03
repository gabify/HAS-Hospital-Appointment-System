require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

//Routers
const patientRoute = require('./app/routes/patient-routes');
const appointmentRoute = require('./app/routes/appointment-routes');
const consultationRoute = require('./app/routes/consultation-routes');
const billingRoute = require('./app/routes/billing-routes');

//init app
const app = express();

//middleware 
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.DB_URI)
    .then(() =>{
        app.listen(process.env.PORT || 9000, () =>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`)
        })
    }).catch(error =>{
        console.log(error)
    })

const requestMapper = '/api'
app.use(requestMapper+'/patients', patientRoute);
app.use(requestMapper+'/appointment', appointmentRoute);
app.use(requestMapper+'/consultation', consultationRoute);
app.use(requestMapper+'/billing', billingRoute);


//if no request match
app.use((req, res) =>{
    res.status(404).json({error: 'No such endpoint exists'})
})
const Patient = require('../models/patient');

const createPatient = async (req, res) =>{
    const {name, birthdate, address, phone, patientStatus} = req.body;

    try{
        const patient = await Patient.create({
            name, birthdate, address, phone, patientStatus
        });
        res.status(200).json(patient);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const getAllPatients = async(req, res) =>{
    const patients = await Patient.find({});
    res.status(200).json(patients);
}

const getPatientUsingPatientId = async(req, res) =>{
    const {patientId} = req.params

    try{
        const patient = await Patient.findById({_id: patientId});
        res.status(200).json(patient);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createPatient,
    getAllPatients,
    getPatientUsingPatientId
}
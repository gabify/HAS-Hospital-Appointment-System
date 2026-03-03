const Appointment = require('../models/appointment');

const createAppointment = async (req, res) =>{
    const{patientId, doctorName, department, appointmentDate, appointmentStatus} = req.body;

    try{
        const appointment = await Appointment.create({
            patientId, doctorName, department, appointmentDate, appointmentStatus
        });
        res.status(200).json(appointment);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const getAllAppointments = async(req, res) =>{
    const appointments = await Appointment.find({});
    res.status(200).json(appointments);
}

const getAppointmentUsingPatientId = async(req, res) =>{
    const {appointmentId} = req.params

    try{
        const appointment = await Appointment.findById({_id: appointmentId});
        res.status(200).json(appointment);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports ={
    createAppointment,
    getAllAppointments,
    getAppointmentUsingPatientId
}


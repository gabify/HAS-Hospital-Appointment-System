const express = require('express');
const router = express.Router();

const {createAppointment, getAllAppointments, getAppointmentUsingPatientId} = require('../controllers/appointment-controller');

router.post('/', createAppointment);
router.get('/', getAllAppointments);
router.get('/:patientId', getAppointmentUsingPatientId)

module.exports = router;
const express = require('express');
const router = express.Router();

const {createPatient, getAllPatients, getPatientUsingPatientId} = require('../controllers/patient-controller');

router.post('/', createPatient);
router.get('/', getAllPatients);
router.get('/:patientId', getPatientUsingPatientId)

module.exports = router;
const express = require('express');
const router = express.Router();

const {createConsultation, getConsultationHistoryUsingPatientId} = require('../controllers/consultation-controller');

router.post('/', createConsultation);
router.get('/:patientId', getConsultationHistoryUsingPatientId)

module.exports = router;
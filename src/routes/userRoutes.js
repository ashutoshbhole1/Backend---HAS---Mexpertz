const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  getDoctorDetails,
  getAllPatients,
  getPatientDetails,
  getAllUsers,
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

// Admin routes
router.get('/', protect, authorize('admin'), getAllUsers);

// Public/Doctor routes
router.get('/doctors', getAllDoctors);
router.get('/doctors/:doctorId', getDoctorDetails);
router.get('/patients', protect, authorize('admin', 'doctor'), getAllPatients);
router.get('/patients/:patientId', protect, getPatientDetails);

module.exports = router;

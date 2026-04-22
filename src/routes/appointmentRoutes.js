const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  getUserAppointments,
  createAppointment,
  updateAppointment,
  cancelAppointment,
  getAvailableSlots,
  getAppointmentDetails,
} = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.get('/available-slots', getAvailableSlots);

// Protected routes
router.get('/', protect, getAllAppointments);
router.get('/:appointmentId', protect, getAppointmentDetails);
router.get('/user/:userId', protect, getUserAppointments);
router.post('/', protect, createAppointment);
router.put('/:appointmentId', protect, updateAppointment);
router.put('/:appointmentId/cancel', protect, cancelAppointment);

module.exports = router;

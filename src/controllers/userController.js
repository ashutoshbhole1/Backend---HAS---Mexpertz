const User = require('../models/User');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor', isActive: true });

    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get doctors by department
exports.getDoctorsByDepartment = async (req, res) => {
  try {
    const { department } = req.params;

    const doctors = await User.find({
      role: 'doctor',
      department,
      isActive: true,
    });

    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get doctor details
exports.getDoctorDetails = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const doctor = await User.findById(doctorId);

    if (!doctor || doctor.role !== 'doctor') {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } });
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all patients (Users)
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: 'user', isActive: true });

    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get patient details (User)
exports.getPatientDetails = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await User.findById(patientId);

    if (!patient || patient.role !== 'user') {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

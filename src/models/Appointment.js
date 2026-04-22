const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide patient ID'],
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide doctor ID'],
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Please provide appointment date'],
    },
    timeSlot: {
      type: String,
      required: [true, 'Please provide time slot'],
    },
    reason: {
      type: String,
      required: [true, 'Please provide reason for appointment'],
    },
    symptoms: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    notes: {
      type: String,
    },
    department: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 30,
    },
  },
  { timestamps: true }
);

// Populate patient and doctor details
appointmentSchema.pre(/^find/, function() {
  this.populate({
    path: 'patientId',
    select: 'name email phone',
  }).populate({
    path: 'doctorId',
    select: 'name department',
  });
});

module.exports = mongoose.model('Appointment', appointmentSchema);

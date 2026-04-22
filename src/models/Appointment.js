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
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

// Populate patient and doctor details
appointmentSchema.pre(/^find/, function() {
  this.populate({
    path: 'patientId',
    select: 'name email',
  }).populate({
    path: 'doctorId',
    select: 'name',
  });
});

module.exports = mongoose.model('Appointment', appointmentSchema);

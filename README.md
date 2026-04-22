# Hospital Appointment System - Backend

## Overview
Express.js backend API for the hospital appointment system with user authentication and appointment management.

## Features
- User authentication (register/login)
- Role-based access control (Patient, Doctor, Admin)
- Appointment management (CRUD operations)
- Available time slots tracking
- Doctor and patient management

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcryptjs for password hashing

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env` and update values:

```
MONGODB_URI=mongodb://localhost:27017/hospital_appointments
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Running the Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Appointments
- `GET /api/appointments` - Get all appointments (protected)
- `GET /api/appointments/:appointmentId` - Get appointment details (protected)
- `GET /api/appointments/user/:userId` - Get user appointments (protected)
- `POST /api/appointments` - Create appointment (protected)
- `PUT /api/appointments/:appointmentId` - Update appointment (protected)
- `PUT /api/appointments/:appointmentId/cancel` - Cancel appointment (protected)
- `GET /api/appointments/available-slots` - Get available time slots

### Users
- `GET /api/users/doctors` - Get all doctors
- `GET /api/users/doctors/department/:department` - Get doctors by department
- `GET /api/users/doctors/:doctorId` - Get doctor details
- `GET /api/users/patients` - Get all patients (protected, admin/doctor only)
- `GET /api/users/patients/:patientId` - Get patient details (protected)

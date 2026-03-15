# Hospital Appointment System (HAS) – Legacy Version
This repository contains a legacy Hospital Information System used internally by the institution since 2018.
The system manages patient information, appointment, consultation information and biling.

## System Overview
The HAS is composed of four internal subsystems:

- Patient Information Management
- Appointment Scheduling
- Consultation Management
- Billing Management

## Data Considerations
- Each module maintains its own data model.
- No global schema enforcement exists across modules.
- Identifier formats may vary.
- Term naming conventions are not standardized.
- Cross-module validation is limited.
      
## API Overview

Each subsystem exposes REST-like endpoints.
- Patient Information Management
``` Bash
GET /api/patients
GET /api/patients/{id}
POST /api/patients/
```
- Appointment Scheduling
``` Bash
GET /api/appointment
GET /api/appointment/{patientId}
POST /api/appointment/
```

- Consultation Management
``` Bash
GET /api/consultation/{patientId}
POST /api/consultation/
```

- Billing Management
``` Bash
GET /api/billing/{patientId}
POST /api/billing/
PUT /api/billing/{billingId}/mark-paid
```

## Academic Exercise Context

This system is intentionally designed to simulate a legacy environment.

Students are expected to:
- Analyze system boundaries
- Identify inconsistencies
- Propose integration strategies
- Recommend modernization approaches

Check the system [here](https://has-hospital-appointment-system.onrender.com/) for more information.

# Backend Setup

## Installation

```bash
cd backend
npm install
```

## Running the Backend

```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user

### Tours
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get tour by ID

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user/:userId` - Get user bookings

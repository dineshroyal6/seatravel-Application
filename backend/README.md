# Sea Travel Backend API

Complete Node.js/Express backend with SQLite database for the Sea Travel booking application.

## Features

- ✅ SQLite database with proper schema
- ✅ RESTful API endpoints for voyages, bookings, reviews
- ✅ Database relationships and constraints
- ✅ CORS enabled for frontend communication
- ✅ Sample data seeding endpoint
- ✅ Error handling and validation

## Installation

```bash
cd backend
npm install
```

## Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## Database Schema

### Tables

1. **users** - User accounts and authentication
   - id, email, password, name, phone, createdAt

2. **voyages** - Cruise voyage information
   - id, title, description, departure, duration, ports, basePrice, image

3. **cabins** - Cabin types for each voyage
   - id, voyageId, type, price, available, maxOccupancy

4. **bookings** - Customer bookings
   - id, userId, voyageId, cabinId, cabinType, passengerCount, totalPrice, status, paymentMethod

5. **reviews** - Customer reviews and ratings
   - id, bookingId, userId, voyageId, rating, comment, createdAt

6. **savedBookings** - Wishlist/saved voyages
   - id, userId, voyageId, savedAt

7. **payments** - Payment transaction records
   - id, bookingId, amount, paymentMethod, transactionId, status

## API Endpoints

### Voyages
```
GET    /api/voyages              - Get all voyages
GET    /api/voyages/:id          - Get single voyage
POST   /api/voyages              - Create voyage
PUT    /api/voyages/:id          - Update voyage
DELETE /api/voyages/:id          - Delete voyage
```

### Bookings
```
GET    /api/bookings             - Get all bookings
GET    /api/bookings/user/:userId - Get user bookings
POST   /api/bookings             - Create booking
PUT    /api/bookings/:id         - Update booking
DELETE /api/bookings/:id         - Cancel booking
```

### Reviews
```
GET    /api/reviews/voyage/:voyageId - Get voyage reviews
POST   /api/reviews              - Create review
PUT    /api/reviews/:id          - Update review
DELETE /api/reviews/:id          - Delete review
```

### Database
```
POST   /api/seed                 - Seed database with sample data
GET    /api/health               - Server health check
```

## Example Requests

### Get All Voyages
```bash
curl http://localhost:5000/api/voyages
```

### Create Booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "voyageId": 1,
    "cabinId": 1,
    "cabinType": "Interior",
    "passengerCount": 2,
    "totalPrice": 2598,
    "paymentMethod": "card"
  }'
```

### Get Voyage Reviews
```bash
curl http://localhost:5000/api/reviews/voyage/1
```

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
NODE_ENV=development
```

## Frontend Integration

To connect the React frontend to this backend, update your API calls:

```javascript
// In React components
const API_BASE_URL = 'http://localhost:5000/api';

// Example: Fetch voyages
fetch(`${API_BASE_URL}/voyages`)
  .then(res => res.json())
  .then(data => setVoyages(data));
```

## Features Added

✅ **Database Persistence** - All data stored in SQLite
✅ **User Management** - User accounts and authentication ready
✅ **Booking Management** - Full booking lifecycle with status tracking
✅ **Review System** - Customers can rate and review voyages
✅ **Cabin Management** - Track available cabins per voyage
✅ **Payment Tracking** - Store payment transaction details
✅ **Wishlist** - Users can save favorite voyages

## Next Steps

1. Install backend: `cd backend && npm install`
2. Start backend: `npm run dev`
3. Seed database: `curl -X POST http://localhost:5000/api/seed`
4. Update React frontend to use API instead of localStorage
5. Add authentication (JWT tokens)
6. Add payment processing (Stripe/PayPal)

---

**Created:** January 10, 2026
**Database:** SQLite (seatravel.db)
**Framework:** Express.js with Node.js

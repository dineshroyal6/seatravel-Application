# Sea Travel Application - Complete Setup Guide

## 🚀 Project Overview

A full-stack sea travel/cruise booking application with React frontend and Node.js/SQLite backend.

## 📁 Project Structure

```
seatravel-Application/
├── src/                          # React frontend
│   ├── components/              # Reusable components
│   │   ├── Css/                # Component styles
│   │   ├── BookingSteps.js
│   │   ├── CabinSelection.js
│   │   ├── PassengerForm.js
│   │   ├── PaymentForm.js
│   │   └── ...
│   ├── pages/                   # Page components
│   │   ├── Booking.js
│   │   ├── Home.js
│   │   ├── MyAccount.js
│   │   ├── Voyages.js
│   │   └── Admin.js
│   ├── Images/                  # Voyage images
│   ├── App.js                   # Main app component
│   └── index.js                 # React entry point
├── backend/                      # Node.js/Express backend
│   ├── routes/                  # API route handlers
│   │   ├── voyages.js
│   │   ├── bookings.js
│   │   └── reviews.js
│   ├── database.js              # SQLite setup
│   ├── server.js                # Express server
│   ├── package.json
│   └── .env
├── public/                       # Static assets
└── package.json
```

## 🛠️ Installation

### Step 1: Install Frontend Dependencies
```bash
# From project root
npm install
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

## ▶️ Running the Application

### Terminal 1: Start React Frontend
```bash
npm start
```
Frontend runs on: http://localhost:3000 or http://localhost:3001

### Terminal 2: Start Node.js Backend
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

### Terminal 3 (Optional): Seed Database
```bash
cd backend
curl -X POST http://localhost:5000/api/seed
```

## 🎯 Features

### Frontend (React)
- ✅ 5-step booking flow
- ✅ Voyage filtering (duration, price)
- ✅ Cabin selection with pricing
- ✅ Passenger information form
- ✅ Payment processing (Card/UPI)
- ✅ Booking confirmation
- ✅ Admin dashboard
- ✅ User account management
- ✅ Responsive design (mobile, tablet, desktop)

### Backend (Node.js + SQLite)
- ✅ RESTful API endpoints
- ✅ User management
- ✅ Voyage management
- ✅ Booking system
- ✅ Review/rating system
- ✅ Payment tracking
- ✅ Wishlist/saved bookings
- ✅ Database relationships and constraints

## 🗄️ Database Schema

```
users (id, email, password, name, phone, createdAt)
voyages (id, title, description, departure, duration, ports, basePrice, image)
cabins (id, voyageId, type, price, available, maxOccupancy)
bookings (id, userId, voyageId, cabinId, cabinType, passengerCount, totalPrice, status)
reviews (id, bookingId, userId, voyageId, rating, comment)
savedBookings (id, userId, voyageId)
payments (id, bookingId, amount, paymentMethod, transactionId, status)
```

## 📡 API Endpoints

### Voyages
```
GET    /api/voyages              # All voyages
GET    /api/voyages/:id          # Single voyage
POST   /api/voyages              # Create voyage
PUT    /api/voyages/:id          # Update voyage
DELETE /api/voyages/:id          # Delete voyage
```

### Bookings
```
GET    /api/bookings             # All bookings
GET    /api/bookings/user/:id    # User bookings
POST   /api/bookings             # Create booking
PUT    /api/bookings/:id         # Update booking
DELETE /api/bookings/:id         # Cancel booking
```

### Reviews
```
GET    /api/reviews/voyage/:id   # Voyage reviews
POST   /api/reviews              # Create review
PUT    /api/reviews/:id          # Update review
DELETE /api/reviews/:id          # Delete review
```

## 🎨 UI/UX Features

- **Modern design** with gradients and shadows
- **Responsive layout** that works on all devices
- **Progress indicators** with emoji icons
- **Interactive voyage cards** with images
- **Form validation** for all inputs
- **Error handling** with user feedback
- **Professional styling** with CSS3 features

## 🔒 Security Features (Ready to Implement)

- JWT authentication
- Password hashing (bcrypt)
- CORS configuration
- Input validation
- SQL injection prevention (using parameterized queries)
- HTTPS ready

## 📊 Data Flow

1. **User visits booking page** → React loads from localStorage
2. **User selects voyage** → Frontend updates state
3. **User completes booking** → Data sent to backend API
4. **Backend stores in SQLite** → Persisted to database
5. **User reviews voyage** → Review saved to database
6. **Admin views dashboard** → Pulls data from API

## 🧪 Testing the Application

### Test Booking Flow
1. Navigate to /booking
2. Select a voyage with filters
3. Choose a cabin type
4. Enter passenger information
5. Complete payment
6. View confirmation

### Test Admin Dashboard
1. Navigate to /admin
2. View all bookings
3. View voyage information
4. Check statistics and revenue

### Test API Directly
```bash
# Get all voyages
curl http://localhost:5000/api/voyages

# Get voyage reviews
curl http://localhost:5000/api/reviews/voyage/1

# Create booking
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"userId":1,"voyageId":1,"cabinId":1,"cabinType":"Interior","passengerCount":2,"totalPrice":2598,"paymentMethod":"card"}'
```

## 🐛 Troubleshooting

### Frontend won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm start
```

### Backend won't connect
- Ensure backend is running on port 5000
- Check CORS settings in server.js
- Verify API URLs in React components

### Database issues
- Delete seatravel.db and restart backend
- Run `/api/seed` endpoint to initialize data
- Check database.js for schema errors

## 📚 Documentation Files

- `CODE_LOGIC_EXPLAINED.md` - Complete code explanation
- `UI_AND_IMAGE_FIXES.md` - UI improvements details
- `backend/README.md` - Backend API documentation

## 🚀 Deployment Ready

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Heroku/Railway)
```bash
npm run start
```

## 🎓 Learning Resources

The application demonstrates:
- React hooks (useState, useEffect)
- React Router for navigation
- RESTful API design
- SQLite database design
- Express.js middleware
- CORS handling
- Form validation
- State management
- Component composition

## ✨ Next Features to Add

- User authentication (Login/Register)
- Payment gateway integration (Stripe)
- Email notifications
- Advanced search and filters
- Booking cancellation
- Refund processing
- Multi-language support
- Dark mode theme
- Push notifications

## 📞 Support

For issues or questions, refer to:
1. Check documentation files
2. Review console errors
3. Check API responses in Network tab
4. Verify database with SQLite viewer

---

**Version:** 1.0.0  
**Last Updated:** January 10, 2026  
**Status:** ✅ Fully Functional

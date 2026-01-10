# Sea Travel Booking Application - Testing Guide

## How to Test the Application

### 1. **Home Page**
- Visit `http://localhost:3001`
- You should see:
  - Hero section with animation
  - Featured trips section
  - "Why Choose Us" benefits section
  - Popular voyages carousel
- Click "View All Voyages" button

---

### 2. **Voyages Page**
- You'll see all 4 available voyages:
  1. Caribbean Paradise
  2. Mediterranean Escape
  3. Alaska Wilderness
  4. Asia Pacific Explorer
- Test the filters:
  - Filter by Duration: 7 nights, 8-14 nights, 14+ nights
  - Filter by Price: Under $1000, $2000, $3000, Above $3000
- Click "Book Now" on any voyage to start booking

---

### 3. **Complete Booking Flow**

#### **Step 1: Voyage Selection** ✅
- All voyages are displayed with:
  - Title and description
  - Departure date
  - Duration
  - Ports of call
  - Starting price
- Click "Select Voyage" button

#### **Step 2: Cabin Selection** ✅
- See 4 cabin types with:
  - Name (Interior, Ocean View, Balcony, Suite)
  - Price per person
  - Available count
  - Max occupancy
- Click "Select" on your preferred cabin

#### **Step 3: Passenger Details** ✅
- Select number of passengers (1-5)
- For each passenger enter:
  - Full Name
  - Date of Birth
  - Passport Number
- Optional: Add special requests
- Click "Next: Payment"

#### **Step 4: Payment** ✅
- Choose payment method:
  - **Card Payment:**
    - Name on Card
    - Card Number (16 digits) - Try: `1234567890123456`
    - Expiry Date
    - CVV (3 digits) - Try: `123`
  
  - **UPI Payment:**
    - UPI ID - Try: `test@okhdfcbank`

- Review booking summary showing:
  - Voyage name
  - Cabin type
  - Number of passengers
  - Total amount
- Click "Pay $XXXX"

#### **Step 5: Confirmation** ✅
- See booking confirmation page with:
  - Voyage details
  - Cabin information
  - Number of passengers
  - Total cost
  - Confirmation date
- Click "View My Bookings" to see your booking

---

### 4. **User Authentication**

#### **Registration** ✅
- Click "My Account" in header
- Click "Register here" link
- Fill in:
  - Full Name
  - Email
  - Password (minimum 6 characters)
- Click "Register"

#### **Login** ✅
- Visit `/my-account`
- Enter email and password
- Click "Login"
- You'll see "Welcome, [Your Name]"

#### **View Bookings** ✅
- After booking, click "View My Bookings"
- See all your bookings with:
  - Booking ID
  - Voyage name
  - Departure date
  - Cabin type
  - Number of passengers
  - Total paid
  - Booking date
  - Status (Confirmed)

#### **Profile Tab** ✅
- Click "Profile" tab in My Account
- View your profile information:
  - Full Name
  - Email
  - Member Since date

#### **Logout** ✅
- Click "Logout" button in header
- You'll be redirected to login page

---

### 5. **Admin Dashboard**

#### **Access Admin Panel** ✅
- Navigate to `/admin` (or add link to header if needed)
- You'll see admin dashboard with 3 tabs

#### **All Bookings Tab** ✅
- See table with all bookings:
  - Booking ID
  - User ID
  - Voyage Name
  - Cabin Type
  - Passengers
  - Total Price
  - Status
  - Booking Date
- Status shown with color coding:
  - Green: Confirmed
  - Yellow: Pending

#### **Voyages Tab** ✅
- See all 4 voyages with:
  - Title
  - Departure date
  - Duration
  - Ports
  - Base price
  - Cabin availability grid showing:
    - Cabin type
    - Price
    - Available count
    - Max occupancy

#### **Statistics Tab** ✅
- View dashboard metrics:
  - Total Bookings count
  - Total Voyages count
  - Total Revenue (sum of all bookings)
  - Total Passengers count
  - Booking Status Distribution:
    - Confirmed count
    - Pending count
    - Cancelled count

---

### 6. **Test Data Persistence**

#### **Save and Refresh** ✅
- Complete a booking
- Refresh the page (F5)
- Go to My Account
- Your booking should still be there
- All form data should be preserved

#### **Test Local Storage** ✅
- Open browser DevTools (F12)
- Go to Application → LocalStorage
- You should see keys:
  - `voyages` - All voyage data
  - `bookings` - All user bookings
  - `currentUser` - Logged-in user
  - `users` - Registered users

---

### 7. **Test Data & Test Credentials**

#### **Test Voyages**
| Voyage | Price | Duration | Ports |
|--------|-------|----------|-------|
| Caribbean Paradise | $1299 | 7 nights | Miami, Nassau, St. Thomas, San Juan |
| Mediterranean Escape | $1899 | 10 nights | Barcelona, Rome, Athens, Istanbul |
| Alaska Wilderness | $999 | 5 nights | Juneau, Ketchikan, Sitka, Glacier Bay |
| Asia Pacific Explorer | $2199 | 14 nights | Singapore, Bangkok, Ho Chi Minh City, Hong Kong |

#### **Test Payment Cards**
- Card Number: `1234567890123456`
- Expiry: Any future date
- CVV: `123`

#### **Test UPI**
- UPI ID: `test@okhdfcbank`
- Or any format: `username@bankname`

#### **Test User Registration**
- Name: John Doe
- Email: john@example.com
- Password: password123

---

### 8. **Filter Testing**

#### **By Duration**
- Select "7 nights or less" → Shows: Caribbean (7), Alaska (5)
- Select "8-14 nights" → Shows: Mediterranean (10)
- Select "More than 14 nights" → Shows: Asia Pacific (14)

#### **By Price**
- Select "Under $1000" → Shows: Alaska ($999)
- Select "Under $2000" → Shows: Caribbean ($1299), Mediterranean ($1899), Alaska ($999)
- Select "Under $3000" → Shows: All except none
- Select "Above $3000" → Shows: None (closest is Asia at $2199)

---

### 9. **Edge Cases to Test**

#### **Validation Tests** ✅
- Try submitting form with empty fields → Should show error
- Try entering invalid card number → Should show error
- Try entering invalid UPI ID (without @) → Should show error
- Try CVV with non-numeric → Should prevent input

#### **Login Tests** ✅
- Try booking without login → Should redirect to login
- Register and then login → Should work
- Logout and try accessing bookings → Should show login form

#### **Data Tests** ✅
- Book multiple voyages → All should appear in My Account
- Check cabin availability decrease after booking → Should update
- Logout and login with different user → Should see only their bookings

---

### 10. **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| Blank page on load | Clear cache and refresh (Ctrl+Shift+R) |
| Bookings not showing | Make sure you're logged in with correct user |
| Payment not processing | Check all fields are filled correctly |
| Filters not working | Check voyage duration/price values match criteria |
| Logout not working | Check browser console for errors |

---

## Application Structure

```
seatravel-Application/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js                    ← Main app with routing
│   ├── voyages.js                ← Initial data
│   ├── pages/
│   │   ├── Home.js              ← Landing page
│   │   ├── Voyages.js           ← Browse all voyages
│   │   ├── Booking.js           ← 5-step booking flow
│   │   ├── MyAccount.js         ← Login/Register/Bookings
│   │   └── Admin.js             ← Dashboard & Analytics
│   ├── components/
│   │   ├── Header.js            ← Navigation
│   │   ├── Footer.js            ← Footer
│   │   ├── VoyageCard.js        ← Voyage display
│   │   ├── CabinSelection.js    ← Cabin selector
│   │   ├── PassengerForm.js     ← Passenger details
│   │   ├── PaymentForm.js       ← Payment processing
│   │   ├── BookingSteps.js      ← Progress indicator
│   │   └── Css/                 ← Stylesheets
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   └── Images/                  ← Images & animations
└── package.json
```

---

## Deployment Notes

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

**Happy Testing! 🚢⛵**

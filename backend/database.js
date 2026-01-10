// backend/database.js
const Database = require('better-sqlite3');
const path = require('path');

// Create/open database
const db = new Database(path.join(__dirname, 'seatravel.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
const initDatabase = () => {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      phone TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Voyages table
  db.exec(`
    CREATE TABLE IF NOT EXISTS voyages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      departure TEXT NOT NULL,
      duration TEXT NOT NULL,
      ports TEXT NOT NULL,
      basePrice DECIMAL(10,2) NOT NULL,
      image TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Cabins table
  db.exec(`
    CREATE TABLE IF NOT EXISTS cabins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      voyageId INTEGER NOT NULL,
      type TEXT NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      available INTEGER NOT NULL,
      maxOccupancy INTEGER NOT NULL,
      FOREIGN KEY (voyageId) REFERENCES voyages(id) ON DELETE CASCADE
    )
  `);

  // Bookings table
  db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      voyageId INTEGER NOT NULL,
      cabinId INTEGER NOT NULL,
      cabinType TEXT NOT NULL,
      passengerCount INTEGER NOT NULL,
      totalPrice DECIMAL(10,2) NOT NULL,
      status TEXT DEFAULT 'Confirmed',
      paymentMethod TEXT,
      bookingDate DATETIME DEFAULT CURRENT_TIMESTAMP,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (voyageId) REFERENCES voyages(id) ON DELETE CASCADE,
      FOREIGN KEY (cabinId) REFERENCES cabins(id) ON DELETE CASCADE
    )
  `);

  // Reviews table
  db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      bookingId INTEGER NOT NULL,
      userId INTEGER NOT NULL,
      voyageId INTEGER NOT NULL,
      rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
      comment TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (bookingId) REFERENCES bookings(id) ON DELETE CASCADE,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (voyageId) REFERENCES voyages(id) ON DELETE CASCADE
    )
  `);

  // Saved bookings (wishlist) table
  db.exec(`
    CREATE TABLE IF NOT EXISTS savedBookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      voyageId INTEGER NOT NULL,
      savedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(userId, voyageId),
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (voyageId) REFERENCES voyages(id) ON DELETE CASCADE
    )
  `);

  // Payments table
  db.exec(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      bookingId INTEGER NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      paymentMethod TEXT NOT NULL,
      transactionId TEXT UNIQUE,
      status TEXT DEFAULT 'Completed',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (bookingId) REFERENCES bookings(id) ON DELETE CASCADE
    )
  `);

  console.log('Database initialized successfully');
};

module.exports = { db, initDatabase };

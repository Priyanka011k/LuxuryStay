const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const cors = require('cors');
require('./database/mongoose.js');


const Booking = require('./database/bookingg.js'); 




const userdata = require('./schema/UserSchema');
const Student = require('./schema/Student'); 

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find(); 
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch students', error: err.message });
  }
});

app.get('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  const rooms = [
    { _id: "1", name: "Deluxe", price: 1500, availability: true },
    { _id: "2", name: "Suite", price: 2500, availability: false }
  ];

  const room = rooms.find(r => r._id === id);

  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }

  res.json(room);
});

app.get('/api/rooms', (req, res) => {
  const rooms = [
    { _id: "1", name: "Deluxe", price: 1500, availability: "available", type: "suite", description: "A spacious deluxe room", amenities: "AC,WiFi,Breakfast" },
    { _id: "2", name: "Standard", price: 1000, availability: "unavailable", type: "standard", description: "Comfortable room for guests", amenities: "Fan,TV" },
    { _id: "3", name: "Executive", price: 2200, availability: "available", type: "deluxe", description: "Premium executive room", amenities: "AC,MiniBar,WiFi" }
  ];

  res.json(rooms);
});

app.get('/api/users', async (req, res) => {
  try {
    const registeredUsers = await userdata.find();
    console.log("Fetched users from DB:", registeredUsers);
    res.json(registeredUsers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});


app.post('/api/bookings', async (req, res) => {
  try {
    const bookingDoc = new Booking(req.body);
    await bookingDoc.save();

    res.status(201).json({
      message: 'Booking created successfully',
      booking: bookingDoc
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create booking', error: err.message });
  }
});








app.post('/api/rooms', (req, res) => {
  const roomData = req.body;
  console.log('Received room data:', roomData);

  res.status(201).json({
    message: 'Room created (mock)',
    room: roomData
  });
});



app.post('/api/students', async (req, res) => {
  const newStudent = req.body;
  console.log('Received new student:', newStudent);

  if (!newStudent.rollno || !newStudent.name || !newStudent.class) {
    return res.status(400).json({
      message: 'Missing required fields: rollno, name, and class',
    });
  }

  try {
    const studentDoc = new Student(newStudent);
    await studentDoc.save();

    res.status(201).json({
      message: 'Student registered successfully',
      student: studentDoc
    });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});


app.post("/register", async (req, res) => {
  try {
    const newUser = new userdata({ ...req.body, source: 'registered' });

    await newUser.save();
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err) {
    console.error("Registration failed:", err);
    res.status(500).json({ error: "Server error during registration" });
  }
});



app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userdata.find({ email, password });

    if (!result || result.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: result[0]
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: 'Server error during login' });
  }
});



// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});














































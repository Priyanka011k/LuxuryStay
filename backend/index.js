const express = require('express');
const app = express();
// const port = 5000;
const PORT = process.env.PORT || 5000;

const cors = require('cors');
require('./database/mongoose.js');
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
    console.log('Login attempt with data:', req.body);
    const { email, password } = req.body;
    const result = await userdata.find({ email:email, password:password });
    console.log('Login result:', result);
    if(result.length == 0){
      res.status(244).json({ message: 'Invalid email or password' });
    }
    else{
      if(result[0].email === email && result[0].password === password){
        res.status(200).json({ message: 'Login successful', user: result[0] });
      }else{
        res.status(288).json({ message: 'Invalid email or password' });
      }

    }
  }
  catch(err){
    console.log(err)
  }
});


// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});













































// const express = require('express')
// const app = express()
// const port = 3500
// const cors = require('cors')
// require('./database/mongoose.js')

// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/api/students', (req, res) => {
//   const students = [
//     { rollno: 1, name: 'Priyanka', class: 'B.Tech' },
//     { rollno: 2, name: 'Avni agrawal', class: 'B.Com' },
//     { rollno: 3, name: 'Anushka Tripathi', class: 'BBA' }
//   ];
//   res.json(students);
// }
// );

// // app.post('/register', (req, res) => {
// //  try{
// //   console.log(req.body);
// //  }catch(e){
// //   console.log(e);
// //  }
  
// // });

// app.post('/api/students', (req, res) => {
//   const newStudent = req.body;
//   console.log('Received new student:', newStudent);

  
//   if (!newStudent.rollno || !newStudent.name || !newStudent.class) {
//     return res.status(400).json({
//       message: 'Missing required fields: rollno, name, and class',
//     });
//   }

  

//   res.status(201).json({
//     message: 'Student registered successfully',
//     student: newStudent
//   });
// });



// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });





 
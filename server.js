const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  // FIX: Remove '/index.html'. Only use Protocol + IP + Port
  origin: 'http://localhost:5500', 
  credentials: true
}));

app.use(express.json());

app.post('/submit', (req, res) => {
  console.log(req.body);

  res.cookie('sessionId', 'abc123', {
    httpOnly: true, // You won't see this in document.cookie, but it's there
    secure: false,   
    sameSite: 'Lax',  
    maxAge: 3600000 // Good practice to set expiry (1 hour here)
  });

  res.json({ message: 'Data received' });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
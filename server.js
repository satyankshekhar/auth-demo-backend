const express = require('express');
const app = express();

// middleware to read JSON body
app.use(express.json());

// POST endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // basic validation
  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required'
    });
  }

  // for now just log (never do this in real apps)
  console.log('Username:', username);
  console.log('Password:', password);

  // response
  res.status(200).json({
    message: 'Login data received',
    user: username
  });
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

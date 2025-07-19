// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route for Hello World
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

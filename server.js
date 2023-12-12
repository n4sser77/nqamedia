const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON requests
app.use(bodyParser.json());

// API endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Log the raw request body
  console.log('Raw request body:', req.body);

  // Log the individual form fields
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Respond to the client (adjust as needed)
  res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
const port=process.env.PORT || 8000

// Define a route that redirects to another link
app.get('/', (req, res) => {
  res.redirect('https://resume-builder-1.onrender.com/'); // Replace 'https://example.com' with the desired link
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

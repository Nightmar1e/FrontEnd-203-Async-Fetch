const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000; // Use your desired port number

app.use(express.json());

app.post('/api/agify', (req, res) => {
  const data = req.body;

  // Save the data to a JSON file
  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let existingData = [];
    if (jsonString) {
      existingData = JSON.parse(jsonString);
    }

    existingData.push(data);

    fs.writeFile('data.json', JSON.stringify(existingData), err => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.json({ message: 'Data stored successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

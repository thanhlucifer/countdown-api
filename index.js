const express = require('express');
const app = express();


app.get('/countdown', (req, res) => {
  const now = new Date(); 
  const endDate = new Date('2027-02-16'); 
  const daysToEnd = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)); 

  const response = {
    schemaVersion: 1,
    label: 'Countdown to end',
    message: `${daysToEnd} days until completion`, 
    color: daysToEnd <= 30 ? 'red' : 'green', 
  };

  res.json(response);
});

// Cổng chạy server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

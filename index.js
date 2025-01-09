const express = require('express');
const app = express();

// API trả về số ngày còn lại
app.get('/countdown', (req, res) => {
  const now = new Date(); // Lấy ngày hiện tại
  const startDate = new Date('2025-02-16'); // Ngày bắt đầu nghĩa vụ
  const endDate = new Date('2027-02-16'); // Ngày kết thúc nghĩa vụ

  const daysToStart = Math.ceil((startDate - now) / (1000 * 60 * 60 * 24));
  const daysToEnd = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));

  res.json({
    start: daysToStart > 0 ? daysToStart : 0, // Ngày còn lại đến lúc bắt đầu
    end: daysToEnd > 0 ? daysToEnd : 0, // Ngày còn lại đến lúc kết thúc
  });
});

// Cổng chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

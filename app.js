const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Default route to test
app.get('/', (req, res) => {
  res.send('Resume API working!');
});

app.use('/api', resumeRoutes);

app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

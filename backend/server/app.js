const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow access from the frontend
app.use(express.json()); // Process JSON data

app.use('/auth', authRoutes); // Routing for authentication processes

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'If you can see this page, you are logged in!', user: req.user });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

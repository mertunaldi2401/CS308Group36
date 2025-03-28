const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey";

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Authorization failed' });

    jwt.verify(token.split(" ")[1], SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;

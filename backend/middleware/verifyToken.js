const jwt = require('jsonwebtoken');
const secretKey = 'secret123';
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

  // Assuming 'secret123' is your actual secret key
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        
        req.user = { userId: decoded.userId }; 
        next();
    });
};

module.exports = authenticateToken;


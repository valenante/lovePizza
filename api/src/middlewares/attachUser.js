// middleware/attachUser.js
import jwt from 'jsonwebtoken';

export const attachUser = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) return next();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        // No hacemos nada, es solo para logs
    }

    next();
};


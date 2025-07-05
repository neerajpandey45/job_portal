const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // ✅ Read from cookies

  if (!token) {
    return res.status(401).json({ error: "No token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Or req.user = decoded
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token is invalid" });
  }
};

module.exports = authenticateToken;

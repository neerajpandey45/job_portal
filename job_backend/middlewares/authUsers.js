const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // e.g. "Bearer <token>"
  // ✅ Check first if the header is missing
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization header missing or malformed" });
  }
  // ✅ Safe split
  const token = authHeader.split(" ")[1];
console.log("Authorization Header:", authHeader);
console.log("Extracted Token:", token);
  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("✅ Decoded JWT:", decoded);
    // req.userId = decoded.userId; // or req.user = decoded;
    req.user=decoded;
    req.userId = decoded.userId; 
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token is invalid or expired" });
  }
};
module.exports = authenticateToken;

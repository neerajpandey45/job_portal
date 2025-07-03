const jwt = require("jsonwebtoken");

const authRecruiter = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("No token in cookies");
    return res.status(401).json({ error: "No token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.recruiterId = decoded.recruiterId;
    next();
  } catch (err) {
    console.log("Invalid token");
    res.status(401).json({ error: "Token is invalid" });
  }
};

module.exports = authRecruiter;

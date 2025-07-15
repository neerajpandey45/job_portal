const jwt = require("jsonwebtoken");
const authRecruiter = (req, res, next) => {
  const authHeader=req.headers["authorization"];
  if(!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json({msg:"aouthorization in not valid"})
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("authorization",authHeader);
    console.log("recruiter authentication token",token);
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

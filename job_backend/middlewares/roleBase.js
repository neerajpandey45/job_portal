const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role; // use decoded info from authenticateToken
console.log("🔐 Role from req.user:", req.user?.role);

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: "Access denied:" });
    }

    next();
  };
};
module.exports=authorizeRoles;

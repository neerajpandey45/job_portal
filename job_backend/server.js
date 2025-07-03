// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const recruiterRoute=require("./routes/recruiter");
const jobRoute=require("./routes/jobPost");
const cookieParser=require("cookie-parser");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: "http://localhost:3000", // Your frontend domain
  credentials: true, // 👈 allows cookies to be sent from frontend
}));
app.use(express.json());
app.use(cookieParser()); 
// Routes
app.use("/api/users", userRouter);
app.use("/api/recruiters",recruiterRoute);
app.use("/api/jobs",jobRoute);

// Connect DB and Start Server
connectMongoDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

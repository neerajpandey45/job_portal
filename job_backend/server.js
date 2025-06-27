// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// Connect DB and Start Server
connectMongoDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

// server.js
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/users/user");
const recruiterRoute=require("./routes/recruiters/recruiter");
const jobRoute=require("./routes/jobPost/jobPost");
const allJobsRoutes=require("./routes/allJobs/allJob");
const appliedJobRoutes=require("./routes/appliedJob/appliedJob");
const allRecruiterApplications=require("./routes/recruiterARoutes/applicationRoutes");
const allRecruiter=require("./routes/admin/adminRoutes");
const allUsers=require("./routes/admin/adminRoutes");
const forgotPassword=require("./routes/userPassword/forgotPassword");
const resumeRoutes=require("./routes/resume/resume");
const imageRoutes=require("./routes/profileImages/profileImageRoutes");
// const jobDeleteRoute=require("./routes/")
const cookieParser=require("cookie-parser");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:3000",
  "http://192.168.47.43:3000", // ✅ your laptop's IP (accessed by mobile)
];
// Middlewares
app.use(cors({
  origin: allowedOrigins, // Your frontend domain
  // credentials: true, // 👈 allows cookies to be sent from frontend
  allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express.json());
app.use(cookieParser()); 
// Routes
app.use("/api/users", userRouter);//for user 
app.use("/api/recruiters",recruiterRoute);//for recruiter
app.use("/api/jobs",jobRoute); // for jobs posting
app.use("/api/alljobs",allJobsRoutes); // for see all posted job
app.use("/api/applied-jobs",appliedJobRoutes); // for user can show their applied jobs
app.use("/api/recruiters/applications",allRecruiterApplications); // recruiter see users application on their jobs
app.use("/api/recruiter/delete",jobRoute);// for delete job
app.use(
  "/uploads/resumes",
  express.static(path.join(__dirname, "middlewares/uploads/resumes"))
);
app.use( "/middlewares/uploads/profileImages", express.static(path.join(__dirname, "middlewares/uploads/profileImages")));
app.use("/api/admin",allRecruiter);
app.use("/api/admin",allUsers);
app.use("/api/users",forgotPassword);
app.use("/api/resume",resumeRoutes);
app.use("/api/uploads",imageRoutes);
// Connect DB and Start Server
app.get("/api/ping", (req, res) => {
  res.send("✅ Mobile can reach backend");
});
connectMongoDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT,'0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

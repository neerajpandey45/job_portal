// server.js
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
//for users 
const userRouter = require("./routes/users/user");
const allJobsRoutes=require("./routes/allJobs/allJob");
const appliedJobRoutes=require("./routes/appliedJob/appliedJob");
const imageRoutes=require("./routes/profileImages/profileImageRoutes");
const resumeRoutes=require("./routes/resume/resume");
const filterRoutes=require("./routes/allJobs/allJob");
const forgotPassword=require("./routes/userPassword/forgotPassword");

//for recruiter...........
const recruiterRoute=require("./routes/recruiters/recruiter");
const jobRoute=require("./routes/jobPost/jobPost");
const allRecruiterApplications=require("./routes/recruiterARoutes/applicationRoutes");
// for admin
const allUsers=require("./routes/admin/adminRoutes");
const cookieParser=require("cookie-parser");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "https://job-portal-theta-lemon.vercel.app"
  //  origin: "https://job-portal-theta-lemon.vercel.app"// your frontend URL
  // "http://localhost:3000",
  // "http://10.233.38.43:3000", // ✅ your laptop's IP (accessed by mobile)
];
// Middlewares
app.use(cors({
  origin: allowedOrigins, // Your frontend domain
  credentials: true, // 👈 allows cookies to be sent from frontend
  allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express.json());
app.use(cookieParser()); 

//  Routes for users 
app.use("/api/users", userRouter);//for user 
app.use("/api/alljobs",allJobsRoutes); // for user  see all posted job 
app.use("/api/applied-jobs",appliedJobRoutes); // for user can show their applied jobs
app.use("/api/users",forgotPassword);// user can reset their password 
// for profile pic upload
// app.use( "/middlewares/uploads/profileImages", express.static(path.join(__dirname, "middlewares/uploads/profileImages")));
app.use( "/profileImages", express.static(path.join(__dirname, "middlewares/uploads/profileImages")));

app.use("/api/uploads",imageRoutes);//user can upload their profile pic
// for resume upload on job form
app.use(
  "/uploads/resumes",
  express.static(path.join(__dirname, "middlewares/uploads/resumes"))
);
app.use("/api/resume",resumeRoutes);// users resume path for apply job
app.use("/api/filter",filterRoutes);// user can search job by jobtitle and location
// for recuiter 
app.use("/api/recruiters",recruiterRoute);//for recruiter login 
app.use("/api/jobs",jobRoute); // for jobs posting and recruiter can see their posted all jobs
app.use("/api/recruiters/applications",allRecruiterApplications); // recruiter see users application on their jobs
app.use("/api/recruiter/delete",jobRoute);// for delete job
//for admin
app.use("/api/admin",allUsers);

// Connect DB and Start Server
connectMongoDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT,'0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

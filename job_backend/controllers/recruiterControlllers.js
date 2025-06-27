const Recruiter=require("../models/recruiter");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

exports.createRecruiter= async (req,res)=>{
    try{
        const {email,password}=req.body;
    //validation
    if(!email||!password){
        return res.status(400).json({erro:"invaid username or password"});

    }
     const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return res.status(400).json({erro:"Invalid email format"});
  }
  const existingRecruiter=await Recruiter.findOne({email});
  return res.status(400).json({error:"recuiter already exits"});
  const hashedPassword=await bcrypt.hash(password,10);
  const newUser=new Recruiter({email,password});
  await newUser.save();
  
    const userWithoutPassword = { ...newUser.toObject() };
    delete userWithoutPassword.password;

    res.status(201).json(userWithoutPassword);
    } catch(err){
 console.error("create use erroe",err);
    if(err.name==="validationError"){
      return res.status(400).json({error:err.message});
    }
    res.status(500).json({error:"server error"})
    }
    
}
const Recruiter=require("../../models/recruiters/recruiter");
const User=require("../../models/users/user");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllrecruiter=async(req,res)=>{
  try{
    const allRecruiter= await Recruiter.find();
    // console.log(allRecruiter);
    res.json(allRecruiter);
  }catch(err){
    // console.log("error",err);
     res.status(500).json({ error: err.message });
  }
}

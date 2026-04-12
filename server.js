const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

/* ================= DB ================= */
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* ================= USER MODEL ================= */
const UserSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  userId:String
});

const User = mongoose.model("User",UserSchema);

/* ================= SECRET MODEL ================= */
const SecretSchema = new mongoose.Schema({
  userId:String,
  text:String,
  image:String,
  isPublic:Boolean,
  date:{type:Date,default:Date.now}
});

const Secret = mongoose.model("Secret",SecretSchema);

/* ================= AUTH ================= */
app.post("/signup", async(req,res)=>{
  try{
    const {name,email,password} = req.body;

    const hash = await bcrypt.hash(password,10);

    const userId = name+"@mysecretbook";

    const user = new User({name,email,password:hash,userId});
    await user.save();

    res.json({msg:"Signup success",userId});
  }catch(err){
    res.status(500).json(err);
  }
});

app.post("/login", async(req,res)=>{
  try{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(400).json({msg:"User not found"});

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({msg:"Wrong password"});

    const token = jwt.sign({id:user._id}, "secretkey");

    res.json({token,user});
  }catch(err){
    res.status(500).json(err);
  }
});

/* ================= SECRET ================= */
app.post("/add-secret", async(req,res)=>{
  const {userId,text,image,isPublic} = req.body;

  const secret = new Secret({userId,text,image,isPublic});
  await secret.save();

  res.json({msg:"Saved"});
});

app.get("/my-secrets/:id", async(req,res)=>{
  const data = await Secret.find({userId:req.params.id});
  res.json(data);
});

/* ================= ADMIN ================= */
app.get("/admin/users", async(req,res)=>{
  const users = await User.find();
  res.json(users);
});

app.get("/admin/secrets", async(req,res)=>{
  const secrets = await Secret.find();
  res.json(secrets);
});

app.delete("/admin/delete-user/:id", async(req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
});

/* ================= RUN ================= */
app.listen(5000,()=>{
  console.log("Server running on 5000");
});

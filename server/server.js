// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./Model/UserModel');
const admin = require('./Model/AdminModel');
const JobPost = require('./Model/JobListingModel');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


app.use(cors());

// Connecting database
mongoose
  .connect("mongodb+srv://Anirudh:EDYgozpzdngy0SET@cluster0.tiqw0t7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log('Connection interrupted: ' + err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', async (req, res) => {
  try {
    // Create a new user object with the data from the request body
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      password: req.body.password,
      skills: req.body.skills,
      college: req.body.college,
      stream: req.body.stream
    });

    // Save the new user object to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the saved user data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// const newAdmin = new admin({
//   name : "Anirudh9094",
//   email : "Anirudhkulkarni9094@gmail.com",
//   phoneNumber : 78994164991,
//   password: "Anirudh1234",
//   companyName : "Anz",
//   role : "Front end developer",
// })

// newAdmin.save()




let AdminAuth = false
let UserAuth = false;
const userAuthMiddleware = (req, res, next) => {
  if (UserAuth) {
    // If UserAuth is true, allow the request to proceed to the route handler
    next();
  } else {
    // If UserAuth is false, respond with an error indicating unauthorized access
    res.status(403).json({
      success: false,
      message: 'Unauthorized access'
    });
  }
};

app.post('/User-login' , async (req,res)=>{
  const {email,password}= req.body;
  try{
    const foundUser = await user.findOne({email});
    if(foundUser){
      const isPasswordValid = await bcrypt.compare(password, foundUser.password);
      if(isPasswordValid){
          UserAuth  = true;
          console.log("logged in successfull")
          res.status(200).json({
            success: true,
            message: 'Login successful'
          })
      }
      else{
        UserAuth  = false;
          res.status(200).json({
            success: false,
            message: 'password is wrong!'
          })
      }
    }
    else {
      // Set auth to false if user is not found
      UserAuth  = false;

      res.status(200).json({
        success: false,
        message: 'Email not found'
      });
    }
  }
  catch(err){
    console.log(err);
  }
})

app.post('/logout', (req, res) => {
  UserAuth = false;
  AdminAuth = false;
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});

app.post('/Admin-login', async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    const foundAdmin = await admin.findOne({ email });
    if (foundAdmin) {
      // Compare the input password with the hashed password from the database
      const isPasswordValid = await bcrypt.compare(password, foundAdmin.password);
      if (isPasswordValid) {
        // Set auth to true if login is successful
        AdminAuth = true;
        res.status(200).json({
          success: true,
          message: 'Login successful'
        });
      } else {
        // Set auth to false if password is incorrect
        AdminAuth = false;
        res.status(200).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
    } else {
      // Set auth to false if user is not found
      AdminAuth = false;
      res.status(200).json({
        success: false,
        message: 'Email not found'
      });
    }
  } catch (err) {
    console.error(err);
    // Set auth to false in case of any error
    AdminAuth = false;
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// User.create({
//   "name" :"Anirdh",
//   "email" : "Anirudhkulkarni9094@gmail.com",
//   "phonenumber"  : 7899416499,
//   "password" : "Anirudh9094",
//   "skills" : "HTML CSS",
//   "college" : "BIT",
//   "stream" : "EIE" 
// })

app.post('/post-jobs',  (req,res)=>{
  const  {jobId, role, companyName, location, salary, description, requirement} = req.body;
  try{
  JobPost.create(req.body);
  console.log(req.body);
  res.status(200).json({
    message: "Job Posted successfully"
  })
  }
  catch(err){
    res.status(201).json({
      message: "cannot post job"
    })
  }
})

app.get('/showJobs', userAuthMiddleware, async (req, res) => {
  try {
    const jobs = await JobPost.find({});
    res.status(200).json({
      length: jobs.length,
      message: "Jobs fetched successfully",
      data: jobs
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(3001, () => {
  console.log("App running at port 3001");
});

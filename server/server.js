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
    console.error('Connection error:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Error handling middleware for catching asynchronous errors
const asyncErrorHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Error handling middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Check if the error is a MongoDB validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(422).json({ errors });
  }

  // Handle other types of errors
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Admin login
app.post('/admin-login', asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundAdmin = await admin.findOne({ email });

    if (foundAdmin) {
      const isPasswordValid = await bcrypt.compare(password, foundAdmin.password);

      if (isPasswordValid) {
        // Set auth to true if login is successful
        res.status(200).json({
          success: true,
          message: 'Login successful'
        });
      } else {
        // Set auth to false if password is incorrect
        res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
    } else {
      // Set auth to false if admin is not found
      res.status(404).json({
        success: false,
        message: 'Email not found'
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}));

// User login
app.post('/user-login', asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });

    if (foundUser) {
      const isPasswordValid = await bcrypt.compare(password, foundUser.password);

      if (isPasswordValid) {
        // Set auth to true if login is successful
        res.status(200).json({
          success: true,
          message: 'Login successful'
        });
      } else {
        // Set auth to false if password is incorrect
        res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
    } else {
      // Set auth to false if user is not found
      res.status(404).json({
        success: false,
        message: 'Email not found'
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}));

// Post jobs
app.post('/post-jobs', asyncErrorHandler(async (req, res) => {
  const { jobId, role, companyName, location, salary, description, requirement } = req.body;
  try {
    const jobPost = new JobPost({
      jobId,
      role,
      companyName,
      location,
      salary,
      description,
      requirement
    });

    await jobPost.save();

    res.status(201).json({
      success: true,
      message: "Job Posted successfully"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred while posting the job"
    });
  }
}));

// Show jobs
app.get('/show-jobs', asyncErrorHandler(async (req, res) => {
  try {
    const jobs = await JobPost.find({});
    res.status(200).json({
      success: true,
      length: jobs.length,
      message: "Jobs fetched successfully",
      data: jobs
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching jobs"
    });
  }
}));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

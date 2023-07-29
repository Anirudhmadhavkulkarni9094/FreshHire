import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/Login/AdminLogin';
import JobPostingsList from './components/JobPostingsList';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import PostJobs from './components/PostJobs';
import UserLogin from './components/Login/UserLogin';
import MainSignUp from './components/SignUp.js/MainSignUp';
import StudentCard from './components/StudentCard'
import axios from 'axios';

function App() {
 
  const [Adminauth, setAdminAuth] = useState(false);
  const [Userauth, setUserAuth] = useState(false);

  const handleAdminAuth = (isAuthenticated) => {
    setAdminAuth(isAuthenticated);
  };

  
  const handleUserAuth = (isAuthenticated) => {
    setUserAuth(isAuthenticated);
  };

    
  
    // ...
  
    const handleAuth = () => {
      axios.post('http://localhost:3001/logout')
        .then((response) => {
          console.log(response.data); // Optional: Handle the server response if needed
          setUserAuth(false);
          setAdminAuth(false);
            // Redirect to the home page after logging out
            window.location.href = "/";
        })
        .catch((error) => {
          console.error(error); // Handle errors if any
        });
        
    };
  
    // ...
  
  return (
    <Router>
      <div className='m-auto'>
        <NavBar adminAuth = {Adminauth} userAuth={Userauth} handleAuth = {handleAuth}/>
        {/* <PostJobs></PostJobs> */}
        <Switch>
        <Route path='https://main--freshire.netlify.app/Sign-Up'>
            <MainSignUp/>
          </Route>
          <Route path='https://main--freshire.netlify.app/admin-login'>
            <AdminLogin onHandle={handleAdminAuth}  title = 'Admin'/>
          </Route>
          <Route path='https://main--freshire.netlify.app/Post-Job'>
            <PostJobs Authorization = {Adminauth}/>
          </Route>
          <Route path='https://main--freshire.netlify.app/User-login'>
            <UserLogin  onHandle={handleUserAuth}  title = 'User'/>
          </Route>
          <Route path='https://main--freshire.netlify.app/full-job'>
            <JobPostingsList />
          </Route>
          <Route path='/Hire-talent'>
            <StudentCard></StudentCard>
          </Route>
          {/* Default route */}
          <Route path='https://main--freshire.netlify.app/Home'>
            <Home/>
          </Route>
          <Route exact path='https://main--freshire.netlify.app/'>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

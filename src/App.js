import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard1 from './COMPONENTS/dashboard/Dashboard';
import SignUp from './Login/Signup.js';
import SignInSide from './Login/SignIn.js';
import AdminLogin from './Login/AdminLogin.js';
import Blog from './blog/Blog';
import AboutPage from './blog/About/About';
import FeedbackForm from './Feedback/form';
import Submissions from './Feedback/submissions';
import Welcome from './welcome/Blog';
import Chatbot from './Chatbot'; // Import the Chatbot component
import Leaderboard from './COMPONENTS/LeaderBoard/LeaderBoard';
import {firebase} from './config.js';
import { useState,useEffect } from 'react';

function App() {
  const [initializing,setInitializing] =useState(true);
  
  const [user,setUser]=useState();
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber =firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if(initializing) return null;
  if(!user){
    return(
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Admin" element={<AdminLogin />} />
      
      </Routes>
    );
  }
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Blog />} />
         <Route path="/AdminDashBoard" element={<Dashboard1 />} />
         <Route path="/About" element={<AboutPage />} />
         <Route path="/FeedBack" element={<FeedbackForm/>} />
         <Route path="submissions" element={<Submissions />} />
         <Route path="submission/:id" element={<Submissions/>} />
         <Route path="/LeaderBoard" element={<Leaderboard/>} /> 
         <Route path="/Chat" element={<Chatbot />} /> {/* Add a route for the chat */}
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Sign" element={<SignInSide />} />
//         <Route path="/Admin" element={<AdminLogin />} />
//         <Route path="/AdminDashBoard" element={<Dashboard1 />} />
//         <Route path="/Home" element={<Blog />} />
//         <Route path="/About" element={<AboutPage />} />
//         <Route path="/FeedBack" element={<FeedbackForm/>} />
//         <Route path="submissions" element={<Submissions />} />
//         <Route path="submission/:id" element={<Submissions/>} />
//         <Route path="/LeaderBoard" element={<Leaderboard/>} />

        
 
//         <Route path="/Chat" element={<Chatbot />} /> {/* Add a route for the chat */}
//         {/* <Route path="/" element={<ComplaintForm/>} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;
export default App;
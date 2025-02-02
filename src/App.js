import React, { useState ,useEffect } from "react";
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import Login from './components/auth/Login';
import Dashboard from "./components/dashboard/Dashboard";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB9b2mFFAYazaCjGB1Wn-qrk9xSUYmjUU",
  authDomain: "profile-bio.firebaseapp.com",
  projectId: "profile-bio",
  storageBucket: "profile-bio.firebasestorage.app",
  messagingSenderId: "220780267310",
  appId: "1:220780267310:web:3a6a1d31817865cd259cbf",
  measurementId: "G-TFKJ6VDJ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  console.log("user!!!!", user)

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="App">
      <h1> Profile Bio</h1>
      {!user ? (<Login auth={auth} />) : <Dashboard handleLogout={handleLogout}/>}
    </div>
  );
}

export default App;

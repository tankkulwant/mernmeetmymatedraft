import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';  // Import the signInWithPopup function

const Register = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)  // Pass the auth and provider instances to the function
      .then((result) => {
        console.log(result.user);
        // Handle successful sign-in here, such as saving user data to MongoDB
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <button onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Register;
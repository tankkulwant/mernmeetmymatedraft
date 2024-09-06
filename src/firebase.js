// Import the necessary functions from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUyaPlg0tgOeLHcWEpsrNCtVifDCpWdC0",
    authDomain: "meetmymate-ba914.firebaseapp.com",
    projectId: "meetmymate-ba914",
    storageBucket: "meetmymate-ba914.appspot.com",
    messagingSenderId: "1035887141264",
    appId: "1:1035887141264:web:66bf420f67d5cbc3079315",
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

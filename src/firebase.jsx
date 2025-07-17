import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmPvY6OSDy5VN5Xs9q3U00Jso00bCqaWw",
  authDomain: "real-estate-app-2b881.firebaseapp.com",
  projectId: "real-estate-app-2b881",
  storageBucket: "real-estate-app-2b881.firebasestorage.app",
  messagingSenderId: "408937378907",
  appId: "1:408937378907:web:5dc708d0bef6235a4f3b7e",
  measurementId: "G-71365E0FTB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


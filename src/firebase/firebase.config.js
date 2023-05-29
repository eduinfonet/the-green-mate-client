import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2zFFeo0u6P4_-w3smgT4AbY_0b8ee1RQ",
  authDomain: "the-green-mate-client.firebaseapp.com",
  projectId: "the-green-mate-client",
  storageBucket: "the-green-mate-client.appspot.com",
  messagingSenderId: "43374917997",
  appId: "1:43374917997:web:55c6607fdf3f6c6a210264",
};

const app = initializeApp(firebaseConfig);
export default app;

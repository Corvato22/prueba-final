// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCudHjaNBoEyQljZKAm8xHNzMEVs_0YhUo",
    authDomain: "prueba-final-a13a4.firebaseapp.com",
    projectId: "prueba-final-a13a4",
    storageBucket: "prueba-final-a13a4.appspot.com",
    messagingSenderId: "566133304013",
    appId: "1:566133304013:web:584f0f3d0e165218711784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
// Configuración de authentication
export {
    app,
    google,
}
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCskaRVjwpdPO3hTp60aEhwI33LdlSn-ls",
  authDomain: "meteo-4664e.firebaseapp.com",
  projectId: "meteo-4664e",
  storageBucket: "meteo-4664e.appspot.com",
  messagingSenderId: "692162618321",
  appId: "1:692162618321:web:b42d73ea7f348efdc036f0",
  measurementId: "G-3G8QBP19BN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export { auth };
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:             process.env.REACT_APP_FB_apiKey,
  authDomain:         process.env.REACT_APP_FB_authDomain,
  projectId:          process.env.REACT_APP_FB_projectId,
  storageBucket:      process.env.REACT_APP_FB_storageBucket,
  messagingSenderId:  process.env.REACT_APP_FB_messagingSenderId,
  appId:              process.env.REACT_APP_FB_appId,
  measurementId:      process.env.REACT_APP_FB_measurementId
};

const isConfigValid = Object.values(firebaseConfig).every(value => value);

let analytics = null;

if (isConfigValid) {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
} else {
  console.error("Firebase configuration is incomplete. Please check your environment variables.");
}

const firebaseExports = { analytics };

export default firebaseExports;
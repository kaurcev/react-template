import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/* 
    Чтобы настроить Firebase, необходимо перейти на console.firebase.google.com
    и там создать приложени типа "web", после чего настройки конфигурации будут доступны
*/
const firebaseConfig = {
  apiKey: "-1",
  authDomain: "-1",
  projectId: "-1",
  storageBucket: "-1",
  messagingSenderId: "-1",
  appId: "-1",
  measurementId: "-1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_YBQTfiW8WM1lUDWQdOF7YOAHDIDkpUU",

  authDomain: "chatapp-7affa.firebaseapp.com",

  projectId: "chatapp-7affa",

  storageBucket: "chatapp-7affa.appspot.com",

  messagingSenderId: "199043770656",

  appId: "1:199043770656:web:51d9b66b683e1108e9cf45",

  measurementId: "G-XNQ1YCHMGR",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

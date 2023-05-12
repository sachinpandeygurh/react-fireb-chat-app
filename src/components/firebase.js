// import firebase from 'firebase/app'
// import "firebase/auth"

  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "REACT_APP_CHAT_ENGINE_FIREBASE_apiKey",
    authDomain: "REACT_APP_CHAT_ENGINE_FIREBASE_authDomain",
    projectId: "REACT_APP_CHAT_ENGINE_FIREBASE_projectId",
    storageBucket: "REACT_APP_CHAT_ENGINE_FIREBASE_storageBucket",
    messagingSenderId: "REACT_APP_CHAT_ENGINE_FIREBASE_messagingSenderId",
    appId: "REACT_APP_CHAT_ENGINE_FIREBASE_appId"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

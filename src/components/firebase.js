// import firebase from 'firebase/app'
// import "firebase/auth"

  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_CHAT_ENGINE_FIREBASE_appId
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

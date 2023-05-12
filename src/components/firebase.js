// import firebase from 'firebase/app'
// import "firebase/auth"

  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhP0opk7opcg1Pvkrf_onUiJtN-1bfkiM",
    authDomain: "chat-app-a132d.firebaseapp.com",
    projectId: "chat-app-a132d",
    storageBucket: "chat-app-a132d.appspot.com",
    messagingSenderId: "88237167318",
    appId: "1:88237167318:web:ee853ae79dcdf362e5af77"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

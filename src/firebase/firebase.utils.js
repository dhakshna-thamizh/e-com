import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';  

const config = {
    apiKey: "AIzaSyA0Idhlnw6K4hao5D2eEM1Q0HQ-XrqfjUY",
    authDomain: "crwn-db-afe4e.firebaseapp.com",
    databaseURL: "https://crwn-db-afe4e.firebaseio.com",
    projectId: "crwn-db-afe4e",
    storageBucket: "crwn-db-afe4e.appspot.com",
    messagingSenderId: "81478035317",
    appId: "1:81478035317:web:08199e7b559a25c218d53c",
    measurementId: "G-HNVPJB03JK"
}; 

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBX6_afFLPYvJ8Gr9FleqGx0UQzTNJ0E28",
    authDomain: "linkedin-clone-a80b1.firebaseapp.com",
    projectId: "linkedin-clone-a80b1",
    storageBucket: "linkedin-clone-a80b1.appspot.com",
    messagingSenderId: "809950824454",
    appId: "1:809950824454:web:fd091cef8217776e385b87",
    measurementId: "G-RDG5C3KGYW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const mAuth = firebase.auth();

export { database, mAuth };
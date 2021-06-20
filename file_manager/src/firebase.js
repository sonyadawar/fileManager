import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app =firebase.initializeApp( {
    apiKey: "AIzaSyAFXCdqiyENZ4gib5EPmEg0QuJ91qu0g8I",
    authDomain: "filemanager-5d41e.firebaseapp.com",
    projectId: "filemanager-5d41e",
    storageBucket: "filemanager-5d41e.appspot.com",
    messagingSenderId: "839134032344",
    appId: "1:839134032344:web:9fd9938dd17d66447f82ad",
    measurementId: "G-KFCC7JZZ66"
  });


const firestore=app.firestore()
const database={
  folders:firestore.collection('folders'),
  files: firestore.collection("files"),
  getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}
const auth=app.auth()
export {auth,database}
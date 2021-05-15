import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBSjhEyBuE8vy0OebwIZ-tt4ibLgTZt65Y",
    authDomain: "cloth-store-a000d.firebaseapp.com",
    projectId: "cloth-store-a000d",
    storageBucket: "cloth-store-a000d.appspot.com",
    messagingSenderId: "1073854439236",
    appId: "1:1073854439236:web:164547defce92fc1f4c111",
    measurementId: "G-QWD0VN5W6S"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore =  firebase.firestore();

export const createUserProfile = async (userAuth, ...otherdata)=>{
  if(!userAuth)return
  
  console.log(userAuth.uid)
  const userRef =fireStore.doc(`users/${userAuth.uid}`);
  const sanpshot = await userRef.get();
  console.log('sanpshot', sanpshot)


  if(!sanpshot.exist){
    const {email,displayName} = userAuth;
    const created= new Date();

    try{
      await userRef.set({
        displayName,
        email,
        created,
        ...otherdata
      })
    }catch(err){
      console.log('Error creating new user >>>', err.message)
    }
  }
  return userRef;
}


const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle= ()=> auth.signInWithPopup(provider);

export default firebase;


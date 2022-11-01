import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDh9AyGm_cQdbGj3SHYA0RU8PikQK5aB4g',
  authDomain: 'emma-invites.firebaseapp.com',
  projectId: 'emma-invites',
  storageBucket: 'emma-invites.appspot.com',
  messagingSenderId: '881341753181',
  appId: '1:881341753181:web:1aca89d252c91b6eaa6ab4',
  measurementId: 'G-2JFZ16V3RQ',
};

export let app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const phoneAuth = new firebase.auth.PhoneAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

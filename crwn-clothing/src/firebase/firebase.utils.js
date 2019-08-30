import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCbnJ9W9vlyIRpInjxFFp5RNfAd2rBSNRc',
  authDomain: 'crwn-db-f3871.firebaseapp.com',
  databaseURL: 'https://crwn-db-f3871.firebaseio.com',
  projectId: 'crwn-db-f3871',
  storageBucket: '',
  messagingSenderId: '447554762164',
  appId: '1:447554762164:web:cfed8226248eea1b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

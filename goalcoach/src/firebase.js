import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBxg3HH4VN2WimAUYmhiK4rgoEvPotEiCY", // access firebase
    authDomain: "goalcoach-4e207.firebaseapp.com", // hosts all our authenticated users
    databaseURL: "https://goalcoach-4e207.firebaseio.com",
    projectId: "goalcoach-4e207",
    storageBucket: "",
    messagingSenderId: "1086024273754"
  };
  
export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals') // create node 'goals' key
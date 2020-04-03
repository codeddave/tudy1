import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSIvUTG81_w4M0eESfCENI7I4thDjDcoc",
  authDomain: "reactauth-c01ab.firebaseapp.com",
  databaseURL: "https://reactauth-c01ab.firebaseio.com",
  projectId: "reactauth-c01ab",
  storageBucket: "reactauth-c01ab.appspot.com",
  messagingSenderId: "754380836520",
  appId: "1:754380836520:web:5b8a084cace900b8527c9d"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

import firebaseApp from "./firebase";
import Firebase from "firebase";

var provider = new Firebase.auth.GoogleAuthProvider();
provider.addScope('email');

export default () => firebaseApp.auth().signInWithPopup(provider);
import firebase from "firebase"
import firebaseConfig from "./../firebase.config.json";

let app = firebase.initializeApp(firebaseConfig);

app.analytics();

export default app;
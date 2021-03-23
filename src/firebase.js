import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0OPbWHhYDQkeLBXucLXcQoVCBwVHIsrE",
  authDomain: "chat-app-da935.firebaseapp.com",
  projectId: "chat-app-da935",
  storageBucket: "chat-app-da935.appspot.com",
  messagingSenderId: "165611957165",
  appId: "1:165611957165:web:707f8f893bd49980150f24",
  measurementId: "G-92EWVRGTPH"
})

export const auth = app.auth()
export default app
import FireBase from 'firebase'
let config = {
  apiKey: 'AIzaSyBENt_-nniekbneiNYyj6X24tC2aNiBGuw',
  authDomain: 'cs5520-finalproject.firebaseapp.com',
  databaseURL: 'https://cs5520-finalproject-default-rtdb.firebaseio.com',
  projectId: 'cs5520-finalproject',
  storageBucket: 'cs5520-finalproject.appspot.com',
  messagingSenderId: '467099846011',
  appId: '1:467099846011:web:1f8ace35044c70371129de',
  measurementId: 'G-HHNKGELT33',
}

let app = FireBase.initializeApp(config)
export const db = app.database()

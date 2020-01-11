import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBzOuG9p_DHxdNFEBLbE2KwSU6ox11aWHQ',
  authDomain: 'one-day-a-time.firebaseapp.com',
  databaseURL: 'https://one-day-a-time.firebaseio.com',
  projectId: 'one-day-a-time',
  storageBucket: 'one-day-a-time.appspot.com',
  messagingSenderId: '639367504005',
  appId: '1:639367504005:web:50af43dafa1aefb044c9ec',
  measurementId: 'G-YLGFPQ3YF1'
}

firebase.initializeApp(config)

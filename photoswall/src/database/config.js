import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrsyME8Ouc-JtvJKHUiPt2WxgKWXMyz3E",
    authDomain: "photowall-93153.firebaseapp.com",
    databaseURL: "https://photowall-93153-default-rtdb.firebaseio.com",
    projectId: "photowall-93153",
    storageBucket: "photowall-93153.appspot.com",
    messagingSenderId: "287594730881",
    appId: "1:287594730881:web:fe00791cf865ce3ac88480"
};
  
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}
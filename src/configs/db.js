import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCasoQbRX_Yif0WOIruvZeqK8tU3zi-gvQ",
    authDomain: "doctorapprepo.firebaseapp.com",
    databaseURL: "https://doctorapprepo.firebaseio.com",
    projectId: "doctorapprepo",
    storageBucket: "doctorapprepo.appspot.com",
    messagingSenderId: "5607623637"
};
firebase.initializeApp(config);

export default firebase;
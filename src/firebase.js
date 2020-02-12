import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBaEbSJIM28AgreodALGJFWDVRVI0tJlQE",
    authDomain: "e-commerce-67609.firebaseapp.com",
    databaseURL: "https://e-commerce-67609.firebaseio.com",
    projectId: "e-commerce-67609",
    storageBucket: "e-commerce-67609.appspot.com",
    messagingSenderId: "889476473607",
    appId: "1:889476473607:web:01da29974857451bd7dba2",
    measurementId: "G-55B8RXH7YY"
};

const fire = firebase.initializeApp(config);

export default fire
import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBemxUzvVe04ZJ277mbwdTWT0fC_m70fhs",
        authDomain: "class-69-project.firebaseapp.com",
        projectId: "class-69-project",
        storageBucket: "class-69-project.appspot.com",
        messagingSenderId: "279833362157",
        appId: "1:279833362157:web:c21e6131b474c239cc96e4"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
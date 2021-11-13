
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDa_m_txYoA-MJMNDxDvKPRNEvLAtV5mG8",
      authDomain: "kwitterroom-704e3.firebaseapp.com",
      databaseURL: "https://kwitterroom-704e3-default-rtdb.firebaseio.com",
      projectId: "kwitterroom-704e3",
      storageBucket: "kwitterroom-704e3.appspot.com",
      messagingSenderId: "1025792671231",
      appId: "1:1025792671231:web:4be886c71ca39dce2e7bca"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

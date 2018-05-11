  $(document).ready(function(){
    
    $(document.body).on("click", "#submitAuth", function() {

        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
    
    console.log(email + password)

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(error.message);
        localStorage.setItem("user", email);
      });

      

    });



    //    Initialize Firebase
       var config = { 
        apiKey: "AIzaSyCYkK09jL1mtsfaVCCM-p1QI9CVHx89tNo",
        authDomain: "fridgeforager-40b0c.firebaseapp.com",
        databaseURL: "https://fridgeforager-40b0c.firebaseio.com",
        projectId: "fridgeforager-40b0c",
        storageBucket: "fridgeforager-40b0c.appspot.com",
        messagingSenderId: "709178750655"
        };
        firebase.initializeApp(config);




  });
     

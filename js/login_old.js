var wait = document.getElementById("wait");

var firebaseConfig = {
    apiKey: "AIzaSyAnG5XLuI8fRRsOdo0FJyoelT5F-gC2HbQ",
    authDomain: "moonshinestudiomusic.firebaseapp.com",
    projectId: "moonshinestudiomusic",
    storageBucket: "moonshinestudiomusic.appspot.com",
    messagingSenderId: "116720148312",
    appId: "1:116720148312:web:c6f098393c9c04e2690f2d",
    measurementId: "G-EGDHF02KJ3",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function Register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatedpassword = document.getElementById("passwordrepeated").value;

    if (
        ValidateEmailAddress(email) == false ||
        ValidatePassword(password, repeatedpassword) == false
    ) {
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser;

            var database_ref = database.ref();

            var user_data = {
                email: email,
                last_login: Date.now(),
            };

            database_ref.child("user/" + user.uid).set(user_data);

            wait.remove();
            document.getElementById('result_signup').innerHTML = 'ACCOUNT CREATED';
        })
        .catch(function(error) {
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

function ValidateEmailAddress(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;

    if (expression.test(email) == true) {
        return true;
    } else {
        wait.remove();
        document.getElementById('result_signup').innerHTML = "INVALID EMAIL";
        return false;
    }
}

function ValidatePassword(passwordone, repeated) {
    if (passwordone === repeated) {
        return true;
    } else {
        wait.remove();
        document.getElementById('result_signup').innerHTML = "PASSWORD NOT MATCHED";
        return false;
    }
}
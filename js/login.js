
const auth = firebase.auth();
const database = firebase.database();

function register() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    full_name = document.getElementById('full_name').value;

}


if (validate_email(email) == false || validate_password == false) {
    alert('Email or password is outta!');

}

if (validate_full_name(full_name) == false) {
    alert('One or More Extra field is outta!')
}

auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
    
        let user = auth.currentUser

        let database_ref = database.ref()

        let user_data = {
            email: email,
            full_name: full_name,
            last_login: Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)


        alert('User Created')

    })

    .catch(function (error) {
        let error_code = error.code
        let error_message= error.message  

        alert(error_message)
    })


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_full_name(full_name) {
    if (full_name == null) {
        return false
    }
    
    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
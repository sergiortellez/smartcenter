// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgT7C1AT9AdjU8eHbyS5N3Rp1cCqCluV0",
    authDomain: "pruebasmart-b0fc5.firebaseapp.com",
    databaseURL: "https://pruebasmart-b0fc5.firebaseio.com",
    projectId: "pruebasmart-b0fc5",
    storageBucket: "pruebasmart-b0fc5.appspot.com",
    messagingSenderId: "626947054134"
};
firebase.initializeApp(config);

//primera función que corre, revisa el estado de autentificación y resuelve para los dos posibles casos.
function logged() {
    //si ha ocurrido un cambio en el estado de autentificación resuelve para cualquiera de los dos posibles casos
    function newLoginHappened(user) {

        if (user) {
            //si el usuario existe, quiere decir que ya ha iniciado sesión por lo que llama a la función app() con el parámetro user (provisto por firebase) para hacer los cambios pertinentes
            app(user);
        } else {
            //si el usuario no existe lo redirige a la ventana de login de google.  

            // terminando este proceso exitosamente lanzará la función NewLoginHappened por el listener que tenemos abajo. 
        }
    }
    //listener: espera hasta que ocurra un cambio en el estado de la autentificación y cuando ocurre (o al principio) llama a la función newLoginHappened y le da (o no) un parámetro "user" (provisto por firebase)
    firebase.auth().onAuthStateChanged(newLoginHappened);

}

function logout() {




    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signOut(provider);
    // firebase.auth().updateCurrentUser(user);

}



function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function app(user) {
    //user.displayName
    //user.email
    //user.photoURL
    //user.uid
    document.getElementById("clientName").innerHTML = user.displayName;
    document.getElementById("clientPhoto").setAttribute('src', user.photoURL);
    // document.getElementById("login").classList.replace('d-flex', 'd-none');
    // document.getElementById("logged").classList.replace('d-none', 'd-block');


    var loginClass = document.getElementsByClassName("login");

    for (i = 0; i < loginClass.length; i++) {
        loginClass[i].classList.replace('d-block', 'd-none');
    }

    var loggedClass = document.getElementsByClassName("logged");

    for (i = 0; i < loggedClass.length; i++) {
        loggedClass[i].classList.replace('d-none', 'd-flex');
    }



}
//en cuanto cargue la página corre la función login.
window.onload = logged;

//al hacer click en login iniciará la función.
document.getElementById("loginButton").onclick = function () {
    login()
};
document.getElementById("logOutButton").onclick = function () {
    logout()
};
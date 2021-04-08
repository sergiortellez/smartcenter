// Inicializa Firebase
var config = {
    apiKey: "AIzaSyD0_6LssImajkRSA12jpSwrimd3ZQ98vG0",
    authDomain: "smart-center-up.firebaseapp.com",
    databaseURL: "https://smart-center-up.firebaseio.com",
    projectId: "smart-center-up",
    storageBucket: "smart-center-up.appspot.com",
    messagingSenderId: "975526869854"
};
firebase.initializeApp(config);


//recordar los siguientes métodos útiles del objeto user (provistos por firebase):
//user.displayName
//user.email
//user.photoURL
//user.uid

// ************ Funciones ************ // 

//corre cada que carga la página, su trabajo es revisar el estado de autentificación y si es positivo llamar la función app()
function logged() {
    //si ha ocurrido un cambio en el estado de autentificación revisa si existe el objeto User y de ser así lo arroja a la función app()
    function newLoginHappened(user) {

        if (user) {
            //si el usuario existe, quiere decir que ya ha iniciado sesión por lo que llama a la función app() con el parámetro user (provisto por firebase) para hacer los cambios pertinentes
            app(user);
            refreshCarr();
        }
    }


    //listener: espera hasta que ocurra un cambio en el estado de la autentificación y cuando ocurre (o al cargar la página) llama a la función newLoginHappened y le da (o no) un parámetro "user" (provisto por firebase)
    firebase.auth().onAuthStateChanged(newLoginHappened);

}

function app(user) {

    //despliega el nombre del usuario (dado por google) y la foto de perfil (dada por google)
    document.getElementById("clientName").innerHTML = user.displayName;
    document.getElementById("clientPhoto").setAttribute('src', user.photoURL);

    //switches que prenden o apagan los elementos dependiendo del estado del usuario: (recordar que esta función sólo corre con el usuario logeado) Por default todo lo que tiene la clase notLogged también posea la clase d-blok y lo que tiene la clase logged tiene la clase d-none para que en un estado inicial de no logoeado sean invisibles las cosas que se quieren proteger. 

    //se crea un arreglo con todos los elementos que poseen la clase "notLogged"
    var notLoggedArray = document.getElementsByClassName("notLogged");

    //este ciclo sustituye en todos los elementos que tienen la clase notLogged la clase d-block por la clase d-none las vuelve invisibles
    for (i = 0; i < notLoggedArray.length; i++) {
        notLoggedArray[i].classList.add('d-none');
    }
    //se crea un arreglo con todos los elementos que poseen la clase "logged"
    var loggedArray = document.getElementsByClassName("logged");

    //este ciclo sustituye en todos los elementos que tienen la clase logged la clase d-none por la clase d-block las vuelve visibles
    for (i = 0; i < loggedArray.length; i++) {
        loggedArray[i].classList.remove('d-none');

    }
    //le cambia el nombre al botón.
    document.getElementById('logInButton').innerHTML = 'logout';


}
// Funciones que responden a los botones login y logout

//al hacer click en login ejecuta el rediccionamiento a la ventana para logearse con google.
function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

//al hacer click en logout ejecuta dos funciones que limpian los datos del usuario de la página y la recarga

function logout() {


    localStorage.removeItem('profile');
    ClearSomeLocalStorage('firebase:');
    firebase.auth().signOut().then(function () {
        console.log("Signout Successful")
    }, function (error) {
        console.log(error);
    });
    location.reload();



}

function ClearSomeLocalStorage(startsWith) {
    var myLength = startsWith.length;


    Object.keys(localStorage)
        .forEach(function (key) {
            if (key.substring(0, myLength) == startsWith) {
                localStorage.removeItem(key);
            }
        });

}

// Esta función es llamada por el login para redimencionar los carruseles de la página en cada login (por un bug en flickity)
function refreshCarr() {

    console.log('la función refreshCarr corrió exitosamente ');


    //arregla el carrusel de OYLB mediante un resize
    var carousel = document.querySelector('.carouselOylb');
    var flkty = new Flickity(carousel);
    flkty.resize();

    //arregla el carrusel de cvmp mediante un resize
    var carousel = document.querySelector('.carouselCvmp');
    var flkty = new Flickity(carousel);
    flkty.resize();


}


// ************ Listeners ************ // 

//cada vez que carga la página corre la función logged para revisar el estado de autentificación.
window.onload = logged;

//al hacer click en el botón 'logInButton' iniciará la función login() o logout() dependiendo de si existe un usuario o no.

function toggleSignIn() {
    if (!firebase.auth().currentUser) {

        login();

    } else {

        logout();

    }
}
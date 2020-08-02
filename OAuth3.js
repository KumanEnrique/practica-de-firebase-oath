let uid

//evento para ver si estas en sesión
auth.onAuthStateChanged((user)=>{
    // console.log("objeto user: ",user.uid)
    if(user){
        console.log("sesion iniciada,objeto user: ", user)
        console.log("objeto user: ", user.email)
        db.collection("users").doc(user.uid).get()
            .then(doc => {
                console.log(doc.id, "=>", doc.data())
            })
            .catch(error => {
                console.warn("atrape el error", error)
            });
        
        var usersRef = db.collection('users').doc(user.uid).collection('subcoleccion');
        usersRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("subcoleción",doc.id, doc.data());
            });
        });
        uid = user.uid
    }else {
        console.log("sesion cerrada")
    }
});
//crear sesion
function crearSesion(){
    auth.createUserWithEmailAndPassword("luis_dohko@hotmail.com", "123456")
        .then(() => {
            console.log("exito!!!")
        })
        .catch((e) => {
            const error = e.code;
            const message = e.message;
            console.warn("atrape el error", error, message)
        });
}
//crear sesion2
function crearSesion2(){
    auth.createUserWithEmailAndPassword("12530284@itcancun.edu.mx", "123456")
        .then(() => {
            console.log("exito!!!")
        })
        .catch((e) => {
            const error = e.code;
            const message = e.message;
            console.warn("atrape el error", error, message)
        });
}
//iniciar sesion
function iniciarSesion() {
    auth.signInWithEmailAndPassword("luis_dohko@hotmail.com", "654321")
        .then(() => {
            console.log("se recordo la contraseña y el password, con exito")
            console.log("luis_dohko@hotmail.com", "654321")
        })
        .catch((e) => {
            const error = e.code;
            const message = e.message;
            console.warn("atrape el error", error, message)
        });
}
//iniciar sesion2
function iniciarSesion2() {
    auth.signInWithEmailAndPassword("12530284@itcancun.edu.mx", "123456")
        .then(() => {
            console.log("se recordo la contraseña y el password, con exito")
            console.log("12530284@itcancun.edu.mx", "123456")
        })
        .catch((e) => {
            const error = e.code;
            const message = e.message;
            console.warn("atrape el error", error, message)
        });
}
//salir de la sesion
function salirSesion(){
    auth.signOut().then(()=>{
        console.log("salio de la  sesión de la aplicación")
    })
    .catch((e)=>{
        console.warn("hubo un error",e)
    })
}
function crearDocumento(){
    db.collection("users").doc(uid).set({
        name:"hotmail.com",
        apellido:"negocio",
        telefono:Math.random()*100,
    })
    .then(()=>{
        console.log("se añadio correctamente")
    })
}
function crearDocumento2(){
    db.collection("users").doc(uid).set({
        name:"itcancun.com",
        apellido:"escuela",
        telefono:Math.random()*100,
    })
    .then(()=>{
        console.log("se añadio correctamente")
    })
}
function crearDocumentoSinUID(){
    db.collection("users").doc().set({
        name:"oso",
        apellido:"sader",
        userId:"sin uid",
        telefono:Math.random()* 100 ,
    })
    .then(()=>{
        console.log("se añadio correctamente")
    })
}
function borrarDocumento(){
    db.collection("users").get()
    .then(querySnapshot =>{
        querySnapshot.forEach((doc) => {
            db.collection("users").doc(doc.id).delete()
        });
    })
}
//empezando: Escribe condiciones para las reglas de seguridad de Cloud Firestorede firebase
function verSinSesion(){
    db.collection("cities2").get()
    .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data())
        })
    })
    .catch(error => {
        console.log("el el error fue:", error)
    })
}
function verSinSesionUnico(){
    db.collection("cities2").doc("BJ").get()
    .then(doc=>{
        console.log(doc.id,"=>",doc.data())
    })
    .catch(error => {
        console.log("el el error fue:", error)
    })
}

function agregarStory(){
    db.collection("stories").doc().set(
        {
            title: "una gran historia",
            content: "Once upon a time...",
            author: "11111111111111",
            published: false
        }
    )
    .then(()=>{
        console.log("documento creado con exito")
    })
    .catch(error => {
        console.log("el el error fue:", error)
    })
}
function verStories(){
    db.collection("stories").get()
    .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data())
        })
    })
    .catch(error => {
        console.log("el el error fue:", error)
    })
}
function verStory(){
    db.collection("stories").doc("2qa1dmGYPIfmbEeYPDL7rAwkrzg2").get()
    .then(doc=>{
        console.log(doc.id,"=>",doc.data())
    })
    .catch(error => {
        console.log("el el error fue:", error)
    })
}
function loginGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
    .then(()=>{
        console.log("estas logueado con google")
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log("logingoogle")
}

//explorando AUTH
function actualizarUser(){
    let user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
        console.log("exito en actualizar los datos")
    }).catch((error) => {
        console.log("atrape el error",error)
    })
}
function actualizarCorreo() {
    let user = firebase.auth().currentUser;

    user.updateEmail("user@example.com").then(function () {
        console.log("exito en cambiar el correo")
    }).catch((error)=>{
        console.log("atrape el error",error)
    })
}
function enviarMensajeVericacion() {
    let user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        console.log("exito en enviar el mensaje")
    }).catch((error) => {
        console.log("atrape el error",error)
    })
}
function cambiarContraseña() {
    let user = firebase.auth().currentUser;
    let newPassword = "654321"

    user.updatePassword(newPassword).then(function () {
        console.log("cambie la contraseña")
    }).catch((error) => {
        console.log("atrape el error",error)
    })
}
function enviarMensajeRestablecimiento() {
    var auth = firebase.auth();
    var emailAddress = "luis_dohko@hotmail.com";

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        console.log("envie el restablecimiento de contraseña")
    }).catch((error) => {
        console.log("atrape el error", error)
    })
}
function borrarUsuario() {
    let user = firebase.auth().currentUser;

    user.delete().then(function () {
        console.log("se borro el usuario")
    }).catch((error) => {
        console.log("atrape el error", error)
    })
}
function usuarioAnonimo() {
    firebase.auth().signInAnonymously().then(() => {
        console.log("estoy en una sesión anonima")
    }).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("el error fue:",errorCode)
        console.log("el error fue:",errorMessage)
    });
}
function crearDocumentoAnonimo(){
    db.collection("users").doc(uid).set({
        name:"hotmail.com",
        apellido:"anonimo",
        telefono:Math.random()*100,
    })
    .then(()=>{
        console.log("se añadio correctamente")
    })
}
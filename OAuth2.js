let uid
/* match /{document=**} {
    	allow read, write: if request.time < timestamp.date(2020, 8, 17) ;
    } */
    
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
    auth.signInWithEmailAndPassword("luis_dohko@hotmail.com", "123456")
        .then(() => {
            console.log("se recordo la contraseña y el password, con exito")
            console.log("luis_dohko@hotmail.com", "123456")
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
        name:"asa",
        apellido:"pepe",
        telefono:Math.random()*100,
    })
    .then(()=>{
        console.log("se añadio correctamente")
    })
}
function crearDocumento2(){
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

/* db.collectionGroup("landmarks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
});*/
 
/* var usersRef = db.collection('users').doc('2qa1dmGYPIfmbEeYPDL7rAwkrzg2')
                .collection('subcoleccion')
usersRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */
/* var messageRef = db.collection('rooms').doc('roomA')
                .collection('messages').doc('message1')
ver lo datos de message1
messageRef.get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data())
}) */
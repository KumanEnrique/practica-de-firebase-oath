let uid
/* match /{document=**} {
    	allow read, write: if request.time < timestamp.date(2020, 8, 17) ;
    } */

/* db.collection("users").get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
    });
})
.catch(error=>{
    console.warn("atrape el error",error)
}); */



/* db.collection("users").doc("2qa1dmGYPIfmbEeYPDL7rAwkrzg2").get()
.then(doc=>{
    console.log(doc.id,"=>",doc.data())
})
.catch(error=>{
    console.warn("atrape el error",error)
}); */
/* db.collection("users").doc("6p6w2n4JmbSsv9uWomXoPoqPKyZ2").get()
.then(doc=>{
    console.log(doc.id,"=>",doc.data())
})
.catch(error=>{
    console.warn("atrape el error",error)
}); */



/* var alovelaceDocumentRef = db.doc('users/frank');
alovelaceDocumentRef.get().then(doc=>{
    console.log(doc.id,"=>",doc.data())
}) */
/* let landmarcksref  = db.doc('/cities/BJ/landmarks/PxaXo8diYTVSbUXzaJ5c').get().then(doc=>{
    console.log(doc.id,"=>",doc.data())
}) */

auth.onAuthStateChanged((user)=>{
    // console.log("objeto user: ",user.uid)
    if(user){
        console.log("sesion iniciada")
        console.log("objeto user: ", user)
        console.log("objeto user: ", user.email)
        db.collection("users").doc(user.uid).get()
            .then(doc => {
                console.log(doc.id, "=>", doc.data())
            })
            .catch(error => {
                console.warn("atrape el error", error)
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

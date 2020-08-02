/* db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
}); */
                                    /* db.collection("users").get().then((querySnapshot) => {
                                        querySnapshot.forEach((doc) => {
                                            console.log(doc.id,doc.data());
                                        });
                                    }); */
/* var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] }); */
/* db.collection("cities").where("country", "==", "USA").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id,doc.data());
        });
    }); */
/* var citiesRef = db.collection("cities");

citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Golden Gate Bridge",
    category : "bridge" });
citiesRef.doc("SF").collection("landmarks").doc().set({
    name: "Golden Gate Park",
    category : "park" });

citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "National Gallery of Art",
    category : "museum" });
citiesRef.doc("DC").collection("landmarks").doc().set({
    name: "National Mall",
    category : "park" }); */
/* db.collection("cities").doc("SF").collection("landmarks").where("category", "==", "park").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */
/* db.collectionGroup("landmarks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */
/* db.collection("cities2").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
}); */
/* var cityRef = db.collection('cities2').doc('LA');
var setWithMerge = cityRef.set({
    capital: true
}, { merge: true }); */
/* var cityRef = db.collection('cities2').doc('LA');
var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    referenceExample: cityRef,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
db.collection("data").doc("one").set(docData).then(function() {
    console.log("Document successfully written!");
})
db.collection("data").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */
/* db.collection("cities2").doc("DC").set({
    name: "washington",
    state: "CA",
    country: "USA"
})
var washingtonRef = db.collection("cities2").doc("DC");
// Set the "capital" field of the city 'DC'
washingtonRef.update({
    capital: true
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
}); */
/* var docRef = db.collection('objects').doc('some-id');
docRef.set({
    time:new Date()
})
// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
}); */
/* var frankDocRef = db.collection("users").doc("frank");
frankDocRef.set({
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});
db.collection("users").doc("frank").update({
    "age": 13,
    "favorites.color": "Red"
})
.then(function() {
    console.log("Document successfully updated!");
}); */
/* var washingtonRef = db.collection("cities").doc("DC");

// Atomically add a new region to the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
});
// Atomically remove a region from the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
}); */
/* var washingtonRef = db.collection('cities').doc('DC');

// Atomically increment the population of the city by 50.
washingtonRef.update({
    population: firebase.firestore.FieldValue.increment(50)
}); */

/* var sfDocRef = db.collection("cities").doc("SF");

db.runTransaction(function(transaction) {
    return transaction.get(sfDocRef).then(function(sfDoc) {
        if (!sfDoc.exists) {
            throw "Document does not exist!";
        }

        var newPopulation = sfDoc.data().population + 1;
        if (newPopulation <= 1000000) {
            transaction.update(sfDocRef, { population: newPopulation });
            return newPopulation;
        } else {
            return Promise.reject("Sorry! Population is too big.");
        }
    });
}).then(function(newPopulation) {
    console.log("Population increased to ", newPopulation);
}).catch(function(err) {
    // This will be an "population is too big" error.
    console.error(err);
}); */

/* // Get a new write batch
var batch = db.batch();

// Set the value of 'NYC'
var nycRef = db.collection("cities").doc("NYC");
batch.set(nycRef, {name: "New York City love"});

// Update the population of 'SF'
var sfRef = db.collection("cities").doc("SF");
batch.update(sfRef, {"population": 10});

// Delete the city 'LA'
var laRef = db.collection("cities").doc("LA");
batch.delete(laRef);

// Commit the batch
batch.commit().then(function () {
    console.log("se confirmaron las acciones")
}); */
/* db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
}); */
/* var cityRef = db.collection('cities').doc('BJ');

// Remove the 'capital' field from the document
var removeCapital = cityRef.update({
    name: firebase.firestore.FieldValue.delete()
}); */
/* var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

var docRef = db.collection("cities").doc("sas");

docRef.get().then(function (doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
}); */
/* var docRef = db.collection("cities").doc("SF");

// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
var getOptions = {
    source: 'server'
};

// Get a document, forcing the SDK to fetch from the offline cache.
docRef.get(getOptions).then(function(doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
    console.log("Cached document data:", doc.data());
}).catch(function(error) {
    console.log("Error getting cached document:", error);
}); */
/* db.collection("cities").where("capital", "==", true)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
}); */
/* db.collection("cities").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}); */
/* db.collectionGroup("landmarks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */
//********************************** */
/* db.collection("cities").doc("SF")
.onSnapshot(function(doc) {
    console.log("Current data: ", doc.data());
}); */
/* db.collection("cities").doc("SF")
.onSnapshot(function(doc) {
    var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc.data());
}); */
/* db.collection("cities").doc("SF")
.onSnapshot({
    // Listen for document metadata changes
    includeMetadataChanges: true
}, function (doc) {
    console.log(" data: ", doc.data());
}); */
/* db.collection("cities").where("state", "==", "CA")
.onSnapshot(function(querySnapshot) {
    var cities = [];
    querySnapshot.forEach(function(doc) {
        cities.push(doc.data().name);
    });
    console.log("Current cities in CA: ", cities.join(", "));
}); */
/* db.collection("cities")
.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data());
        }
        if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
        }
    });
}); */

/* db.collection("cities").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
 */
/* citiesRef.where("state", "==", "CA")
citiesRef.where("population", "<", 100000)
citiesRef.where("name", ">=", "San Francisco") */
// citiesRef.where("regions", "array-contains", "west_coast")
/* var citiesRef = db.collection('cities');

var landmarks = Promise.all([
    citiesRef.doc('SF').collection('landmarks').doc().set({
        name: 'Golden Gate Bridge',
        type: 'bridge'
    }),
    citiesRef.doc('SF').collection('landmarks').doc().set({
        name: 'Legion of Honor',
        type: 'museum'
    }),
    citiesRef.doc('LA').collection('landmarks').doc().set({
        name: 'Griffith Park',
        type: 'park'
    }),
    citiesRef.doc('LA').collection('landmarks').doc().set({
        name: 'The Getty',
        type: 'museum'
    }),
    citiesRef.doc('DC').collection('landmarks').doc().set({
        name: 'Lincoln Memorial',
        type: 'memorial'
    }),
    citiesRef.doc('DC').collection('landmarks').doc().set({
        name: 'National Air and Space Museum',
        type: 'museum'
    }),
    citiesRef.doc('TOK').collection('landmarks').doc().set({
        name: 'Ueno Park',
        type: 'park'
    }),
    citiesRef.doc('TOK').collection('landmarks').doc().set({
        name: 'National Museum of Nature and Science',
        type: 'museum'
    }),
    citiesRef.doc('BJ').collection('landmarks').doc().set({
        name: 'Jingshan Park',
        type: 'park'
    }),
    citiesRef.doc('BJ').collection('landmarks').doc().set({
        name: ' Ancient Observatory',
        type: 'museum'
    })
]); */
/* var museums = db.collectionGroup('landmarks').where('type', '==', 'museum');
museums.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
    });
}); */
/* db.collection("cities").where("population", ">", 100000).orderBy("population").limit(2).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,"=>",doc.data());
    });
}); */
/* db.collection("cities").orderBy("population").startAt(1000000).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,"=>",doc.data());
    });
});
db.collection("cities").orderBy("population").endAt(1000000).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,"=>",doc.data());
    });
}); */
/* var first = db.collection("cities").orderBy("population").limit(25);
first.get().then(function (documentSnapshots) {
  // Get the last visible document
  var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
  console.log("last", lastVisible);

  // Construct a new query starting at this document,
  // get the next 25 cities.
  var next = db.collection("cities")
          .orderBy("population")
          .startAfter(lastVisible)
          .limit(25);
}); */
/* db.collection("cities").orderBy("name").orderBy("state").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,"=>",doc.data());/cities/BJ/landmarks/PxaXo8diYTVSbUXzaJ5c
    });
}); */

/* db.collection("cities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
}); */


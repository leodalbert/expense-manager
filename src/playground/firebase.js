
// more subscription types

// child_removed    fires when child is removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_changed  fires when child is changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})


// child_added fires when child is added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())

})

// subscribe to database and create an array 'expense' from all the objects in 'database/expenses'
database.ref('expenses').on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses)
})



// use 'once' to create array 'expenses' from all the objects in 'database/expenses'
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = []

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses)
    })


//pushes expenses into database from array to series of objects
    expenses.forEach((expense) => {
    database.ref('expenses').push({...expense})
})



const onValueChange = database.ref().on('value', (snapshot) => {    //subscribes - the return value from subscription is the snapshot function which can be used to unsubscribe from specific subscription
    console.log(snapshot.val())
}, (e) => {
    console.log('Error with data fetching', e)                      //third function handles errors as catch does in promise
})

database.ref().off(onValueChange)                                   //unsubscribe from specific subscription


database.ref().on('value', (snapshot) => {                          //to subscribe
    console.log(snapshot.val())
})

database.ref().off()                                                 //to unsubscribe to all subscription





database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val()
        console.log(val)
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    })


database.ref().set({
    name: 'Leo Dalbert',
    age: 28,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Brooklyn',
        country: 'USA'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('this failed: ', e)
})



database.ref('isSingle').remove().then(() => {
    console.log('dataRemoved')
}).catch((e) => {
    console.log("error: ",e )
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})
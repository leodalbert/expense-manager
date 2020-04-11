import * as firebase from 'firebase'
import expenses from '../tests/fixtures/expenses'

var firebaseConfig = {
    apiKey: "AIzaSyDqViKp-sAa-x3zT_pQbpbaX_TUYo6dFWQ",
    authDomain: "expensify-196c2.firebaseapp.com",
    databaseURL: "https://expensify-196c2.firebaseio.com",
    projectId: "expensify-196c2",
    storageBucket: "expensify-196c2.appspot.com",
    messagingSenderId: "689380195420",
    appId: "1:689380195420:web:ba3da69610ca498d63fa99"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
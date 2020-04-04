import { createStore } from 'redux'

// Action generators - functions that return action objects

// const incrementCount = () => {          <--- Explicit vs Implicit
//     return {
//         type: 'INCREMENT'
//     }
// }

// const incrementCount = () => ({
//     type: 'INCREMENT'
// })

// providing an object as an argument (destructoring that object and giving it a default of 1) and giving it a default of {}
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //incrementBy: incrementBy
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})


const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // conditional logic to check if incrementBy is a number, else default to 1  -----   not needed with Action Generator beacuse default is already set
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }

    
    // if(action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     }
    // } else {
    //     return state
    // }
    // return state
})

//fires every time store changes
// store.subscribe(() => {
//     console.log(store.getState())
// })

//return value from subscribe is a function that can be called to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// type is alwasy required, but additional things may be added
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

// store.dispatch({
//     type: 'DECREMENT'
// })


// call to unsubscribe
//unsubscribe()

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})

store.dispatch(resetCount())

store.dispatch(setCount({ count: 200 }))
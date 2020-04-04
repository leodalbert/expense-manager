import { createStore } from 'redux'

// Action generators - functions that return action objects

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

// Reducers
// 1. Reducers are pure functions (do not depend on, or change anything outside of function scope)
// 2. Never change state or action (never directly change or mutate these, alwasy return an object with new values of state)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
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
}

const store = createStore(countReducer)

//return value from subscribe is a function that can be called to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({ count: 200 }))
import { createStore, combineReducers } from 'redux'
import { uuid } from 'uuidv4'

// ADD_EXPENSE
// same as    -----    const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({

const addExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' })

const sortByDate = () => ({ type: 'SORT_BY_DATE' })

const setStartDate = (timestamp) => ({
    type: 'SET_START_DATE',
    timestamp
})

const setEndDate = (timestamp) => ({
    type: 'SET_END_DATE',
    timestamp
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {     // for reducers who's default is an empty array or object, default can be set in-line ( state = [] )
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            // return state.filter(( expense ) => {
            //     return expense.id !== action.id
            // })
            return state.filter(({ id }) => id !== action.id)  // cleaner version
        case 'EDIT_EXPENSE':
           return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense
            }
           }) 
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.timestamp
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.timestamp
            }
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) 
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))

const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

//store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

 store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

 //store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(900))

const demoState = {
    expenses: [{
        id: 'ksjfhsdfs',
        description: 'Jan Rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

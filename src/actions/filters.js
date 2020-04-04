export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' })

export const sortByDate = () => ({ type: 'SORT_BY_DATE' })

export const setStartDate = (timestamp) => ({
    type: 'SET_START_DATE',
    timestamp
})

export const setEndDate = (timestamp) => ({
    type: 'SET_END_DATE',
    timestamp
})

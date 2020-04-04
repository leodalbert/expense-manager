import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        timestamp: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        timestamp: moment(0)
    })
})

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate set text filter action object with default value', () => {
    expect(setTextFilter()).toEqual({ 
        type: 'SET_TEXT_FILTER',
        text: ''
     })
})

test('should generate set text filter action object with custom value', () => {
    expect(setTextFilter('test')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})
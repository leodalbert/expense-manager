import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action opbject', () => {
    const action = editExpense( '123abc', { note: 'test' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'test'
        }
    })
})

test('should setup add expense action object with existing value', () => {
    const expenseData = {
        description: 'testDescrip',
        note: 'testNote',
        amount: 123.45,
        createdAt: 1234567890
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default', () => {
    const defaultexpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultexpenseData,
            id: expect.any(String)
        }
    })
})
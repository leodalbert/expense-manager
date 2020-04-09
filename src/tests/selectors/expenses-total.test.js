import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should total all expenses', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})

test('should return 0 for no expense', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('should total one expense', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(expenses[0].amount)
})
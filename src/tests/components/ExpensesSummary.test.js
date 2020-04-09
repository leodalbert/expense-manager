import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpensesSummary'


test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={100} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={300} />)
    expect(wrapper).toMatchSnapshot()
})
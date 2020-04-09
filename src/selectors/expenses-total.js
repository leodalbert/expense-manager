export default (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((acc, amount) => acc + amount, 0)
}
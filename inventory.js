const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

const transactionsFor = (int, obj) => {
  return obj.filter((transaction) => transaction.id === int)
}

const isItemAvailable = (itemId, transactions) => {
  const allTransactions = transactionsFor(itemId, transactions);
  let total = 0
  allTransactions.forEach((transaction) => {
    if (transaction.movement === 'in') {
      total += transaction.quantity
    } else {
      total -= transaction.quantity
    }
  })
  return total > 0
}

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
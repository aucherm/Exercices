const orders = [
    { user: "Lina", amount: 20 },
    { user: "Lina", amount: 15 },
    { user: "Sarah", amount: 30 }
]

function totalByUser(orders) {
    return orders.reduce((totals, order) => {
        totals[order.user] = (totals[order.user] || 0) + order.amount;
        return totals;
    }, {});
}
console.log(totalByUser(orders));
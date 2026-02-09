const cart = [
    { name: "bananas", price: 1.2, quantity: 3 },
    { name: "apples", price: 2.1, quantity: 4 },
    { name: "brocolis", price: 1.5, quantity: 2 },
    { name: "oranges", price: 2.8, quantity: 6 },
    { name: "carottes", price: 1.1, quantity: 8 },
];

function calculateTotal(cart) {
    let total = 0;

    for (const item of cart) {
        let lineTotal = item.price * item.quantity;

        if (item.quantity >= 5) {
            lineTotal *= 0.9;
        }
        total += lineTotal;
    }
    return Math.round(total * 100) / 100;
}

console.log(calculateTotal((cart)))
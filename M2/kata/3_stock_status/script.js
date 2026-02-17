

function stockStatus(products) {
    const result = [];

    for (const item of products) {
        let status;

        if (item.stock === 0) {
            status = "out";
        } else if (item.stock < 5) {
            status = "low";
        } else {
            status = "ok";
        }

        result.push({
            name: item.name,
            stock: item.stock,
            status: status
        });
    }
    return result;
}

const products = [
    { name: "Stylo", stock: 10 },
    { name: "Livre", stock: 3 },
    { name: "Clavier", stock: 0 }
];

console.log(stockStatus(products));

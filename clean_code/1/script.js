// 1

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([1, 2]));       // 3
console.log(sumArray([0]));          // 0
console.log(sumArray([1, 0]));       // 1

//2

function sumArray(arr) {
    if (!Array, isArray(arr)) {
        return "Erreur: Vous devez passer un tableau de nombres";
    }

    return arr.reduce((sum, val) => {
        if (typeof val === "number" && !isNaN(val)) {
            return sum + val;
        }
        return sum;
    }, 0);
}

console.log(sumArray([1, 2, 3, 4]));   // 10
console.log(sumArray([1, 2]));         // 3
console.log(sumArray([0]));            // 0
console.log(sumArray([1, 0]));         // 1
console.log(sumArray([1, "Haha"]));    // 1
console.log(sumArray());               // "Erreur: Vous devez passer un tableau de nombres"
console.log(sumArray("Huhu"));         // "Erreur: Vous devez passer un tableau de nombres"
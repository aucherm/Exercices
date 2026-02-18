
const users = [
    { name: "Lina", age: 22, active: true },
    { name: "Sarah", age: 17, active: true },
    { name: "Emma", age: 30, active: false }
];

/* 
function getActiveAdults(users) {
    const result = [];

    for (const people of users) {
        if (people.active && people.age >= 18) {
            result.push(people);
        }
    }
    return result
}*/

function getActiveAdults(users) {
    return users.filter(people => people.active && people.age >= 18) ;
}

console.log(getActiveAdults(users));
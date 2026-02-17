/* const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3= d1.concat(d2);

console.log(d3); */

function flat (nested){
    let res = [];
    nested.forEach(element: [] => {
        element.foreach(value => {
            res.push(value);
        })
    });
    return res
}


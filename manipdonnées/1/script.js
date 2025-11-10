const candidates = [
    'Le Filip',
    'Ruby On The Nail',
    'Leona Winter',
    '£',
    'Misty Phoenix',
    'Perseo',
    'Norma Bell',
    'Edeha Noire',
    'Magnetica',
    'Afrodite Amour'];


// 1
console.log(candidates[0]);

//2
console.log(candidates[7]);

//3
candidates.forEach(candidate => console.log(candidate));

//4
const list = document.getElementById("candidate-list");

candidates.forEach(candidate => {
    const li = document.createElement("li");
    li.textContent = candidate;
    list.appendChild(li);
});
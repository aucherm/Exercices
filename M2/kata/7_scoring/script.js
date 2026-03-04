const actions = [
    { type: "win", points: 10 },
    { type: "bonus", points: 5 },
    { type: "penalty", points: 3 },
    { type: "win", points: 20 },
    { type: "penalty", points: 2 }
];

function calculateScore(actions) {
    let score = 0;

    for (const { type, points } of actions) {
        if (type === "win" || type === "bonus") {
            score += points;
        } else if (type === "penalty") {
            score -= points;
        }
    }
    if (score < 0) {
        score = 0;
    }

    return score;
}
console.log(calculateScore(actions));
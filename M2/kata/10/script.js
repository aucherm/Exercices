const meetings1 = [
    { start: "09:00", end: "09:30" },
    { start: "10:00", end: "11:00" }
];

const meetings2 = [
    { start: "09:00", end: "10:00" },
    { start: "09:45", end: "10:15" }
];

const meetings3 = [
    { start: "13:00", end: "13:30" },
    { start: "13:30", end: "14:00" }
];

function toMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function hasConflict(meetings) {
    for (let i = 0; i < meetings.length; i++) {
        for (let j = i + 1; j < meetings.length; j++) {
            const startA = toMinutes(meetings[i].start);
            const endA = toMinutes(meetings[i].end);
            const startB = toMinutes(meetings[j].start);
            const endB = toMinutes(meetings[j].end);

            if (startA < endB && startB < endA) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasConflict(meetings1)); 
console.log(hasConflict(meetings2)); 
console.log(hasConflict(meetings3));

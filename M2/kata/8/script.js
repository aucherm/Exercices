var events = [
    { id: 1, title: "Workshop JS", capacity: 5, booked: 3 },
    { id: 2, title: "React Intro", capacity: 10, booked: 10 },
    { id: 3, title: "SQL Basics", capacity: 8, booked: 0 },
];
var bookSeats = function (events, eventId, seats) {
    if (seats <= 0) {
        return {
            success: false,
            message: "Une r\u00E9servation soit concernent au moins un si\u00E8ge. (Ici ".concat(seats, " si\u00E8ge.s demand\u00E9.s)"),
        };
    }
    var found = events.find(function (_a) {
        var id = _a.id;
        return id == eventId;
    });
    if (!found) {
        return {
            success: false,
            message: "Event not found",
        };
    }
    var remainingSeats = found.capacity - found.booked;
    if (seats <= remainingSeats) {
        found.booked += seats;
        return {
            success: true,
            message: "Votre r\u00E9servation a \u00E9t\u00E9 prise en compte pour ".concat(found.title, "."),
            remainingSeats: found.capacity - found.booked,
        };
    }
    return {
        success: false,
        message: "R\u00E9servation impossible : seulement ".concat(remainingSeats, " si\u00E8ge.s disponible.s pour \"").concat(found.title, "\"."),
        remainingSeats: remainingSeats,
    };
};
console.log([
    bookSeats(events, 1, 2),
    bookSeats(events, 2, 1),
    bookSeats(events, 909, 1),
]);

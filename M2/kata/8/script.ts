const events: Event[] = [
  { id: 1, title: "Workshop JS", capacity: 5, booked: 3 },
  { id: 2, title: "React Intro", capacity: 10, booked: 10 },
  { id: 3, title: "SQL Basics", capacity: 8, booked: 0 },
];

type Event = {
  id: number;
  title: string;
  capacity: number;
  booked: number;
};

type Result = {
  success: boolean;
  message: string;
  remainingSeats?: number;
};

const bookSeats = (
  events: Event[],
  eventId: Event["id"],
  seats: number,
): Result => {
  if (seats <= 0) {
    return {
      success: false,
      message: `Une réservation soit concernent au moins un siège. (Ici ${seats} siège.s demandé.s)`,
    };
  }

  const found: Event | undefined = events.find(({ id }) => id == eventId);

  if (!found) {
    return {
      success: false,
      message: "Event not found",
    };
  }

  const remainingSeats = found.capacity - found.booked;

  if (seats <= remainingSeats) {
    found.booked += seats;
    return {
      success: true,
      message: `Votre réservation a été prise en compte pour ${found.title}.`,
      remainingSeats: found.capacity - found.booked,
    };
  }

  return {
    success: false,
    message: `Réservation impossible : seulement ${remainingSeats} siège.s disponible.s pour "${found.title}".`,
    remainingSeats,
  };
};

console.log([
  bookSeats(events, 1, 2),
  bookSeats(events, 2, 1),
  bookSeats(events, 909, 1),
]);

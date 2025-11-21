function timeTravel(year: number): string {
  return `Travel to ${year}`;
};

function setDestination(date: string | number): number {
  if (typeof date === "string") {
    return parseInt(date);
  } else {
    return date;
  }
};

interface Pilot {
  name: string;
  age: number;
  era: number;
  plutoniumLevel?: number;
};

let marty: Pilot = {
  name: "Marty McFly",
  age: 17,
  era: 1985,
  plutoniumLevel: 4
};

type TimeCoords = [number, number, number];

let coords1955: TimeCoords = [5, 11, 1955];

function launchSequence (pilot: Pilot, coords: TimeCoords): string {
  let plutoniumLevel: number
  if(pilot.plutoniumLevel == undefined) {
    plutoniumLevel = 0
  } else {
    plutoniumLevel = pilot.plutoniumLevel
  }
  if (plutoniumLevel <= 0) {
    return `${pilot.name} ne peux pas voyager dans le temps, il n'a pas de plutonium ! Il doit rester en ${pilot.era}`;
  }

  return `${pilot.name} décolle !`;
}

console.log(launchSequence(marty, coords1955));



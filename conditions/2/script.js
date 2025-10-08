function canDrive(name, age) {
    const legalAge = 17;

    if (age >= legalAge) {
        console.log(`${name} peut conduire`);

    } else {
        console.log(`${name} ne peut pas conduire`);
    }

}

canDrive ("Mathieu",22);
canDrive ("Léa", 15);
canDrive ("Jean", 17);
const students = {
    "A001": {
        id: "A001",
        name: "Alice Martin",
        age: 22,
        major: "Computer Science",
        grades: [14, 16, 12, 18, 15],
        absences: 3,
        courses: ["JavaScript", "Algorithms", "Database"]
    },
    "A002": {
        id: "A002",
        name: "Bob Dupont",
        age: 24,
        major: "Mathematics",
        grades: [11, 9, 15, 8, 13],
        absences: 7,
        courses: ["Calculus", "Statistics", "Algebra"]
    },
    "A003": {
        id: "A003",
        name: "Claire Leroy",
        age: 21,
        major: "Computer Science",
        grades: [17, 19, 16, 18, 20],
        absences: 1,
        courses: ["JavaScript", "Web Development", "Data Structures"]
    },
    "A004": {
        id: "A004",
        name: "David Moreau",
        age: 23,
        major: "Physics",
        grades: [12, 14, 11, 10, 13],
        absences: 5,
        courses: ["Mechanics", "Quantum Physics", "Thermodynamics"]
    },
    "A005": {
        id: "A005",
        name: "Emma Bernard",
        age: 22,
        major: "Computer Science",
        grades: [15, 17, 16, 14, 19],
        absences: 2,
        courses: ["JavaScript", "Networks", "Security"]
    }
};

 
//1 Calculer la moyenne de chaque étudiant·e
  for (const id in students) {
    const student = students[id]; // Récupère chaque étudiant
    const grades = student.grades; // Tableau des notes
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    console.log(`${student.name} → Moyenne : ${average}`);
}  


//2 Trouver les étudiant·es d'une filière donnée
function getStudentsByMajor(major) {
    const result = [];
    for (const key in students) {
        if (students[key].major === major) {
            result.push(students[key].name);
            console.log(`${major} → ${students[key].name}`)
        }
    }
    return result;
}

getStudentsByMajor("Computer Science");
getStudentsByMajor("Physics");
getStudentsByMajor("Mathematics");


//3 Identifier l'étudiante avec la meilleure moyenne
let bestStudent = null;   // création d'une variable pour mémoriser l'étudiant avec la meilleure moyenne
let bestAverage = 0;   //création d'une variable pour stocker la meilleure moyenne

for (const id in students) {
    const student = students[id]; // Récupère chaque étudiant
    const grades = student.grades; // Tableau des notes
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    if (average > bestAverage) {
        bestAverage = average;
        bestStudent = student;
    }
}

console.log(`L'étudiant.e avec la meilleure moyenne est ${bestStudent.name}`) 


//5 Ajouter une note à un.e étudiant.e

 students.A001.grades.push(20);

 console.log( students.A001.grades);
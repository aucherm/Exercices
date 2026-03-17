const words = [
    " Java ",
    "java",
    "JAVA",
    "java!",
    "java,",
    "Java.",
    " JavaScript ",
    "javascript",
    "JAVASCRIPT",
    "javascript?",
    " javascript! ",
    " SQL",
    "sql",
    "Sql",
    "SQL!",
    " sql? ",
    "sql,",
    "sql.",
    "Docker",
    "docker",
    "DOCKER!",
    " Git ",
    "git",
    "GIT",
    "git?",
    "git!",
    "React",
    "react",
    "REACT!",
    "react?",
    "Spring",
    "spring",
    "",
    "   ",
    null,
    "   sql   ",
    "JavaScript,",
    "React.",
    "Git,",
    "??",
    "!",
    "."
];

function sanitizeWord(words) {
    const occurrences = {};

    for (let raw of words) {
        if (raw === null || raw === undefined) continue;

        let word = raw.trim().toLowerCase();
        word = word.replace(/[.,!?]+$/, "");

        if (!word || /^[.,!?]+$/.test(word)) continue;

        occurrences[word] = (occurrences[word] || 0) + 1;
    }

    return occurrences;
}

function countWords(occurrences) {
    const totalValid = Object.values(occurrences).reduce((a, b) => a + b, 0);
    const distinctCount = Object.keys(occurrences).length;
    const mostFrequent = Object.entries(occurrences)
        .sort((a, b) => b[1] - a[1]);

    return { occurrences, totalValid, distinctCount, mostFrequent };
}

const occurrences = sanitizeWord(words);
console.log(countWords(occurrences));


/*
function sanitizeWord(word: string | null): string | null {
  return (
    word
      ?.trim()
      .toLowerCase()
      .replace(/[.,!?]+$/, "") || null
  );
}

function accumulate(occurence: Record<string, number>, element: string) {
  return {
    ...occurence,
    [element]: (occurence[element] ?? 0) + 1,
  };
}

function countOccurence(wordsGiven: typeof words) {
  return wordsGiven
    .map(sanitizeWord)
    .filter((word) => word != null)
    .reduce(accumulate, {});
}

countOccurence(words); 
*/   
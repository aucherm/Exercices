const emails = [
    "lina@mail.com",
    "sarahmail.com",
    "aline@site",
    "morad @mail.com",
    "lucie@domain.fr",
    "paulette@mail .com",
    "contact@entreprise.org"
];

function getValidEmails(emails) {

    const result = []

    for (const address of emails) {
        if (address.includes("@") && address.includes(".") && !address.includes(" ")) {
            result.push(address)
        }
    }

    return result;
}

console.log(getValidEmails(emails));


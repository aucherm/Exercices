const commands = [
    "add title=LearnJS priority=high",
    "add title=WriteDocs priority=low",
    "remove id=42",
    "add title=FixBug",
    "remove",
    "add title=Hello priority=medium"
];

function parseCommand(command) {
    const tokens = command.trim().split(" ");
    const action = ["add", "remove"].includes(tokens[0]) ? tokens[0] : "unknown";
    const params = {};

    if (tokens.length === 0 || tokens[0] === "") {
        return { action: "unknown", params: {} };
    }

    for (let i = 1; i < tokens.length; i++) {
        if (tokens[i].includes("=")) {
            const [key, value] = tokens[i].split("=");
            params[key] = value;
        }
    }
    return { action, params };
}

commands.forEach(command => {
    console.log(parseCommand(command));
});
function capitalize(string) {
    if (!string) return "";
    return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
    if (!string) return "";
    return string.split("").reverse().join("");
}

function contains(string, substring) {
    if (!string || !substring) return false;
    return string.includes(substring);
}

module.exports = {capitalize, reverse, contains};
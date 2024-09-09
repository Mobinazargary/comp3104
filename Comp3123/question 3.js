function right(str) {
    if (str.length < 3) {
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}

console.log(right("Mobina"));
console.log(right("Zargary"));
console.log(right("JavaScript"));

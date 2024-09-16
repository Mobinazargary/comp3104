function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}

const input = "the quick brown fox";
const result = capitalizeWords(input);
console.log(result);


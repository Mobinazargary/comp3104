const filterLessThan20 = (arr) => {
    return arr.filter(value => value < 20);
};

var values = [1, 60, 34, 30, 20, 5];

console.log(filterLessThan20(values));


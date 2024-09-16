var array = [1, 2, 3, 4];

const calculateSum = array.reduce((acc, currentValue) => acc + currentValue, 0);
const calculateProduct = array.reduce((acc, currentValue) => acc * currentValue, 1);

console.log(calculateSum);
console.log(calculateProduct);

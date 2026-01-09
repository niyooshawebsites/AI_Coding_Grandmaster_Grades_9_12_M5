// sort and reverse numbers in js

// we will two custom function for ascending and descending order

const numbers = [22, 7, 56, 2, 33, 20, 65, 12, 4, 9]

const ascendingOrderFunc = (a, b) => a - b
const descendingOrderFunc = (a, b) => b - a

// sort() - sort the number in ascending order
console.log(numbers.sort(ascendingOrderFunc))

// descending order
console.log(numbers.sort(descendingOrderFunc))

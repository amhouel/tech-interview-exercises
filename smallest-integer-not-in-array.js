//Given an array of integers, write a function that finds the lowest integer that is not in the array.
//For example, given the array, [5, 2, 1, 4, 0, 2] , the function should return 3.

//Array solution
// const smallestInteger = (array) => {
//     array.sort((a, b) => a - b);
//     for (let i = array[0]; i <= array[array.length - 1]; i++) {
//         if (!array.includes(i)) {
//             return i;
//         }
//     }
// }

//Hashmap solution
const smallestInteger = (array) => {
    let hasmap = {};
    for (let elt of array) {
        if (!hasmap[elt]) {
            hasmap[elt] = 1
        }
    }
    let count = 0;
    while (hasmap[count]) {
        count++;
    }
    return count;
}


let array = [5, 2, 1, 4, 0, 2];
console.log(smallestInteger(array));


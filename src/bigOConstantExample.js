// Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete. Examples of O(1) algorithms are accessing an array item or performing basic arithmetic operations (e.g., adding 2 numbers). The following is an example of an algorithm with O(1) runtime complexity.

//Constant time O(1)

function getRandomItem(array) {
    let sum = 0, ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks: ticks
    };
}

console.log(getRandomItem([1,2,3]))
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

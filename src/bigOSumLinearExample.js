function sum(array) {
    let sum = 0, ticks=1;
    //constant time checks
        // 1. check if i < array and adjut i
        // 2. get value from array[i]
        // 3. add sum to array[i] value
        // 4. increase ticks value

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}

// 0(n) = linear
// linear relation because the complexity grows in direct linear
// proportion based on the input size
console.log(sum([1,2,3]))
console.log(sum([1,2,3,4,5,6,7,8,9,10]))
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))
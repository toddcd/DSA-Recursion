/*
  1. What is the input to the program?
    An integer (n) representing the total number of sheep

  2. What is the base case?
    When the number of sheep (n) has been reduced to 0, return

  2. What is the output of the program?
     a string 'All sheep jump over the fence.'

  3. What is the input to each recursive call (Recursive case)?
    n - 1

  4. What is the output of each recursive call?
        n + ' : Another sheep jump over the fence.'
 */
function countSheep(n){
    if (n === 0){
        return console.log('All sheep jump over the fence.')
        return
    }
    console.log(n + ' : Another sheep jump over the fence.')
    countSheep(n - 1)
}

countSheep(13)
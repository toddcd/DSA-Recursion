/*
  1. What is the input to the program?

  2. What is the base case?


  2. What is the output of the program?


  3. What is the input to each recursive call (Recursive case)?


  4. What is the output of each recursive call?

 */
function fib(n) {
    if (n < 2){
        return n
    }
    return fib(n - 1) + fib (n - 2)
}

console.log(fib(7))
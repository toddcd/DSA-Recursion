/*
  1. What is the input to the program?

  2. What is the base case?


  2. What is the output of the program?


  3. What is the input to each recursive call (Recursive case)?


  4. What is the output of each recursive call?

 */
function factorial(x)
{
    if (x === 0)
    {
        return 1;
    }
    return x * factorial(x-1);

}
console.log(factorial(5));
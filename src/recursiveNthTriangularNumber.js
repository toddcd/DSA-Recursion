//T = (n)(n + 1) / 2

/*
  1. What is the input to the program?
    An integer (n) representing the total number dots that make up a side of the triangle

  2. What is the base case?
    when n  is zero

  2. What is the output of the program?


  3. What is the input to each recursive call (Recursive case)?


  4. What is the output of each recursive call?

 */

function recursiveNthTriangularNumber (n) {
    if(n === 0){
        return 0;
    }
    recursiveNthTriangularNumber(n - 1);
    let row = '';
    for (let i = 0; i < n; i++){
        row = row + '*';
    }
    console.log(row)
}

recursiveNthTriangularNumber(3)
/*
  1. What is the input to the program?
    An integer as a base and an integer as an exponent

  2. What is the base case?
    When the exponent is zero return 1

  2. What is the output of the program?
     the base multiplied by itself a number of times equaling the exponent

  3. What is the input to each recursive call (Recursive case)?
    the base and the exp -1

  4. What is the output of each recursive call?
        base multiplied by itself
 */
function powerCalculator(base, exp){
    if(exp < 0){
        return console.log('exp should be >= 0')
    }else if(exp === 0){
        return 1
    }

    return base * powerCalculator(base, exp - 1 )
}

console.log(powerCalculator(2,4))
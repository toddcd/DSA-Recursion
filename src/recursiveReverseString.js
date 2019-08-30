/*
  1. What is the input to the program?
    The source string to be operated on

  2. What is the base case?
    When the source string has had all chars trimmed from the front and is empty, return an empty string

  2. What is the output of the program?
    The source string that has been reversed

  3. What is the input to each recursive call (Recursive case)?
    The source with the first char removed (+) plus the first char of the source

  4. What is the output of each recursive call?
    The a new string with the first char of the source string moved to the end
 */
function reverse(str) {
    if(str === ""){
        return "";
    }
    return reverse(str.substr(1)) + str.charAt(0)
}
console.log(reverse('todd'))
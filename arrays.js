//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']
console.log(faveColors)
//CODE HERE
const colorCopy = faveColors.slice() // I wasnt exactaly sure how to go about this so I got on w3 schools and pieced it together it took me a few trys until i was abel to get it but i think it is console logging correctly
console.log(colorCopy)
 

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('blue')
console.log(colorCopy)
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

//CODE HERE

const middleNums = numbers.slice(1, 4)  // i used the slice method to capture the middle numbers by sliceing out the 1 and the 5
console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

const answers = []

for (let i = 0; i < bigOrSmallArray.length; i++ ){
  if (bigOrSmallArray[i] > 100) {
    answers.push('big');
  } else {
    answers.push('small');
  }
}
console.log(bigOrSmallArray)
console.log(answers)
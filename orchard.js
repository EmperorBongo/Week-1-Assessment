///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]  // acres picked
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64  //per pound 
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0
for (let i = 0; i < fujiAcres.length; i++) { 
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}

console.log (totalAcres)

// I created a for loop that will take the apple calculate the total number of apples. 


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / fujiAcres.length

console.log(averageDailyAcres)

// Because this one was simple it really through me for a loop ;) I am still not sure how fujiacres.length gets everything. 
// but it simply is a variable that = totalAcres / fujiAcres.length





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days += 1; 
    acresLeft -= averageDailyAcres;
}
console.log(days)

/* I am really not sure if I got this one right answer here. I tried to have it add 1 for days i wasnt sure if i should of usef
+= and -= but as i console log it it seems correct. */ 

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < fujiAcres.length; i++) { 
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}

// I made empty arrays and  made a loop tht would multiply the acres by 6.5
console.log (fujiTons)
console.log (galaTons)
console.log (pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 97.5 * 2000 
let galaPounds = 169 * 2000
let pinkPounds = 143 * 2000

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// I added the total tons from the console log on a calculator and multiplied by 2000 to get the pounds.



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

//const fujiPrice = .89 
//const galaPrice = .64  //per pound 
//const pinkPrice = .55

// CODE HERE

let fujiProfit = .89 * 195000
let galaProfit = .64 * 338000
let pinkProfit = .55 * 286000

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// I just did the simple math to log the profit per pound i think i could of used a method to do this i just could figure it out exactly so i went to the basics




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)
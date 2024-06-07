//YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO
function checkForY(str) {
    const containsY = str.toLowerCase().split('').some(char => char === 'y');
    console.log(containsY ? "YES" : "No");
}

checkForY('Crazyy');
checkForY('hello');


// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach

// function getFactorial(num) {
// logic
// return the value;
// }

function getFactorial(num) {
    // Create an array of numbers from 1 to num
    const numArr = Array.from({ length: num },(_, index) => index + 1);

    //use reduce to calculate the factorical
    const factorial = numArr.reduce((acc, curr) => acc * curr, 1);

    return factorial;
}

console.log(getFactorial(5));


//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];

// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }

function getHighestAverageStudent(studentList) {
    //calculate average marks for each student
    const average = studentList.map(student => ({
        name: student.name,
        average: student.marks.reduce((total, mark) => total + mark,0) / student.marks.length
    
    }));

    //Find the student with highest average
    const hightestAverageStudent = average.reduce((prev, current) => {
        return (prev.average > current.average) ? prev : current;
    });

    return hightestAverageStudent.name;
}

//example
const studentList = [
      { name: "Mike", marks: [80, 50, 60, 100] }, 
      { name: "Daniel", marks: [40, 80, 100, 100] }, 
      { name: "Stacy", marks: [20, 100, 50, 70]},
];

console.log(getHighestAverageStudent(studentList));

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4
function mostFrequent(array) {
    const occurrences = array.reduce((acc, val) =>  {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const mostFrequentElement = object.entries(occurrences).reduce((prev, current) => {
        return (prev[1] > current[1]) ? prev : current;
    });
    return parseInt(mostFrequentElement[0]);
}

const array = [ 20, 4, -10, 4, 11, 20, 4, 2];

console.log(mostFrequent(array));


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUnique(Array) {
    const occurrences = Array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const uniqueNumbers = object.keys(occurrences).filter(key => occurrences[key] === 1);

    return parseInt(uniqueNumbers[0]);

}

const Array = [20,20,11,4,11,20,2,4];

console.log(findUnique(Array));



// aba abba  abca  acca a 
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function filterPalindromes(arr) {
    // Helper function to check if a string is a palindrome
    const isPalindrome = str => str === str.split('').reverse().join('');

    // Filter out only the palindromes
    const palindromes = arr.filter(word => isPalindrome(word));

    return palindromes;
}

// Example 
const arr = ['abc', 'aba', 'ccc', 'dca', 'a'];

// Testing
console.log(filterPalindromes(arr)); // Output: ['aba', 'ccc', 'a']

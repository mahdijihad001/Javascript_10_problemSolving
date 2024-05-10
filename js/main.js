// 1-> Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

function max_value(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

var max_number = max_value(5, 10);
console.log("The maximum number is: " + max_number); 



// 2-> Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)


function check_number(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(check_number(5)); 
console.log(check_number(-8)); 
console.log(check_number(0)); 




// 3 -> Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

function check_divisibility_by10(number) {
    if (number % 10 === 0) {
        return "Divisible by 10";
    } else {
        return "Not divisible by 10";
    }
}

console.log(check_divisibility_by10(20)); 
console.log(check_divisibility_by10(17));
console.log(check_divisibility_by10(0)); 



// 4 -> Solve the problem with Javascript  to check whether a number is even or odd. 

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7)); 

// 5 -> Solve the problem with Javascript  to check whether a character is in the alphabet or not

function check_phabet(character) {

    var lowerCaseChar = character.toLowerCase();

    if (lowerCaseChar >= 'a' && lowerCaseChar <= 'z') {
        return "Alphabet";
    } else {
        return "Not Alphabet";
    }
}

console.log(check_phabet('MOHAMMAD JIHAD')); 
console.log(check_phabet('4')); 
console.log(check_phabet('mohammad jihad')); 


// 6->Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)


function find_max(num1, num2, num3) {
    var maxNumber = num1;

    if (num2 > maxNumber) {
        maxNumber = num2;
    }

    if (num3 > maxNumber) {
        maxNumber = num3;
    }

    console.log(maxNumber);
}

console.log(find_max(5, 10, 3)); 
console.log(find_max(15, 7, 9)); 
console.log(find_max(2, 4, 6)); 

// 7->Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.


var x = 17;
var result = x % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result); 



// 8-> Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.


var numOne = 35;
var numTwo = 40;

if (numOne > 30 && numTwo > 30) {
    console.log("Both numOne and numTwo are greater than 30.");
} else {
    console.log("At least one of numOne and numTwo is not greater than 30.");
}




// 9-> Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)


function checkTeenager(age) {
    if (age >= 13 && age <= 19) {
        console.log("Teenager");
    } else {
        console.log("Not a teenager");
    }
}

checkTeenager(16); 
checkTeenager(21); 
checkTeenager(13); 
checkTeenager(12); 





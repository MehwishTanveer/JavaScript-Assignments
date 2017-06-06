function if1() {
    var num = prompt("Enter a number to check wether it is divisible by 3 or not" , "Type your number");
    var ans = num % 3;
    if (ans === 0){
        alert("Yes it is divisible by 3");
    }
    else{
        alert("Number is not divisible by 3");
    }
}

function if2() {
    var num = prompt("Enter a number to find odd or even", "Type your number here");
    var ans = num % 2;
    if (ans === 0){
    alert("The number is even");
    }
    else{
    alert("The number is odd");
    }
}

function if3() {
    var age = prompt("Enter your age");
    if (age > 18) {
        alert("Old enough");
    }
    else {
        alert("Too young");
    }
}

function if4() {
    var name = prompt("Enter your name");
    if (name === "wish") {
        alert("Your name is same to mine.");
    }
    else{

    }
}

function if5() {
    var num1 = +prompt("Enter first no.");
    var num2 = +prompt("Enter second no.");
    var oper = prompt("Enter operator");

        if (oper === "+") {
            document.write(num1 + num2);
        }

        else if (oper === "-") {
            document.write(num1 - num2);
        }

        else if (oper === "*") {
            document.write(num1 * num2);
        }

        else if (oper === "/") {
            document.write(num1 / num2);
        }
}

function if6() {
    var time = prompt("Enter time in 24hr clock format");
        if (time >= 0000 && time < 1200) {
            alert("Good morning");
        }
        else if (time >= 1200 && time < 1700) {
            alert("Good afternoon");
        }
        else if (time >= 1700 && time < 2100) {
            alert("Good evening");
        }
        else if (time >= 2100 && time <= 2359) {
            alert("Good night");
        }
}

function if7() {
   var firstName = prompt("Enter your name"); 
    if (firstName === "Shah") {        
        document.write("Hello Shah!"); 
    } 
    else {
        document.write("You are not Shah!")
    } 
}

function if8() {
    var num1 = +prompt("Enter first no.");
    var num2 = +prompt("Enter second no.");
    if (num1 > num2) {
        alert(num1);
    }
    else if (num2 > num1) {
        alert(num2);
    }
    else if (num1 === num2) {
        alert(num1);
    }
}

function if9() {
    var month = prompt("Enter month number");
        switch(month) {
        case "1" :
            alert("January");
            break;
        case "2" :
            alert("February");
            break;
        case "3" :
            alert("March");
            break;
        case "4" :
            alert("April");
            break;
        case "5" :
            alert("May");
            break;
        case "6" :
            alert("June");
            break;
        case "7" :
            alert("July");
            break;
        case "8" :
            alert("Augest");
            break;
        case "9" :
            alert("September");
            break; 
        case "10" :
            alert("October");
            break;
        case "11" :
            alert("November");
            break;
        case "12" :
            alert("December");
            break;                       
        default :
            alert("Invalid Month");
        }
}

function if10() {
    var num = +prompt("Enter a number");
    var ans = num % 3;
    switch (ans) {
        case 0 :
        alert("Divisible by 3");
        break;
        default :
        alert("Not divisible by 3");
    }
}

function if11() {
    var time = prompt("Enter time in 24hr clock format");
        if (time >= 0600 && time <= 0900) {
            alert("Breakfast is served");
        }
        else if (time >= 1100 && time <= 1300) {
            alert("Time for lunch");
        }
        else if (time >= 1700 && time <= 2000) {
            alert("It's dinner time");
        }
        else {
            alert("Sorry, you'll have to wait, or go get a snack");
        }
}

function if12() {
    var letter = prompt("Enter a letter");
    var vowels = ["a", "e", "i", "o", "u"];

        var flag = false;
        for (var i = 0; i <= 4; i++) {
            if (letter.toLowerCase() === vowels[i]) {
                flag = true;
                break;
            }
        }
        if (flag === true) {
            alert("It is a Vowel");
        } 
        else {
            alert("It is not a Vowel");
        }
}

function if13() {
     var letter = prompt("Enter a letter or a number");
     var ans = letter.charCodeAt(0);
            if (ans >= 48 && ans <= 57) {
                alert("It is a Number");
            }
            else if (ans >= 65 && ans <= 90) {
                alert("It is a capital alphabetic letter");
            }
            else if (ans >= 97 && ans <= 122) {
                alert("It is a small alphabetic letter");
            }
}

function if14() {
    var year = +prompt("Enter a year in YYYY format");
        
        if (year % 4 === 0){
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    alert("It is a leap year");    
                }
                else {
                    alert("It is not a leap year");
                }
            }
            else{
                alert("It is a leap year");
            }
        }
        else{
            alert("It is not a leap year");
        }
}

function if15() {
    var password = "abcd";
        var pw = prompt("Enter your password");
        if (pw === null || pw === "" || pw === " ") {
            alert("Please enter your password");
        }
        else if (pw === password) {
            alert("Correct!");
        }
        else {
            alert("Incorrect password");
        }
}

function if16() {
    var num = prompt("Enter a number");
        if (num > 0) {
            alert("It is a positive number");
        }
        else if (num < 0) {
            alert("It is a negative number");
        }
        else {
            alert("It is zero");
        }
}

function if17() {
    var age = +prompt("Enter your age");
    var voteable = (age>18) ? "Old enough!": "Too Young!";
    alert(voteable);
}
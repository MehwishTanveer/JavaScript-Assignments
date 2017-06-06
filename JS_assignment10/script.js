function func1() {
    var now = new Date(); 
    var theHr = now.getHours(); 
    var theMin = now.getMinutes(); 
    alert("Current time: "+ theHr + ":" + theMin); 
}

function func2() {
    var now = new Date(); 
    var month = now.getMonth();
    var date = now.getDate();
    var year = now.getFullYear();
    var theHr = now.getHours(); 
    var theMin = now.getMinutes(); 
    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    alert("Current date: "+ date + " " + months[month] + ", " + year + "\nCurrent time: "+ theHr + ":" + theMin); 
}

function func3() {
    var firstName = prompt("Enter your first name.");
    var lastName = prompt("Enter your last name.");
    alert("Welcome " + firstName + " " +lastName);    
}

function func4() {
    var a = +prompt("Enter first number.");
    var b = +prompt("Enter second number.");
    var c = a + b;
    return c;
}


function func5() {
    var a = +prompt("Enter first number.");
    var b = +prompt("Enter second number.");
    var c = prompt("Enter operator symbol.")
    if (c === "+") {
        var d = a + b;
        return d;
    }
    else if (c === "-") {
        var d = a - b;
        return d;
    }
    else if (c === "*") {
        var d = a * b;
        return d;
    }
    else if (c === "/") {
        var d = a / b;
        return d;
    }
}

function func6(num) {
    var b = num * num ;
    alert(b);
}

function func7(num) {
    var fact = 1;
    for (var i = num; i>0; i--) {
        fact = fact * i;
    }
    alert(fact);
}

function func8(num1, num2) {
    var counting;
    for (var i = num1; i<=num2; i++) {
        document.write(i +" <br>");
    }
}

function calculateHypotenuse() {
    var b = +prompt('Enter base measurment.');
    var p = +prompt('Enter perpendicular measurment.');
    
    var b_sq = calculateSquare(b);
    var p_sq = calculateSquare(p);

    function calculateSquare(num) {
        return num * num;
    }

    var hypo = b_sq + p_sq;
    alert(Math.sqrt(hypo));
}

function longestWord() {
    var i, word;
    var longest = "";
    for (i = 0; i < arguments.length; i++) {
        word = arguments[i];
        if (word.length > longest.length)
            longest = word;
    }
    alert(longest);
}


function largestNum() {
    var i, num;
    var largest = 0;
    for (i = 0; i < arguments.length; i++) {
        num = arguments[i];
        if (num > largest)
            largest = num;
    }
    alert(largest);
}

function area1(b, p) {
    var area = b * p;
    alert(area);
}

function area2(b, p) {
        var area = b * p;
     alert(area);
}

function sortArray(sortAry) {
    sortAry.sort();
    alert(sortAry);
}
   
// Extra Funkari
/*function dupRemoveArry () {
    var lista = [1,4,5,1,1,3,5,6,4,4,3];
    //Sort the array in case it isn't sorted
    lista.sort();
    //Object to store duplicates and unique numbers
    var listNumbers = {
        "Duplicate Numbers": [],
        "Unique Numbers": []
    };
    for (var i = 0; i < lista.length; i++) {
        //check if it is not equal to the index of the array before it and after. if it isn't, that means its unique, push it in the uniques array.
        if (lista[i] !== lista[i-1] && lista[i] !== lista[i+1]) {
        alert(listNumbers["Unique Numbers"].push(lista[i]) );
        //console.log("hi")
        } else {
        alert( listNumbers["Duplicate Numbers"].push(lista[i]) );
        }
    }
    return listNumbers;
    }

    here return sum value
*/
    
    
function func14(num_array) {
    var sum = 0;
    for (i = 1; i < num_array.length; i++) {
        sum = sum + num_array[i];
    }
    alert(sum);
}

function func15(base, pwr) {
    var ans = 1;
    for(var i=0; i<pwr ; i++){
        ans *= base;
    }
     alert(ans);
}

function func18() {
    var x = prompt("Enter your number.");
    var y = x.toString();
    var z = y.split("").reverse().join("");
    var result = Number(z);
    alert(result);
}

// function titleCase1() {
//     var splitStrx = prompt("Enter your first name.");
//     var y =splitStrx.toUpperCase();

//  alert(y);
//        //var str = "Apples are round, and Apples are Juicy.";
//       //  alert(splitStr.substring(0,1).toUpperCase()+splitStr.substring(1).toLowerCase() );
//       // splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     

// }


function func19() {
    var str = prompt("Enter palindrome string.");
    str = str.toLowerCase();
    var flag = true;
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charAt(i) === str.charAt(str.length - (i+1))) {

        }         
        else {
            flag = false;
            break;
        }
    }
        
    if (flag) {
        alert("It is palindrome");
    }
    else {
        alert("It is not palindrome");
    }
}

function func20() {
    var text = prompt("Enter a sentence.");
    text = text.toLowerCase();
    text = text.slice(0,1).toUpperCase() + text.slice(1);
    for (var i=0; i<text.length; i++){
        if (text.charAt(i) === " "){
            text = text.slice(0,i+1)+text.slice(i+1,i+2).toUpperCase()+text.slice(i+2);
            i++;
        }
    }
    alert("Output: " + text);
}

function func21() {
    var string = prompt("Enter a sentence.");
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    alert(word);
}

function func22(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i=0; i<str.length; i++) {
        if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
            count++;
        }
    }
    alert("Output: " + count);
}

function func23(arg) {
    alert(typeof arg);
}

function func24(str) {
    var uniq = "";
    for (var i=0; i<str.length; i++) {
        if (uniq.indexOf(str.charAt(i)) === -1)
            uniq += str[i] //concatinating two strings
    }
    alert(uniq);
}

function func25(str, char) {
    var count = 0;
    for (var i=0; i<str.length; i++) {
        if (str.charAt(i) === char) 
            count++;
    }  
    alert("Output: " + count);
}

function calculateAge(b_yr){
    var nowTime = new Date();
    var now = nowTime.getTime();
    var oldTime = new Date();
    oldTime.setFullYear(b_yr);
    var old = oldTime.getTime();
    var age = now - old;
    age = age / ((1000 * 60 * 60 * 24)  * 365);
    //alert(age);
    var format = "<p><b> The Age Calculator </b></p><p>Current Year: "  + nowTime.getFullYear() + "</p><p>Birth Year: " + oldTime.getFullYear() + "</p><p>You are either " + Math.floor(age) + " or " + Math.ceil(age) + " years old</p>"
    document.getElementById("ageCalculate").innerHTML = format;
}

// var minAge = 18;
/*function _calcAge() {

    var date = new Date(document.getElementById("date").value);
    var today = new Date();

    var timeDiff = Math.abs(today.getTime() - date.getTime());
    //var age1 = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
        var age1=Math.ceil(timeDiff/31557600000);
    return age1;

}
//Compares calculated age with minimum age and acts according to rules//
function _setAge() {
        var date = new Date(document.getElementById("date").value);
    var today = new Date();
    var age = _calcAge();
    alert("my age is " + age +"  year Old current  "+today+ "  my date of birth   "+date);
    // if (age < minAge) {

    //   alert(age);
    // } else

        //  alert("Welcome to my Site");
} */

function calculateSupply(age, amount){
    var maxAge = 85;
    var snack = "Oreo";
    var ageLeft = maxAge - age;
    var qty = ageLeft * amount;
    var output = "<p><b> The Lifetime Supply Calculator </b></p><p>Favourite Snack: " + snack + "</p><p>Current Age: " + age + "</p><p>Estimated max age: " + maxAge + "</p><p>Amount of snack per day: " +  amount +"</p><p> You will need " + qty + " Oreo biscuits until the old age " + maxAge+"</p>" ; 
    document.getElementById("supply").innerHTML= output;
}

function calcCircumference(r){
    // 2*pi*r
    var pi = 3.14159265359;
    var circumference = 2*pi*r;
    output = "The circumference is " + circumference.toFixed(2);
    document.getElementById("circumference").innerHTML = output;
}

function calcArea(r){
    // pi*r^2
    var pi = 3.14159265359;
    var area = pi*r*r;
    output = "The area is " + area.toFixed(2);
    document.getElementById("area").innerHTML = output;
}

function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}


function date1() {
    var num = prompt("Enter a positive number");
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    alert("Number: "+num);
    alert("Round off value of the number: "+ round);
    alert("Floor value of the number: " +floor);
    alert("Ceil value of the number: "+ ceil);
}

function date2() {
    var num = prompt("Enter a negative number");
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    alert("Number: "+num);
    alert("Round off value of the number: "+ round);
    alert("Floor value of the number: " +floor);
    alert("Ceil value of the number: "+ ceil);
}

function date3() {
    var num = prompt("Enter a number");
    var absolute = Math.abs(num);
    alert("The absolute value of "+num +" is "+ absolute);
}

function date4() {
    var bigDecimal = Math.random(); 
    var improvedNum = (bigDecimal * 6) + 1; 
    var numberOfStars = Math.floor(improvedNum);
    alert("Random dice value "+ numberOfStars); 
}

function date5() {
    var bigDecimal = Math.random(); 
    var improvedNum = (bigDecimal * 2) + 1; 
    var numberOfStars = Math.floor(improvedNum);
    
    if (numberOfStars === 2) {
        alert("Random coin value: " + numberOfStars +" Heads");
    }
    else {
        alert("Random coin value: " + numberOfStars +" Tails");   
    }
}

function date6() {
    var bigDecimal = Math.random(); 
    var improvedNum = (bigDecimal * 100) + 1; 
    var value = Math.floor(improvedNum);
    alert("Random number between 1 and 100 : "+ value);
} 

function date7() {
    var weightInput = prompt("Enter your weight.");
    var weight;
    var flag = true;
    for (var i = 0; i<weightInput.length; i++) {
        weight = weightInput.slice(0,i+1);
        if (isNaN(weight)){
            flag = false;
            break;
        }
    }
    if (flag) {
        alert("The weight of user is " + weight+ " kilograms");
    }
    else {
        weight = weight.slice(0, weight.length-1);
        alert("The weight of user is " + weight + " kilograms");
    }
}

function date8() {
    var bigDecimal = Math.random(); 
    var improvedNum = (bigDecimal * 10) + 1; 
    var secretNum = Math.floor(improvedNum);
    var value = prompt("Enter a number between 1 to 10.")
    if (value == secretNum) {
        alert("Congo!")
    }
    else {
        alert("Try Again!")
    }
}

function date9() {
    var rightNow = new Date();
    alert(rightNow);
}

function date10() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var d = new Date(); 
    var currentMonth = d.getMonth(); 
    alert(months[currentMonth]);
}

function date11() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(); 
    var currentDay = d.getDay();
    alert(days[currentDay].slice(0,3)); 
}

function date12() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(); 
    var currentDay = d.getDay(); 
    var day = days[currentDay];
    var funDays = ["Sunday", "Saturday"];
    if (day === funDays[0] || day === funDays[1]) {
        alert("It's Fun day");
    }
}

function date13() {
    var d = new Date(); 
    var dayOfMonth = d.getDate();
    if (dayOfMonth <= 15) {
        alert("First fifteen days of the month.");
    }
    else {
        alert("Last fifteen days of the month.");        
    }
}

function date14() {
    var d = new Date(); 
    var millsSec = d.getTime(); 
    var min = (millsSec)/(60*60*1000);
    document.write("Current date: " + d + "<br />Elapsed milliseconds since January 1, 1970: "+ millsSec +"<br />Elapsed minutes since January 1, 1970: " +min)
}

function date15() {
    var d = new Date(); 
    var currentHrs = d.getHours(); 
    if (currentHrs <= 12) {
        alert("Its A.M");
    }
    else {
        alert("Its P.M");        
    }
}

function date16() {
    var doomsday = new Date("December 31, 2020");
    alert(doomsday);
}

function date17() {
    var msDiff = new Date().getTime() - new Date("June 13, 2016").getTime(); 
    var daysTillRamdan = Math.floor(msDiff / (1000 * 60 * 60 * 24)); 
    alert(daysTillRamdan + " days passed since 1st Ramdan, 2016.");
}

function date18() {
    var msDiff = new Date().getTime() - new Date("January 1, 2017").getTime(); 
    var seconds = Math.floor(msDiff / (1000 * 60));
    alert(seconds);
}

function date19() {
    var currentTime = new Date();
    // var oldTime = currentTime; //wrong b/c both date variables are just references to the same date object in memory
    var oldTime = new Date(currentTime);
    oldTime.setHours(oldTime.getHours()-1);
    alert(currentTime + "  " + oldTime);
}

function date20() {
    var currentTime = new Date();
    var oldTime = new Date(currentTime);
    oldTime.setFullYear(oldTime.getFullYear()-100);
    alert(currentTime + "  " + oldTime);
}

function date21() {
    var age = prompt("Enter your age.");
    var d = new Date();
    alert("Your age is " + age + "\nYour birth year is " + (d.getFullYear()-age));
}

function date22() {
    var CustomerName = prompt("Enter your name.");
    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var d = new Date(); 
    var CurrentMonth = d.getMonth();
    CurrentMonth = months[CurrentMonth];
    var NumberOfUnits = 450;
    var ChargesPerUnit = 14;
    var NetAmountPayable; //(within Due Date)
    var LatePaymentSurcharge = 500;
    var GrossAmountPayable; //(after Due Date)
    NetAmountPayable = NumberOfUnits * ChargesPerUnit;
    GrossAmountPayable = NetAmountPayable + LatePaymentSurcharge;
    document.write("<h1>K-Electric Bill</h1>"
    + "Customer Name: <b>" + CustomerName + "</b> <br/>" 
    + "Current Month: <b>" + CurrentMonth + "</b> <br/>" 
    + "Number of unit: <b>" + NumberOfUnits + "</b> <br/>"
    + "Charges of unit: <b>" + ChargesPerUnit + "</b> <br/> <br/>"
    + "Net amount payable(Within due date): <b>" + NetAmountPayable.toFixed(2) + "</b> <br/>"
    + "Late payment surcharges: <b>" + LatePaymentSurcharge.toFixed(2) + "</b> <br/>"
    + "Gross amount payable(After due date): <b>" + GrossAmountPayable.toFixed(2) + "</b><br/>"
    );
}
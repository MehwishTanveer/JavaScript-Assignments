function var1() {
    var age = 22;
    alert( "I am "+age+ " years old.");
} 

function var2() {
    var originalNum = 29;
    var NumtobeAdded = 5;
    var newNum = originalNum + NumtobeAdded;
    alert (newNum);
}

function var3() {
    var num;
    document.write("Value after variable declaration is undefined."+ "<br>");
    num = 3;
    document.write("Initial value: " + num + "<br>");
    num = ++num;
    document.write("Value after increment: " + num + "<br>");
    num = num + 7;
    document.write("Value after addition: " + num + "<br>");
    num = --num;
    document.write("Value after decrement: " + num + "<br>");
    num = num % 3;
    document.write("Remainder: " + num + "<br>");
}

function var4() {
    var price = 600;
    var qty = 5;
    var total = price * qty;
    document.write("The total cost to buy " + qty + " tickets to a movie is " + total + "PKR.");
}

function var5() {
    document.write("4 x 1 = " + 4 * 1 + "<br>" +
                   "4 x 2 = " + 4 * 2 + "<br>" +
                   "4 x 3 = " + 4 * 3 + "<br>" +
                   "4 x 4 = " + 4 * 4 + "<br>" +
                   "4 x 5 = " + 4 * 5 + "<br>" +
                   "4 x 6 = " + 4 * 6 + "<br>" +
                   "4 x 7 = " + 4 * 7 + "<br>" +
                   "4 x 8 = " + 4 * 8 + "<br>" +
                   "4 x 9 = " + 4 * 9 + "<br>" +
                   "4 x 10 = " + 4 * 10 + "<br>" );
}

function var6() {
    var Cent = 12;
    var F = (Cent * 9/5) + 32;
    document.write(Cent + " degree Centigrade is " + F + " Farenheit. <br>");
    var Far = 68;
    var C = (Far -32) * 5/9;
    document.write(Far + "  Farenheit is " + C + " degree Centigrade.");
}

function var7() {
    var pr1 = 560;
    var pr2 = 200;
    var qty1 = 2;
    var qty2 = 5;
    var ship = 150;
    var total = pr1 * qty1 + pr2 * qty2 + ship;
    document.write("Price of item 1 is " + pr1 + "<br>" +
                   "Quantity of item 1 is " + qty1 + "<br>" +
                   "Price of item 2 is " + pr2 + "<br>" +
                   "Quantity of item 2 is " + qty2 + "<br>" +
                   "Shipping Charges " + ship + "<br>" +
                   "Total cost of your order is " + total );
}

function var8() {
    var total = prompt("Total Marks");
    var obt = prompt("Marks Obtained");
    var percent = (obt / total) * 100;
    document.write("Marks Sheet <br>" + 
                   "Total Marks: "+ total + "<br>" +
                   "Marks Obtained: "+ obt + "<br>" +
                   "Percentage: " + percent + "% <br>");
}

function var9() {
    
}

function var10() {
    var num = 3;
    num = ((num + 5) * 10) / 2;
    alert(num);
}

function var11() {
   var currentYear = +prompt("Write current year");
   var birthYear = +prompt("Write your birth year");
   var age = currentYear - birthYear;
   alert("They are either " + age++ +" or " + age + " years old.")   
}

function var12() {
    var radius = 10;
    var circum = 2 * 3.142 * radius;
    var area = 3.142 * (radius * radius);
    document.write("The Geometrize: <br />" +
                    "Radius of a circle = " + radius + " <br />" +
                    "Circumference of a circle = " + circum + " <br />" +
                    "Area of a circle = " + area + " <br />" );
}

function var13() {
    var num = 10;
    document.write("The value of a is: " + num + "<br />" +
                    "................................. <br />"+
                    "The value of ++a is: " + ++num + "<br />"+
                    "Now the value of a is: " + num + "<br /> <br />" +
                    "The value of a++ is: " + num++ + "<br />"+
                    "Now the value of a is: " + num + "<br /> <br />" +
                    "The value of --a is: " + --num + "<br />"+
                    "Now the value of a is: " + num + "<br /> <br />" +
                    "The value of a-- is: " + num-- + "<br />"+
                    "Now the value of a is: " + num + "<br /> <br />"  );
}

function var14() {
    var snake = "Prince biscuits";
    var age = 22;
    var maxAge = 50;
    var amount = 2;
    var days = ((maxAge- age) * 365);
    var total = days * amount;
    document.write("The life time supply calculator: <br /> <br /> " +
                    "Favourite Snacks: " + snake +"<br /> " +
                    "Current Age: " + age +"<br /> " +
                    "Estimated Max Age: " + maxAge +"<br /> " +
                    "Amount of Snacks per day: " + amount +"<br /> <br />" +
                    "You will need " + total +" "+ snake + " to last you until the ripe old age of " + maxAge);
}
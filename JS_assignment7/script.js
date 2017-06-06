function loop1() {
    for (i=0 ; i<5; i++) {
    document.write("Hello World <br />");
    }
}

function loop2() {
    var num = 1;
    for (i=0; i<=9; i++) {
        document.write(num++ +"<br />");
    }
}

function loop3() {
     var t = prompt("Enter Table no.?");
     var v = prompt("How long do you want to run table?") ;
        document.write("<h1 class='head'> Table of " + t + " till " + v + "</h1>")
        for(i=1; i<=v; i++) {
        document.write("<div>" +t+" x " + i + " = " + (t * i) + "</div>" + "<br/>");
        }
}

function loop4() {
    var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    for (i=0; i<=5; i++) {
        document.write(phone[i] + "<br>");
    }
}

function loop5(){
   var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
   for (i=0; i<fruits.length; i++) {
        document.write(fruits[i] + "<br>");
    }
    for (i=0; i<fruits.length; i++) {
        document.write("<br> Elements at index " +[i] + " is " + fruits[i] + "<br>");
    }
}

function loop6(){
    var N = prompt("enter no. of items");
    var items = []; 
    for (i=0; i<N; i++){
        var item = prompt("Enter value for index " + i);
        items.push(item);
    }
    document.write("Number of items = " + N + "<br> Items :<br>");
    for (i=0; i<items.length; i++) {
        document.write(items[i] + "<br>");
    }
}

function loop7(){
    document.write("<h3> Counting </h3> <br>"); 
    for (var i=0; i<=15; i++){
        document.write(i + ", ");
    }
    document.write("<br> <h3>Reverse Counting </h3> <br>"); 
    for (var i=10; i>=1; i--){
        document.write(i + ", ");
    }
    document.write("<br> <h3> Even </h3> <br>"); 
    for (var i=0; i<=20; i+=2){
        document.write(i + ", ");
    }
    document.write("<br> <h3> Odd </h3> <br>"); 
    for (var i=1; i<=19; i+=2){
        document.write(i + ", ");
    }
    document.write("<br> <h3> Series </h3> <br>"); 
    for (var i=2; i<=20; i+=2){
        document.write(i + "K, ");
    }
}

function loop8(){
    var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    var matchFound = false;
    for (var i = 0; i< items.length; i++) {
        if (order.toLowerCase() === items[i]) {
            matchFound = true;
            alert("It is available!");
            break;
        }
    }
    if (matchFound === false) {
        alert("We are sorry");
    } 
}

function loop9() {
    var num = [24, 53, 78, 91, 12];
    alert("Largest number of the array is "+ Math.max(...num));
}

function loop10() {
    var num = [24, 53, 78, 91, 12];
    alert("Smallest number of the array is "+ Math.min(...num));
}

function loop11() {
    var i;
    for (i=5; i<=100; i+=5) {
        document.write(i + ", ");
    }
}

function loop12() {
    var students = ["Ali", "Sami", "Taha", "Inam"];
    var scores  = [58, 73, 89, 90];
    
}

function loop13() {
    var scores  = [12, 45, 3, 22, 34, 50]; 
    var input = +prompt("Enter stop value");
    var index = scores.indexOf(input);
    if (index !== -1)
        for (i=0; i<=index; i++) {
            document.write(scores[i] + ",");
        }
    else 
        document.write("Not found!");
}

function loop14() {
    var multiArray = [  
                        [1,2,3], 
                        [4,5,6], 
                        [7,8,9]
                    ]; 
    var i, j;
    for (i=0; i<3; i++){
        for (j=0; j<3; j++){
            document.write(multiArray[i][j] + " ");
        }
        document.write("<br />");
    }
}

function loop15() {
    var num = +prompt("Enter a number");
    if (num < 0) {
        alert ("Enter a positive number");
    }
    else {
        for (var i=num; i>=0; i-=0.5)
            document.write(i + ", ");
    }
}

function loop16() {
      for (var i=0; i<=20; i++) {
          if (i%2 === 0) {
              document.write(i + " is even <br>")
          }
          else 
              document.write(i + " is odd <br>")
      }    
}

function loop17() {
        var product = 1;
        for (var i=0; i<=8; i++) {
            if (i%2 !== 0) {
                product *= i;
            }
        }
        alert(product);
}
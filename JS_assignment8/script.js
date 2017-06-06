function string1() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your lasr name");
    var fullName = alert(firstName + " " +lastName);
}

function string2() {
    var mobile = prompt("Enter your favourite mobile phone model.");
    var length = mobile.length();
    alert("My favourite mobile phone is : "+ mobile + "<br /> Length of string: "+ length); 
}

function string3() {
    var country = "Pakistan";
    var indexing = country.indexOf("n");
    alert("country : "+ country + "<br /> Index of 'n' : " + indexing);
}

function string4() {
    var hi = "Hello World";
    var indexing = hi.lastIndexOf("l");
    alert("String : "+ hi +"<br /> Last index of 'l' : "+ indexing);
}

function string5() {
    var country = "Pakistani";
    var indexing = country.charAt(3);
    alert("country : "+ country + "<br /> Index of 'n' : " + indexing);
}

function string6() {
    var city = "Hyderabad";
    var newCity = "Islam" + city.slice(5);
    alert("City : " + city+ "<br /> After replacement : " + newCity);
}

function string7() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var replace = message.replace(/and/g, "&");
    alert("Message: " +message+ "<br /> After replacement : " + replace);
}

function string8() {
    var strng = "472";
    var num = parseInt(strng);
    var type1 = typeof(strng);
    var type2 = typeof(num);
    alert("Value : " + strng + " Type : " + type1 + "<br /> Value : " + num + " Type : " + type2+ "<br /> Value : ");
}

function string9() {
    var url = prompt("Enter your favourite website URL.");
    var domain = url.slice(4);
    alert("URL : " + url + "Domain :" +domain);
}

function string10() {
    var snakes = prompt("Enter your favourite snake.");
    var upper = snakes.toUpperCase();
    alert("User Input : " + snakes + "  Upper Case : " + upper);
}

function string11() {
    var network = ("Enter your mobile network in capital letters.");
    var lower = network.toLowerCase();
    alert("User Input : " + network + "  Lower Case : " + lower);
}

function string14() {
    var num = 35.36;
    alert("Number : " +num +"\nResult : " + num.toString() * 100);
}

function string15() {
    var a = "3";
    var b = "3";
    alert("a is " +a + "\nb is " +b + "\na + b is " +(a+b) +"\na - b is " +(a-b));
}

function string16() {
    var userName = prompt("Enter user name.");
    var char = [",", "."];
    if (userName === char()) {
        alert("Enter valid name.");
    }
}

function string17() {
    var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    var item = prompt("Enter bakery item name.");
    for (var i = 0; i <= items.length; i++) {
        var flag = false;
            if (item.toLowerCase() === items[i]) {
                flag = true;
                    break;
                }
            }
                if (flag === true) {
                    alert(" is available at index");
                } 
            else {
                alert("It is not available");
            }
    }















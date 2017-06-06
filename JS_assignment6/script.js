function array1() {
    var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. PHIL", "PHD"];
    alert("Qualifiactions:\n" + 
    "1) " + edu[0] +"\n" +
    "2) " + edu[1] +"\n" +
    "3) " + edu[2] +"\n" +
    "4) " + edu[3] +"\n" +
    "5) " + edu[4] +"\n" +
    "6) " + edu[5] +"\n" +
    "7) " + edu[6] +"\n" +
    "8) " + edu[7] +"\n" );
}

function array2() {
    var movies = [];
    movies[0] = "Avengers: Age of Ultron";
    movies[1] = "Spectre";
    movies[2] = "Jurasic World";
    movies[3] = "Inside Out";
    var length = movies.length;

    document.write("Top movies of 2015: <br>" +
                    "1) " + movies[0] +"<br>" +
                    "2) " + movies[1] +"<br>" +
                    "3) " + movies[2] +"<br>" +
                    "4) " + movies[3] +"<br>" +
                    "Length of the array: " + length);
}

function array3() {
    var cars = ["Audi", "Volvo", "Ford", "Lamborghini"];
    var len = cars.length;
    len--;

    document.write("Favourite Cars: <br>" +
                    cars +"<br>" +
                    "First index of the Array: 0 <br>" +
                    "Car at first index of the Array: " + cars[0] + "<br>" +
                    "Last index of the Array: " + len + "<br>" +
                    "Car at last index of the Array: " + cars[len]);
}

function array4() {
    var students = ["Shah", "Wish", "Sab"];
    var total = 500;
    var obt = [400, 390, 480];
    var per = [];
    for (var i=0; i<obt.length; i++) {
        per.push(obt[i]/total * 100);
    }
    

    document.write("Score of " + students[0] + " is " + obt[0] + ". Percentage: " + per[0] + "% <br>" +
                   "Score of " + students[1] + " is " + obt[1] + ". Percentage: " + per[1] + "% <br>" +
                   "Score of " + students[2] + " is " + obt[2] + ". Percentage: " + per[2] + "% <br>" );
} 

function array5() {
    var scores = [320, 230, 480, 120];
    document.write("Score of students: " + scores + "<br> Ordered Score of students: " + scores.sort());
}

function array6() {
    var fruits = ["strawberry", "apple", "orange", "banana"];
    document.write("Fruits list: "+ fruits + "<br> Ordered fruits list: "+ fruits.sort()); 
}

function array7() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selectedCities = cities.slice(2, 4);
    document.write("Cities list: " + cities + "<br> Selected cities list: " + selectedCities);
}

function array8() {
    var arr = ["This", "is", "my", "cat"];
    document.write(arr + "<br>" + arr.toString());
}

function array9() {
    var devices = ["keyboard", "mouse", "printer", "monitor"];
    document.write("Devices: "+devices+ "<br />")
    for (var i=0; i<=3; i++) {
       document.write("Out: " + devices.shift()+ "<br />");
    }
}

function array10() {
    var devices = ["keyboard", "mouse", "printer", "monitor"];
    document.write("Devices: "+devices+ "<br />")
    for (var i=0; i<=3; i++) {
       document.write("Out: " + devices.pop()+ "<br />");
    }
}

function array11() {
    var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    for (var i=0; i<=5; i++) {
    document.write("<select name='mobile' <option>" + phone + "</option> </select> <br />" );
    }
}

function array12() {
    var Arr=[[1,2],[3,4],[5,6]];
    document.write(Arr);
}






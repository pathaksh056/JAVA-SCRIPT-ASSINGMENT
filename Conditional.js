document.write("Solutions")
document.write("1. Write a JavaScript conditional statement to sort three numbers." +"<br>")
//Solution of Q1.
/*var x= 0;  
var y=-1;  
var z= 4;  
if (x>y && x>z)  
{  
        if (y>z)  
        {  
            alert(x + ", " + y + ", " +z);  
        }  
        else  
        {  
           alert(x + ", " + z + ", " +y);  
        }  
}  
else if (y>x && y >z)  
{  
        if (x>z)  
        {  
           alert(y + ", " + x + ", " +z);  
        }  
        else  
        {  
             alert(y + ", " + z + ", " +x);  
        }  
}  
else if (z>x && z>y)  
{  
        if (x>y)  
        {  
            alert(z + ", " + x + ", " +y);  
        }  
        else  
        {  
           alert(z + ", " + y + ", " +x);  
        }  
}   */ 
document.write("2. Write a JavaScript program to construct the following pattern, using a nested for loop" +"<br>");
// Solution of Q2.
/*for (var x=0; x<5; x++) {
    for(var y=5; y>x;y--)
    {
     document.write("*");  
    }
    document.write("<br>");
 } */
 document.write("3. Write a JavaScript function to hide email addresses to protect from unauthorized user" +"<br>");
 // Solution of Q3.
/*protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
document.write(protect_email("eddygrant@example.com"));
 */
document.write("4. Write a JavaScript function to capitalize the first letter of each word in a string" +"<br>");
// Solution of Q4.
/*capitalize_words = function (str) {
    
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
};
document.write(capitalize_words("Hi from skillsanta")); */
document.write("5. Write a javascript function to print the Fibonacci series of n times." +"<br>");

// Solution of Q5.
/*const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, c;
document.write('Fibonacci Series:' + '<br>');
for (let i = 1; i <= number; i++) {
    document.write(n1 +"<br>");
    c = n1 + n2;
    n1 = n2;
    n2 = c;
}
 */
document.write("6. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case." +"<br>");
swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
document.write(swapcase('sKiLLsaNTA'));
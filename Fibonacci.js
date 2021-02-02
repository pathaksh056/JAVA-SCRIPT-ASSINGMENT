const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, c;

document.write('Fibonacci Series:' + '<br>');

for (let i = 1; i <= number; i++) {
    document.write(n1 +"<br>");
    c = n1 + n2;
    n1 = n2;
    n2 = c;
}
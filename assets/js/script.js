var numero_1 = parseInt(prompt("ingrese un numero mayor a 0."));
var numero_2 = parseInt(prompt("ingrese un segundo numero mayor a 0."));
var c = parseInt(prompt("Ingrese temperatura en °Celsius."));
var dia = parseInt(prompt("Ingrese un numero de varios digitos"));
var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese un segundo numero"));
var num3 = parseInt(prompt("Ingrese un tercer numero"));
var num4 = parseInt(prompt("Ingrese un cuarto numero"));
var num5 = parseInt(prompt("Ingrese un quinto numero"));

var año = parseInt(dia / 365);
var semana = parseInt(dia / año / 7);
var dia_r = parseInt(año - semana);

var k = parseInt(c + 273.15);
var f = parseInt((c * 9) / 5 + 32);
var suma_total = parseInt(num1 + num2 + num3 + num4 + num5);
var promedio = parseInt((num1 + num2 + num3 + num4 + num5) / 5);

document.write("La suma es: " + (numero_1 + numero_2));
document.write("<br>");
document.write("La resta es: " + (numero_1 - numero_2));
document.write("<br>");
document.write("La multiplicacion es: " + numero_1 * numero_2);
document.write("<br>");
document.write("La division es: " + numero_1 / numero_2);
document.write("<br>");
document.write("El modulo es: " + (numero_1 % numero_2));
document.write("<br>");
document.write(
  "La temperatura en Kelvin es " +
    k.toFixed(2) +
    " y la temperatura en Fahrenheit es: " +
    f.toFixed(2)
);
document.write("<br>");
document.write(año + " año, " + semana + " semana, " + dia_r + " días. ");
document.write("<br>");
document.write(
  "La suma de todos los número es: " +
    (num1 + num2 + num3 + num4 + num5) +
    " y el promedio es: " +
    promedio
);

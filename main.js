/* 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */
function numMayor(num1,num2){
    return num1>num2
}
//Ejemplo
console.log (numMayor(4,2))//true
console.log (numMayor(1,4))//false


/* 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes. */
function numIguales(num1,num2){
    if(num1===num2){
        return "Son númros iguales"
    }else{
        return "No son números iguales"
    }
}
//Ejemplo
console.log (numIguales(2,2))//"Son númros iguales"
console.log (numIguales(1,4))// "No son números iguales"


/* 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */
function mayorIgual (num1,num2){
    if (num1===num2){
        return "Son números iguales"
    }else if (num1>num2){
        return num1 +" es mayor"
    }else{
        return num2 +" es mayor"
    }
}
//Ejemplo
console.log (mayorIgual(2,2))//Son númros iguales
console.log (mayorIgual(7,4))// 7 es mayor
console.log (mayorIgual(1,4))// 4 es mayor


/* 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
chico. */
function numMenor(num1,num2,num3){
    alert(Math.min(num1,num2,num3)); 
}
//Ejemplo
console.log (numMenor(1,2,3))//1
console.log (numMenor(7,4,10))// 4


/* 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad. */


function altaMayor(persona1,persona2){
    let persona1={
    nombre: "laura",
    altura:170,
    edad:22,
    }
    let persona2={
    nombre: "Raul",
    altura: 173,
    edad:18,
    } 
    if(persona1.altura>persona2.altura){
        alert( persona1.name + "es más alto")
    }else if(persona1.altura<persona2.altura){
        alert( persona2.name + "es más alto")
    }else if(persona1.edad<persona2.edad){
        alert( persona2.name + "es mayor")
    }else if(persona1.edad>persona2.edad){
        alert( persona1.name + "es mayor")
    }
}
console.log(altaMayor(persona1,persona2))

/* 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */
function conducir(){
    let nombre = prompt("Cual es tu nombre?")
    let altura = prompt("Cual es tu altura?")
    let edad= parseInt (prompt("Cual es tu edad?"))
    let vision = parseInt (prompt("Como es tu vision del 1-10?"))
    if(altura>150 && edad>=18 && vision>=8){
        alert(nombre + " estás capacitado para conducir");
    }else {
        alert(nombre + " no estás capacitado para conducir");
    };
}
console.log(conducir())

/* 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida. */

function paseVip(){
    let nombre = prompt("Cual es tu nombre?")
    let entrada= prompt("Cuentas con entrada?")
    let tipoPase = prompt("Si tienes pase, es VIP o normal?")
    if(nombre== "sofia" || tipoPase=="vip"){
        alert("Bienvenido! tienes entrada libre");
    }else if(entrada=="si"){
        let uso= prompt(" Deseas utilizar tu entrada?");
        if (uso=="si"){
            alert("Bienvenido!");
        }else{
            alert("Gracias por visitarnos")
        }
    }else{
        let compra= prompt("Desea comprar una entrada?");
        if(compra=="si"){
            let dinero= parseInt(prompt("Dijíte cuánto dinero tiene disponible?"));
            if(dinero>=1000){
                alert("Bienvenido! Ya tienes tu entrada");
            }else{
                alert("Compra rechazada");
            }
        }else{
            alert("Gracias por visitarnos")
        }
    }
}
console.log(paseVip())

/* 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente. */
function JuegoAdivinanza(){
    let numeroIncognita= Math.floor(Math.random()*10)+1;
    let numeroIngresado= parseInt(prompt("Adivina el número del 1-10"))
    if(numeroIncognita===numeroIngresado){
        alert("Ganaste, haz adivinado el numero."); 
    } 
    else if(numeroIngresado > numeroIncognita) {
        alert("el numero ingresado es mayor, vuelve a intentarlo");
    } 
    else{ alert("el numero ingresado es menor, vuelve a intentarlo")
    }
    let numeroIngresado2= parseInt(prompt("Adivina el número del 1-10"))
    if(numeroIncognita===numeroIngresado2){
        alert("Ganaste, haz adivinado el numero.");
    }
    else if(numeroIngresado2 > numeroIncognita) { 
        alert("el numero ingresado es mayor, vuelve a intentarlo");
    }
    else{
        alert("el numero ingresado es menor, vuelve a intentarlo")
    }
    let numeroIngresado3= parseInt(prompt("Adivina el número del 1-10"))
    if(numeroIncognita===numeroIngresado3){
        alert("Ganaste, haz adivinado el numero.");
    }
    else if(numeroIngresado3 > numeroIncognita) { 
        alert("el numero ingresado es mayor, haz usado todos tus intentos");
    }
    else{
        alert("el numero ingresado es menor,  haz usado todos tus intentos")
    }
}
console.log(JuegoAdivinanza())


/* 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad. */ 
function edades(){
    let edad= parseInt(prompt("Cuál es tu edad?"));
    if (edad>=0 && edad<=12){
        alert("Eres un infante")
    } else if (edad>=13 && edad<=18){
        alert("Eres un adolecente")
    } else if (edad>=19 && edad<=45){
        alert("Eres un mayor joven")
    }else if (edad>=46 && edad<=100 ){
        alert("Eres un ansiano")
    }else if (edad>100 ){
        alert("Realmente esa es tu edad?")
    }
}
console.log(edades())


/* 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.  */

function juego(){
    let opcionJudador1 = prompt("Judador 1: Elije entre Piedra, Papel o tijera","");
    let opcionJudador2 = prompt("Judador 2: Elije entre Piedra, Papel o tijera","");
    if(opcionJudador1==opcionJudador2){
        alert("Tenemos empate");
    }else if (opcionJudador1=="piedra" && opcionJudador2=="papel"){
        alert("Jugador 2 gana!");
    }else if (opcionJudador1=="piedra" && opcionJudador2=="tijera"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="papel" && opcionJudador2=="piedra"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="papel" && opcionJudador2=="tijera"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="tijera" && opcionJudador2=="piedra"){
        alert("Jugador 2 gana!");
    }else if (opcionJudador1=="tijera" && opcionJudador2=="papel"){
        alert("Jugador 1 gana!");
    }else{
        alert("Elección incorrecta!-han hecho trampa")
    }
}
console.log(juego())



let saludo = prompt("buen dia").toLowerCase() 
// if-else -------------------------------------------------------
if(saludo == "buen dia"){
    console.log("Bienvenido!!")
}else if(saludo == "hola"){
    console.log("Hola!")
}
else{
    console.log("Que Mal Educado :(")
} 
//for ----------------------------------------------------------
for (let contemos = 0; contemos < 101; contemos++) {
    console.log("contemos hasta 100, ahora vamos por el "+contemos);
    if(contemos==10){
        console.log("era un monton!!!")
        break
    }
} 
// while --------------------------------------------------------
let palabra = prompt("Cual es el mejor lugar para aprender programacion?")
while(palabra != "coder"){
    console.log("en serio?");
    palabra = prompt("Cual es el mejor lugar para aprender programacion?")
} 
// funcion ------------------------------------------------------
function adivina(numero){
    numero = parseInt(prompt("del 1 al 10, que numero tengo programado?"))
    while(numero != 8){
        console.log("que mal, intenta de nuevo")
        numero = prompt("del 1 al 10, que numero tengo programado?")
    }
} 

adivina() 

// objeto -----------------------------------------------------------
let pc = {
    pantalla: "lg",
    procesador: "intel",
    teclado: "corsair",
    mouse:"hyperx",
}
console.log(pc.procesador) 

// funcion constructora------------------------------------------------
function computadora(pantalla, procesador, teclado, mouse){
this.pantalla = pantalla,
this.procesador = procesador,
this.teclado = teclado,
this.mouse = mouse
this.partes = console.log("procesador " + this.procesador + ", mouse " + this.mouse + ", teclado " + this.teclado + " y pantalla " + this. pantalla)
}
let computadora1 = new computadora("samsung", "amd", "razer", "logitech")
let computadora2 = new computadora("benq", "intel", "logitech", "corsair")

console.log(computadora1.pantalla)
console.log(computadora2.mouse)
// arrays ------------------------------------------

let lista = [1, 2, 3, 4, 5, 6]
let lista2 = ["a", "b", "c", "d", "e"]

for (let i = 0; i<6; i++){
    console.log(lista[i])
} 

//BASICOS

lista.push(5)
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)
lista.unshift(8)
console.log(lista)
lista.splice(0, 2)
console.log(lista) 

let pedazo = lista.slice(2, 6)
console.log(pedazo.join("-"))
let caracteres = lista.concat(lista2)
console.log(caracteres) 
console.log(lista.indexOf(3))
console.log(lista.includes(3))
lista.reverse()
console.log(lista)

//array de objetos  -------------------------

let deposito = [
{id:1456, articulo:" Jabon en Barra ", sector:" Limpieza "},
{id:4387,articulo:" Arroz ", sector:" Alimentos " },
{id:1593,articulo:" Tafirol 500mg ", sector:" Salud " },
{id:8527,articulo:" Shampoo ", sector:" Cuidado Personal " },
] 

console.log(deposito[3].articulo)

for(let i = 0; i < deposito.length ; i++){
    console.log(deposito[i].articulo + deposito[i].id + deposito[i].sector)
}
for(let socotroco of deposito){
    console.log(socotroco.id)
    console.log(socotroco.articulo)
    console.log(socotroco.sector)
}

//funciones superiores------------------------------------------

let carritodecompra = ["pan", "salame", "queso", "mayonesa"]

carritodecompra.forEach((sanguche) =>
    console.log("comprar "+ sanguche)
) 
    // le acabo de decir a la funcion "sanguche" que me marque en consola, que tengo que comprar cada uno (for each) de los items de la lista (carrito de compra)

let letras = ["a","b","c","d","e","f"]
let letrasgrandes = letras.map(function(mayuscula){
    return (mayuscula.toUpperCase())
})
console.log(letrasgrandes.join("-"))
console.log(letras.join("-"))
    // le digo a la funcion (mayuscula) que me genere una copia (.map) en mayuscula de la lista original (letras)

let consecionario = ["Fiat", "Masserati", "Ford", "Chevrolet","Dodge"]
let marcafavorita = consecionario.find((favorito) => favorito === "Dodge")
console.log(marcafavorita)
    // le digo a la funcion (favorito) que encuentre (.find) dentro de la lista (consecionario) a mi marca favorita y la muestro luego en consola

let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = numeros.filter((division) =>{
    return division % 2===0 
})
console.log(pares.join("-"))
    // le pido a la funcion (division) que me separe (.filter) de la lista (numeros) todos los items que sean pares (o que al ser divididos por 2 tengan un resto = 0)

//MATH------------------------------------------------------
let fecha = new Date()
let dia = fecha.getDate()
let mes = fecha.getMonth()
let anio = fecha.getFullYear()
let nuumero = Math.round(Math.random()*100)
console.log(`Tu Numero de la Suerte del dia ${dia}/${mes}/${anio} es ${nuumero}` )



const inicio = new Date()
for(let i = 0; i<1000; i++){
    console.log("haciendo tiempo")
}
const final = new Date()
console.log("el proceso tardo: " + (final - inicio) + "milisegundos") //jajajjaja ta bueno, 13ms marco mi pc.
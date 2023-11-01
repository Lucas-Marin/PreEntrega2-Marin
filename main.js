let saludo = prompt("buen dia").toLowerCase()

if(saludo == "buen dia"){
    alert("Bienvenido!!")
}else if(saludo == "hola"){
    alert("Hola!")
}
else{
    alert("Que Mal Educado :(")
}

for (let contemos = 0; contemos < 101; contemos++) {
    alert("contemos hasta 100, ahora vamos por el "+contemos);
    if(contemos==10){
        alert("deja de tocar enter jajaja")
        break
    }
}

let palabra = prompt("Cual es el mejor lugar para aprender programacion?")
while(palabra != "coderhouse"){
    alert("en serio?");
    palabra = prompt("Cual es el mejor lugar para aprender programacion?")
}

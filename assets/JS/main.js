//////////////////// Saludar por su Nombre ///////////////////////////////
// let nombre = prompt ("Como es tu nombre?")
// alert ("Un gusto ," + nombre)

////////////////// Suma de Numero ///////////////////////////////
// let numero = prompt ("Dime un numero que soy GOD")
// numero = parseFloat(numero)
// let numero2 = 10
// let resultadofinal = numero + numero2
// console.log(resultadofinal)

////////////////// Pedir Nombre y apellido y saludar a la persona ///////////////////////////////
// let nombre = prompt ("Como es tu nombre")
// let apellido = prompt ("Como es tu apellido")
// const espacio = " "
// let resultado = nombre + espacio + apellido
// alert ("Encantado de conocerte y bienvenido a JavaScript "+ espacio + resultado)


//////////////////// Promedio de 3 notas de un Alumno ///////////////////////////////
// let nota1 = prompt ("Primer nota del alumno")
// let nota2 = prompt ("Segunda nota del alumno")
// let nota3 = prompt ("Tercer nota del alumno")
// nota1 = parseFloat (nota1)
// nota2 = parseFloat (nota2)
// nota3 = parseFloat (nota3)
// let resultado = [(nota1 + nota2 + nota3)/3]
// alert ("El promedio del alumno es de "+ resultado)

//Jodita para bebeto////
// let nombre = prompt ("Como te llamas?(gordinigay)")
// alert ("Hola Gordini ndeaaa ,Hola "+ nombre )

// Peluqueria//
// const nombre =prompt("ingrese su nombre")
// let precio = 0
// alert("hola " + nombre + " bienvenido a la peluqueria de Don Mateo")

// let corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")

// while(corte !=1 && corte != 2) {
//     alert("el corte no existe")
//     corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")
// }
// if(corte == 1 ){
//     precio = 500
// }else {
//     precio = 900
// }
// alert ("El precio del corte es "+ precio)

// let dinero = prompt("Con cuanto va a pagar")
// while(dinero < precio) {
//     alert("El pago es insuficiente")
//     dinero = prompt("Con cuanto va a pagar")
// }
// let vuelto = dinero - precio
// alert("Su pago es de "+ precio + " y su cambio es "+ vuelto)

/*MASCOTA comer beber y dormir
let nombre= prompt("Poneme un nombre")
alert("Vaya que me has dado!"+ nombre)

let accion = prompt("Que queres que haga?, (comer,baño,amor o dormir)").toLowerCase()
while (accion != "dormir") {
if (accion == "comer") {
    alert("ñam ñam que rico!")
} else if (accion == "baño") {
    alert("gracias!")
} else if (accion == "amor") {
    alert("Te amo amiguito")
} else {
    alert("que estas diciendo willy?")
}
switch(accion){
    case "comer":
        alert("ñam ñam que rico!")
        break
    case "baño":
        alert("Gracias!")
        break
    case "amor":
        alert("Te amo amiguito")
        break
    default:
        alert("Que estas diciendo willy?")
        break
}
accion = prompt("Que queres que haga?, (comer,baño,amor o dormir)").toLowerCase()
}
alert("Buenas noches")*/

// Productos //
class Productos{
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
    imprimir(){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}
const producto1 = new Productos("Mochila Pierre Cardin",7500,1)
const producto2 = new Productos("Mochila Head",6000,2)
const producto3 = new Productos("Mochila Cruzada de Cuero",8000,3)
const producto4 = new Productos("Portacelular de cuero",2800,3)

for(const prop in producto1){
    console.log(producto1[prop])
}

const nombrecliente = prompt("ingrese su nombre")
alert("hola " + nombrecliente + " bienvenido a JMR")

producto = prompt(`Que producto va a querer llevar? opcion 1 ${producto1.nombre} $ ${producto1.precio} opcion 2 ${producto2.nombre} $ ${producto2.precio} opcion 3 ${producto3.nombre} $ ${producto3.precio}`)

while(producto !=1 && producto != 2 && producto != 3 && producto !=4) {
    alert("el producto no existe")
    producto = prompt(`Que producto va a querer llevar? opcion 1 ${producto1.nombre} $ ${producto1.precio} opcion 2 ${producto2.nombre} $ ${producto2.precio} opcion 3 ${producto3.nombre} $ ${producto3.precio} opcion 4 ${producto4.nombre} $ ${producto4.precio}`)
}
if(producto == 1 ){
    precio = producto1.precio
} else if (producto == 2) {
    precio = producto2.precio
} else if (producto == 3) {
    precio = producto3.precio
} else if (producto == 4) {
    precio = producto4.precio
}

alert ("El precio del producto es "+ precio)


//Pago//
ingresarDatos()

function ingresarDatos (){
    let productoprecio = precio
    let meses = parseInt(prompt("Ingresa la cantidad de cuotas"))
    let banco = prompt("Ingresa de que banco es su tarjeta")
    let interes = calcInteres(banco)
    let precioconinteres = Productoconinteres(productoprecio,interes)
    let cuota = calcCuota(precioconinteres,meses)
    mostrar(precioconinteres,banco,interes,cuota,meses)
}
function Productoconinteres (productoprecio,interes){
    let precioconinteres = productoprecio * (1 + interes/100)
    return precioconinteres.toFixed(2)
}

function calcCuota (precioconinteres,meses){
    let cuota = precioconinteres / meses
    return cuota.toFixed(2)
}

function calcInteres (banco){
    switch (banco){
        case "visa":
            return 10
        case "mastercard":
            return 10
        case "naranja":
            return 15
        default:
            0
    }
}


function mostrar(precioconinteres,banco,interes,cuota,meses){
    alert(`el precio del producto es de $${precioconinteres} con la tarjeta del banco ${banco} tiene un interes de ${interes}% a pagar en cuotas de $${cuota} durante ${meses} meses`)
}
const prompt = requiere('prompt-sync');


let numero1;
let numero2;
numero1 = parseInt(prompt("ingresa el valor numero 1:"));
numero2 = parseInt(prompt("ingresa el valor numero 2:"));


console.log(numero1 * numero2);

/*Realizar un programa que contenga un arreglo indefinido,
en el que solicite a traves de teclado el tamano y se integre 
por lo menos 4 valores de cualquier tipo, utilizando un ciclo para ingresar los datos
imprimir los valores en pantalla*/


const tamanoArreglo = parseInt(prompt("Ingrese el tamano del arreglo:"));

const miArreglo = [];
for (let i = 0; i < tamanoArreglo; i++) {
    const valor = prompt('')
}
primero = 5



//otro

let arreglo = [];

function infoArreglo() {
    const dimesion = parseInt(prompt('ingresa el tamano del arrglo'))
    for (let i = 0; i < dimesion; i++) {
        let datos = prompt("ingresa los datos:")
        arreglo[i] = datos;
    }
    arreglo.push(datos)

    arreglo.map((data) => {
        console.log(data);
    })
}

// objeto
let informacion
const datos = () => {
    for (let i = 0; i < dimesion; i++) {
        let datos = prompt("ingresa los datos:")
        arreglo[i] = datos;
    }

}

//Destructurin
//Spread operation
//objeto

//fromas de destructurar el objeto
const persona ={
 nombre,null
    edad,null
    'Sexo',null
}

persona,{direccion}

let nombre,edad,Sexo

({nombre,edad,Sexo}=persona);
console.log(nombre,Sexo)


let{...datos1}=persona;
datos.persona="christian"
console.log(datos.edad)

//const datos=[2,"hola",23];
//let[]
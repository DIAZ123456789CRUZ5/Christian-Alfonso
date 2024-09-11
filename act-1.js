/*/Realizar un arreglo con dos dimenciones y guardar dos arreglos internos,
y dar lectura a los internos (utilizando los siguientes metodos):*/

//-for of


const array = [1,2,3,4,5];
for (const elemento of array) {
    console.log(elemento)
}
//-for in 
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("usando//for in")
for (let i in matriz) {
    for (let j in matriz[i]){
        console.log(matriz[i][j]);
    }
}
//-for each
let B = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log ("usando el ciclo forEach");
matriz.forEach(fila => {
    fila.forEach(elemento => {
        console.log(elemento);
    })
})
//-function flecha
let m = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log('funcion flecha:');
m.forE
//-whille
let c = [
    [1,2,3]
    [4,5,6]
];
console.log ("ciclo while")
whille(i<c.length);{
    i++
    let v=c[i]
    while(j<c.length){
        j++;
        let = v [i][j]

    }
}
console.log(let)
//-estructura control parser


 ++
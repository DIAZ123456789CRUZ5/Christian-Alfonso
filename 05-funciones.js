//factory function 
const Persona={
    nombre:"Christian",
    edad:18
}
const Persona2={
    nombre:"cj",
    edad:18
}

function datospersona(nombre,edad){
    return{
        nombre:nombre,
        edad:edad,
        active:true
    }
}

let persona1=datospersona("christian",18);
let persona2=datospersona("cj",18);

function datospersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true
    }
}
//camel case
const datosUsuario={
    nombre:"Christian",
    edad:18,
    password:"1234567",
    direccion:{
        colonia:"El carmen",
        calle:"Principal",
        numerext:123
    },
    sueldo:234.24,
    guardarUsuario:function(){
//console.log(datosUsuario)
    }
}

datosUsuario.guardarUsuario();


const user={id:1};
user.nombre="christian"
user.guardarUser=function(){
    console.log("guardando user...");
}
//console.log(user);
user.guardarUser();


//objetos definidos 

const Person=Object.seal({id:1,nombre:"christian"})
Person.id=2;
Person.nombre="js"
Person.edad=18;

//console.log(Person);
//pasar funciones como parametros 
function pitbul(nombre){
this._nombre=nombre;
}

function animal(fn,argumento){
    return new fn(argumento)
}

let animal1=animal(pitbul,"chop")
console.log(animal1)
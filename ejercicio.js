class persona {
    constructor( nombre,edad,sexo,direccion,telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}  
const Personas =[];
function agregarPersonas(persona){
    Personas.push(persona)
}
function mostrarPersonas(){
    Personas.forEach((persona, index)=>{
        console.log(`Persona ${index + 1}:`);
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Sexo: ${persona.sexo}`);
        console.log(`Direccion: ${persona.direccion}`);
        console.log(`Telefono: ${persona.telefono}`);
        console.log(`////////////////////////////`);

    })
}
const persona1 = new persona("Christian Diaz",18,"M","Calle mactum",);
const persona2 = new persona("Juan Diaz",19,"M","Calle primavera",);
const persona3 = new persona("Zeidy",2,"F","Calle San jose",);

agregarPersonas(persona1);
agregarPersonas(persona2);
agregarPersonas(persona3);

mostrarPersonas();
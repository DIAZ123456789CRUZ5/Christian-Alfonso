//definir clases con atributos dentro del constructor

class Persona{
    constructor(nombre,edad,Sexo,direccion){
    this._nombre=nombre;
    this._Sexo=Sexo;
    this._edad=edad;
    this._direccion=direccion;
}
//metodo saludar
saludar(){
console.log(`hola ${this,this.nombre}`);

    }
    //encapsulamiento setter y getter
    get nombre(){
        return this._nombre
    }
    set nombre(values){
        this._nombre=values;
    }
}

let persona1=new Persona("christian",19,"M","Balancan");
persona1.nombre="cj";
console.log(set);
persona1.saludar();
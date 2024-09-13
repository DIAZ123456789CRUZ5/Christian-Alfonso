//Evaluacion tema 1 
const prompt = require("prompt-sync")();

const porc = 0.5;
class cooperativa {
    constructor(nombre, apellido, RFC, direccion, telefono, hrstra, cosxhora) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._RFC = RFC;
        this.direccion = direccion;
        this._telefono = telefono;
        this._cosxhora = cosxhora;
        this._hrstra = hrstra;
        this._agregarEm=[];
        this._sueldo = 0;
    }
    //getter
    //setter
    agregarEmp() {
        let tam = parseInt(prompt("cantidad de empleados a dar de alta"));
        for (let i = 0; i < tam; i++) {
            this._nombre = prompt("Ingresa el nombre del empleado:");
            this._hrstra = parseInt(prompt("Numero de horas trabajadas:"));
            this._cosxhora = parseFloat(prompt("ingrese el costo por"));
        }
        let empleado = {
            nombre: this._nombre,
            hrstra: this._hrstra,
            cosxhora: this._cosxhora,
            sueldo: this.calculaElsueldo(),

        };
        this._agregarEm.push(empleado);
    }
    eliminarEmp() {
        this._agregarEm.length > 0
            ? this._agregarEm.pop()
            : console.log("No hay registros que eliminar");
    }

    calculaElsueldo() {
        if (this._hrstra > 8) {
            this._sueldo = this._cosxhora * this._hrstra;
            return (this._sueldo =
                this._sueldo + this._cosxhora * porc * (this._hrstra - 8));
        } else {
            return (this._sueldo = this._cosxhora * this._hrstra);
        }
    }
    mostrarEmpleados() {

            this._agregarEm.map((emp) => {
                console.log(
                    emp
                );
            }) ; console.log("No hay empleados que mostrar");
    }
    menulista(){
        let listar=parseInt(prompt("que desea hacer:1.agregar,2.mostrar,3.eliminar"))
        while(listar!=4){
            switch(listar){
                case 1:
                    this.agregarEmp();
                    break;
                case 2:
                    this.mostrarEmpleados() 
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
        }
    }

}
let empleado = new cooperativa();
empleado.agregarEmp();
empleado.mostrarEmpleados();
//empleado.eliminarEmp();

/*/ La sociedad Cooperativa de tigres necesita para su gestion una estructura de datos que permita almacenar los datos de sus empleados:nombre, apellidos,RFC, direccion y telefono. 
-Se necetitan añadir empleados segun se vayan contratando.
-Se iran eliminado cuando se les despida.
-El ultimo en entrar sera el ptimero en ser despedido. */

class empleados{ 
    constructor(nombre,apellidos,RFC,Direccion,num_telefonico){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._RFC=RFC;
        this._Direccion=Direccion;
        this._num_telefonico=num_telefonico;
        this._sueldo=this._sueldo;
    }


calculaElsueldo(horasExtrasSabado){
    if (horasExtrasSabado){
        this._sueldo+=this._sueldo*15;
    }
 }
}

const empleado1=new empleados("Christian","Diaz","Calle las Malvinas bro","Calle mactum","916140");
empleado1.calcularSueldo(true);
console.log(empleado1._sueldo)



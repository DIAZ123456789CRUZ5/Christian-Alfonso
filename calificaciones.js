class Alumno{
    constructor(nombre,apellido,numcontrol,carrera,semestre,sexo,turno){
        this.nombre = nombre;
        this._apellido = apellido;
        this._numcontrol = numcontrol;
        this._carrera = carrera;
        this._semestre = semestre;
        this._sexo = sexo;
        this._turno = turno;
        this._calificaciones = [];
    }
    agregarCalificacion(calificacion){
        this._calificaciones.push(calificacion)
    }

    mostrarInformacion(){
        console.log(`Alumno:${this.nombre} ${this._apellido}`);
        console.log(`Num.Control: ${this._numcontrol}, Carrera: ${this._carrera},Semestre: ${this._semestre}`);
        console.log(`Sexo: ${this._sexo},Turno:${this._turno}`);
        console.log(`Calificaciones:`);
        this._calificaciones.forEach(cal => {
            
        });
    };

}
class Materia{
    constructor(ndelamlt,docente,hora){
        this._ndelamlt = ndelamlt;
        this._docente = docente;
        this._hora = hora;
    }
}
class Docente {
    constructor(nombre,matricula){
        this._nombre = nombre;
        this._matricula = matricula;
    }
}
class Calificacion {
    constructor(Materia,calificacion){
        this._Materia = Materia;
        this._calificacion = calificacion;
    }

calcularPromedio(){
    const sum = this._calificacion.reduce((a,b)=> a + b,0);
    return sum/this._calificacion.length;
    }

}

const alumno1 = new Alumno(`Christian`,`Alfonso`,`23e20108`,`Ingenieria en sistemas`,3,`M`,`Matutino`);
const estructuraDeDatos = new Materia(`Estructura de datos`,`Christian`,`07:00-02:00`);
const calificacionDeEstructura = new Calificacion(estructuraDeDatos,[70,80,90]);
alumno1.agregarCalificacion(calificacionDeEstructura);
alumno1.mostrarInformacion();
 
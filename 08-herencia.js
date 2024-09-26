class persona{
    constructor(nombre,apellido,edad,sexo,direccion,telefono,correco){}
    class alumno extends persona{
        constructor(matricula,carrera,semesre,horario){}
        super(...persona);
    }

}
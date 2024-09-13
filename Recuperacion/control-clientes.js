/*/Realiza un control de clientes con los siguientes datos:Numero de membresia, nombre, direccion, telefono, 
estado del cliente: deudor o libre de multa 
2-consultas general 
3-baja de cliente
4-salida */
class clientes {
    constructor(membresia,nombre,direccion,telefono){
        this._membresia=membresia;
        this._nombre=nombre;
        this._direccion=direccion;
        this._telefono=telefono;
        this._estado=estadodecliente;
        this._consulta=consulta;
    }
    registroClientes(){
        let valorar = parseInt(prompt("Personas a registrar"));
        for (let i = 0;i<valorar;i++){
            this._nombre = prompt ("Ingrese su nombre");
            this._membresia=parseInt(prompt("Añada su numero de memebresia: "));
            this._direccion=prompt("Ingrese su direccion: ");
            this._telefono=parseInt(prompt("Ingrese su numero telefonico: "));
            this._estado=prompt("Seleccione su estado: 1.- Deudor,2.-Libre");
            switch(parseInt(this._estado)){
                case 1:
                    this._estado="Deudor";
                    console.log("Debe")
                    break;
                case 2:
                    this._estado="Libre";
                    console.log("Libre de multas");
                    break;

            }
            let datos = {
                nombre:this._nombre,
                membresia:this._membresia,
                direccion:this._direccion,
                telefono:this._telefono,
                estado:this._estado

            }
            this._consulta.push(datos)
        }
    }
    mensaje(){
        if(this._consulta.length>0){
            this._consulta.forEach((mvp)=>{
                console.log(`Hola ${mvp.nombre}tu ${mvp.membresia}es activa`);
            })
        }else{
            console.log("No se han ingresado datos ")
        }
    }
    eliminaerDeudor(){
        for(let i = 0;i<this._consulta.length;i++){
            if(this._consulta[i].estado==="Deudor"){
                this._consulta.slice(i,1);
                console.log(`Cliente ${this._consulta[i].nombre}con membresia ${this._consulta[i].membresia}Se te ah dado de baja`);
            }else{
                console.log(`Cliente ${this._consulta[i].nombre}con membresia ${this._consulta[i].membresia}sin libre de multa`);
            }
        }
    }
}
let cliente = new cliente();
cliente.registroClientes()
cliente.eliminaerDeudor()


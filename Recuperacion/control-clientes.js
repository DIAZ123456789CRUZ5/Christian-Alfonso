/*/Realiza un control de clientes con los siguientes datos:Numero de membresia, nombre, direccion, telefono, 
estado del cliente: deudor o libre de multa 
2-consultas general 
3-baja de cliente
4-salida */
class clientes {
    constructor(membresia, nombre, direccion, telefono) {
        this._membresia = membresia;
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._estado = estadodecliente;
        this._consulta = consulta;
    }
    registroClientes() {
        let valorar = parseInt(prompt("Personas a registrar"));
        for (let i = 0; i < valorar; i++) {
            this._nombre = prompt("Ingrese su nombre");
            this._membresia = parseInt(prompt("Añada su numero de memebresia: "));
            this._direccion = prompt("Ingrese su direccion: ");
            this._telefono = parseInt(prompt("Ingrese su numero telefonico: "));
            this._estado = prompt("Seleccione su estado: 1.- Deudor,2.-Libre");
            switch (parseInt(this._estado)) {
                case 1:
                    this._estado = "Deudor";
                    console.log("Debe")
                    break;
                case 2:
                    this._estado = "Libre";
                    console.log("Libre de multas");
                    break;
            }
            let datos = {
                nombre: this._nombre,
                membresia: this._membresia,
                direccion: this._direccion,
                telefono: this._telefono,
                estado: this._estado
            }
            this._consulta.push(datos)
        }
    }

    eliminaerDeudor() {
        for (let i = 0; i < this._consulta.length; i++) {
            if (this._consulta[i].estado === "Deudor") {
                this._consulta.slice(i, 1);
                console.log(`Cliente ${this._consulta[i].nombre}con membresia Se te ah dado de baja`);
            } else {
                console.log(`Cliente ${this._consulta[i].nombre}con membresia sin libre de multa`);
            }
        }
    }
}
let cliente = new cliente();
cliente.registroClientes()
cliente.eliminaerDeudor()
class cine extends cliente {
    constructor(numero, titulo, clasificacion, disponibilidad, tipo,) {
        super()
        this._numero = numero;
        this._titulo = titulo;
        this._clasificacion = clasificacion;
        this._disponibilidad = disponibilidad;
        this._tipo = tipo;
        this._consultpeli = []
        this._precioPeli= 0
    }
    //control de peliculas 
    consultaPeli() {
        let pelis = parseInt(prompt("Ingrese las peliculas a consultar: "));
        for (let i = 0; i < pelis; i++) {
            this._titulo = prompt("Nombre de la pelicula;: ");
            this._disponibilidad = parseInt(prompt("Aun hay(1.-Disponible),(2.-Rentado)"));
            switch (parseInt(this._disponible)) {
                case 1:
                    this._disponibilidad = 'Disponible'
                    break
                case 2:
                    this._disponibilidad = 'Rentada'
                    break
            }
            this._tipo = prompt("Clasificación de pelicula(3.Estreno),(4.Catalogo)")
            switch (parseInt(this._tipo)) {
                case 3:
                    this._tipo = 'Estreno';
                    break;
                case 2:
                    this._tipo = 'Catalogo';
                    break;
            }
            let varea = {
                nombre: this._numero,
                membresia: this._titulo,
                direccion: this._clasificacion,
                telefono: this._disponibilidad,
                estado: this._tipo
            }
            this._consultaPeli.push(varea)
        }
    }
    eliminarpelicula() {
        for (let i = 0; i < this._consultpeli.length; i++) {
            if (this._consultpeli[i].disponibilidad === 'Rentada') {
                this._consultaPeli.slice(i, 1);
                console.log(`La pelicula ${this._consultaPeli[i].titulo}ha sido rentada`);
            } else {
                console.log(`La pelicula ${this._consultaPeli[i].titulo}sigue disponible`);
            }
        }
    }
    rentarPeliculas(titulo, verif){
        let cinemax = this._consultpeli;
        let peliEncontrada = null;
        for (let i = 0; i < cinemax.length;i++){
            if (cinemax[i].titulo===titulo){
                peliEncontrada = cinemax[i]
                break;
            }
        }
        if (peliEncontrada){
            if (peliEncontrada.disponibilidad ==='Esta Disponible'){
                let deudorLibre=verif._consulta.some(c => c.estado === 'Deudor')
                if (deudorLibre){
                    console.log("Salde su deuda");
                }else{
                if(peliEncontrada.tipo === 'En estreno'){
                    this._precioPeli=60;
                }else if (peliEncontrada.tipo===' Catalogo'){
                    this._precioPeli=40
                }
                let fechaRenta = prompt("Ingrese su fecha de renta")
                let fechaLime =    this.calcularlimite(fechaRenta)
                peliEncontrada.disponibilidad='Rentada';
                peliEncontrada.fechaRenta = fechaRenta;
                peliEncontrada.fechaLime=fechaLime;
                console.log(`La pelicula ${titulo} ha sido rentada`);               
                console.log(`Fecha de devolucion ${peliEncontrada.fechaRenta}`);
                console.log(`El precio es de $${this._precioPeli}`);
            }
            }else {
                console.log("La pelicula no esta disponible");
            }
        }
    }
    calcularlimite(fechaRenta){
        let fechaLime=new Date(fechaRenta);
        fechaLime.setDate(fechaLime.getDate()+3);
        return fechaLime.toISOString().slice(0,10)
    }
    pelirentada(tituloConsu){
        console.log(`Infromacion de la peli ${tituloConsu}`);

        let pelis = false
        for(let i=0.;i<this._consultaPeli.length;i++){
            if ()
        }
    }
}
let clientes = new clientes();
cliente.registroClientes();
cliente.eliminaerDeudor();

let starci = new cine();
starci.consultaPeli();
let titulo= prompt("Ingrese el titulo de la pelicula que descee rentar")
let verif = cliente
starci.rentarPeliculas(titulo,verif)
starci.eliminarpelicula();



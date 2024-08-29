//crear una lsita con diferentes tipos de datos
let datos={nombre:"Christian",apellidos:"Diaz",edad:"18",estudiante:"verdadero"}; //funciona con claves y valores
let arreglos=["Christian",18,true]; // arreglo

const info=()=>{
    for(let arr in arreglos){
        console.log(arreglos[arr]);


        for (let lis in datos){
            console.log(`${lis}:${datos[lis]}`);
        }
        let valores=Object.values(datos);
valores.map((data)=>{
    console.log(data);
});

    }
    let valores=Object.keys(datos);
    for (let data of valores){
        let infor=[data]
    }
};
info()

/*/let arreglo=["christian",18,true];
let datos={}
while(i<datos.lenght){
info = datos[i];
log(info);
}
    
    }
informacion();*/    
le
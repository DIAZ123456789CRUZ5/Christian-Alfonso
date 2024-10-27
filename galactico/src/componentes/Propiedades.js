import React from 'react'

function Propiedades(props) {
    const {nombre,variable1,variable2,varbol}=props;
    const apellido="Diaz"
   // console.log(props);
    
    return (
      <div>
        Propiedades
        <h1>Propiedad 1:{nombre}</h1>
        <h1>Propiedad 2:{variable1}</h1>
        <h1>Propiedad3:{variable2}</h1>
        <h1>Propiedad4:{varbol}</h1>
        <h1>Operaciones</h1>
        <h2>Suma:{variable1+variable2}</h2>
        <h2>Producto:{variable1*variable2}</h2>
        <h1>Propiedad2: {apellido}</h1>
      </div>
      
   
    )
  }
  
  export default Propiedades
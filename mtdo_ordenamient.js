//BURBUJA
datos = [8, 10, 5, 3, 1, 15];

function mostrar() {
  console.log(datos);
}

function burbuja() {
  let n = datos.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (datos[j] > datos[j + 1]) {
        // Intercambiar elementos
        let temp = datos[j];
        datos[j] = datos[j + 1];
        datos[j + 1] = temp;
      }
    }
  }
}

mostrar(); 
burbuja(); 
mostrar(); 
/*/
//Recursivo 
datos = [8,10,5,3,1,15];
function mostrar(){
    console.log(datos);
}
function burbuja(){
    let n = datos.length;
    for(let i = 0; i<n - 1; i++){
        for(let i = 0;j<n-i-1; j++){
            if (datos[j]>datos[j + 1]){
            let temp = datos[j];
            datos[j] = datos[j + 1];
            da[j + 1]= temp;
        }
    }
    }
}
mostrar();
burbuja();
mostrar();*/







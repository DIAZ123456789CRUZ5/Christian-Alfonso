/*/Recursividad

function fibo(n){

let arr=[0,1];
for (let i=2;i<n;i++){
arr[i]=arr[i-1]+arr[i-2];
}
return arr; 


console.log(fibo(400));}*/


/*/function fibo(n){
    let inicial = 0
    let temporal = 1
    let actual = 0
    for (i=0; i<n;i++) {

    inicial=temporal
    temporal=actual
    actual=inicial+temporal
console.log(actual); }

}
fibo(6)*/
function fibo(n){
    if (n<2){
        return n;
    } else {
    return fibo (n-1) + fibo(n-2)
    }
    
}
for (let i=0; i<6; i++){
    console.log(fibo(i))
}

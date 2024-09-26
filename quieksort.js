function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Un arreglo de 0 o 1 elemento ya está ordenado
    }
  
    const pivot = arr[arr.length - 1]; // Tomamos el último elemento como pivote
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
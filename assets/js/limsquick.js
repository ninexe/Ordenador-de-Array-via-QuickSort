

function quicksort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0]
  
  const head = array.filter( n => n < pivot)
  const equal = array.filter( n => n === pivot)
  const tail = array.filter( n => n > pivot)

  return quicksort(head).concat(equal).concat(quicksort(tail));
}

function ordenar(){
  event.preventDefault();
  let a = parseInt(document.querySelector("#i1").value ) 
  let b = parseInt(document.querySelector("#i2").value ) 
  let c = parseInt(document.querySelector("#i3").value ) 
  let d = parseInt(document.querySelector("#i4").value ) 
  let e = parseInt(document.querySelector("#i5").value ) 
  let f = parseInt(document.querySelector("#i6").value ) 
  document.getElementById('texto').value = 'Os numeros ordenados foram: '
  document.getElementById('texto').value += quicksort([a,b,c,d,e,f]);
  
}

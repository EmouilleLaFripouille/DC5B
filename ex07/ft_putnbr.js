function combination(number) {
  let result = [];
  let numberStr = number.toString();
  
  function permutate(arr, m = []) {
    if (arr.length === 0) {
      result.push(m.join(''))
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutate(curr.slice(), m.concat(next))
     }
   }
  }
  permutate(numberStr.split(''));
  document.write('Nombre en parametre : '+number);
  document.write('<br>');
  document.write('Combinaisons possibles : '+result);
}
combination(432);



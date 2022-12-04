function alphabetReverse(){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  //mieux vaut juste faire console.log("zyxwvutsrqponmlkjihgfedcba")
  return alphabet.reverse().join('')
}

console.log(alphabetReverse());
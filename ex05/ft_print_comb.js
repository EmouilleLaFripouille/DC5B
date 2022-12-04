function combination() {
  let array=[]
  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      for (let k = j + 1; k < 10; k++) {
          array+= [i] + [j] + [k] + '. ';
      }
    }
  }
  console.log(array);
}
combination();